import { useState, useEffect, Fragment } from "react";
import { useSpring } from "react-spring";
import { useSwipeable } from "react-swipeable";
import Link from 'next/link';
import Router from 'next/router'

import Accordion from './utils/accordion/Accordion';
import HamburgerMenu from "./utils/hamburger-menu";
import { 
  StyledNav, 
  StyledLogo,
  LogoWrapper,
  LinkWrapper,
  HamburgerWrapper, 
  HiddenNavWrapper, 
  HiddenNavBackdrop,
  HiddenNavList,
  OpenNavOverlay,
  LeftIcons,
  RightIcons,
  HorizontalLine,
  SearchWrapper,
  HiddenCheckoutPreviewWrapper,
  HiddenCheckoutPreview
} from "../layouts/nav-styles";
import Search from "./search/Search";
import CheckoutPreview from "./checkout/CheckoutPreview";

const Navbar = ({theme = "dark", checkout}) => {
  const [activeHover, setActiveHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState(0);
  const [displaySearch, toggleSearch] = useState(false);
  const [showCheckoutPreview, toggleCheckoutPreview] = useState(false);

  const hamburgerAnimation = useSpring({
    transform: activeMenu ? "translateX(0px)" : "translateX(64px)",
    WebkitTransform: activeMenu ? "translateX(0px)" : "translateX(64px)"
  });

  const openNavLeft = useSpring({
    transform: activeMenu ? "translateX(0%)" : "translateX(-100%)",
    WebkitTransform: activeMenu ? "translateX(0%)" : "translateX(-100%)"
  });

  const openNavRight = useSpring({
    transform: showCheckoutPreview ? "translateX(0%)" : "translateX(100%)",
    WebkitTransform: showCheckoutPreview ? "translateX(0%)" : "translateX(100%)"
  });
  
  const openNavBackground = useSpring({
    config: { duration: 500, clamp: true }
  });

  useEffect(() => {
    let count = 0;
    checkout.lineItems && checkout.lineItems.forEach((lineItem) => {
      count += lineItem.quantity;
    });
    setCheckoutItems(count);
  }, [checkout.lineItems]);

  const handleRouteChange = () => setActiveMenu(false);

  Router.events.on('routeChangeStart', handleRouteChange);
  
  return (
    <StyledNav
      dark={theme === "dark"}
      // light={theme === "light"}
      activeHover={activeHover}
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      <OpenNavOverlay
        activeMenu={activeMenu}
        showCheckoutPreview={showCheckoutPreview}
        style={openNavBackground}
        onClick={() => setActiveMenu(false)}
        swipe={{
          ...useSwipeable({ onSwipedLeft: () => setActiveMenu(false) })
        }}
      />
      <LeftIcons>
        {activeMenu && <HiddenNavBackdrop onClick={() => setActiveMenu(false)}/>}
        <HiddenNavWrapper
          style={openNavLeft}
          {...useSwipeable({ onSwipedLeft: () => setActiveMenu(false) })}
        >
          <HiddenNavList>  
            <Accordion border={false} iconAlignment="left">
              <div label='Plans'>
                <ul>
                  <li>Plans</li>
                </ul>
              </div>
              <div label='Clothing'>
                <ul>
                  <li>All</li>
                  <li>Dresses</li>
                  <li>Coats</li>
                  <li>Skirts</li>
                  <li>Tops</li>
                </ul>
              </div>
              <div label='Accessories'>
                <ul>
                  <li>Accessories</li>
                </ul>
              </div>
              <div label='Designer'>
                <ul>
                  <li>Designer</li>
                </ul>
              </div>
            </Accordion>
            <HorizontalLine />
            <LinkWrapper>
              <Link href="/" as="/" passHref>
                <a>How It Works</a>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href="/" as="/" passHref>
                <a>FAQ</a>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href="/" as="/" passHref>
                <a>Get $50</a>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href="/" as="/" passHref>
                <a>Sign In</a>
              </Link>
            </LinkWrapper>
          </HiddenNavList>
        </HiddenNavWrapper>
        <HamburgerMenu
          theme={theme}
          activeHover={activeHover}
          activeMenu={activeMenu}
          callback={setActiveMenu}
        />
        <p onClick={() => toggleSearch(true)}>Search</p>
        {displaySearch && 
        <Fragment>
          <HiddenNavBackdrop onClick={() => toggleSearch(false)}/>
          <SearchWrapper displaySearch={displaySearch}>
            <Search close={() => toggleSearch(false)}></Search>
          </SearchWrapper>
        </Fragment>
      }
        
      </LeftIcons>
      <LogoWrapper>
        <h1>CLOSETTE</h1>
        {/* <LinkWrapper>
          <Link href="/restricted" as="/" passHref>
            <a>
              <StyledLogo />
              
            </a>
          </Link>
        </LinkWrapper> */}
      </LogoWrapper>
      <RightIcons>
        <span>Icon3</span>
        <span onMouseEnter={() => checkoutItems > 0 && toggleCheckoutPreview(true)} className="cart-count">{checkoutItems}</span>
        {showCheckoutPreview && <HiddenNavBackdrop onClick={() => toggleCheckoutPreview(false)}/>}
        <HiddenCheckoutPreviewWrapper style={openNavRight}>
          <HiddenCheckoutPreview>
            <CheckoutPreview checkout={checkout} />
          </HiddenCheckoutPreview>
       </HiddenCheckoutPreviewWrapper>
      </RightIcons>  
    </StyledNav>
  )
};

export default Navbar;