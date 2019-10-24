import { useState } from "react";
import { useSpring } from "react-spring";
import { useSwipeable } from "react-swipeable";
import Link from 'next/link';

import HamburgerMenu from "./utils/hamburger-menu";
import { 
  StyledNav, 
  StyledLogo,
  LogoWrapper,
  LinkWrapper,
  HamburgerWrapper, 
  HiddenNavWrapper, 
  HiddenNavList,
  OpenNavOverlay,
  LeftIcons,
  RightIcons
} from "../layouts/nav-styles";

const Navbar = ({theme = "dark"}) => {
  const [activeHover, setActiveHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const hamburgerAnimation = useSpring({
    transform: activeMenu ? "translateX(0px)" : "translateX(64px)",
    WebkitTransform: activeMenu ? "translateX(0px)" : "translateX(64px)"
  });

  const openNavLeft = useSpring({
    transform: activeMenu ? "translateX(0%)" : "translateX(-100%)",
    WebkitTransform: activeMenu ? "translateX(0%)" : "translateX(-100%)"
  });
  
  const openNavBackground = useSpring({
    config: { duration: 500, clamp: true }
  });

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
        style={openNavBackground}
        onClick={() => setActiveMenu(false)}
        swipe={{
          ...useSwipeable({ onSwipedLeft: () => setActiveMenu(false) })
        }}
      />
      <LeftIcons>
        <HiddenNavWrapper
          style={openNavLeft}
          {...useSwipeable({ onSwipedLeft: () => setActiveMenu(false) })}
        >
          <HiddenNavList>
            <ul>
              <li>Plans</li>
              <li>Clothing</li>
              <li>Accessories</li>
              <li>Designer</li>
            </ul>
            <hr></hr>
          </HiddenNavList>
        </HiddenNavWrapper>
        <HamburgerMenu
          theme={theme}
          activeHover={activeHover}
          activeMenu={activeMenu}
          callback={setActiveMenu}
        />
        <p>Icon2</p>
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
        <p>Icon3</p>
        <p>Icon4</p>
      </RightIcons>
    </StyledNav>
  )
};

export default Navbar;