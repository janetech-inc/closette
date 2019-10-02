import { useState } from "react";
import { useSpring } from "react-spring";
import { useSwipeable } from "react-swipeable";
import cx from "classnames";
import { Link } from "../../config/routes";
import { gaTrackNavEvent } from "../utils/ga_analytics"
import {
  StyledNav,
  StyledLogo,
  StyledHiddenLogo,
  Rack,
  RackCount,
  HiddenNavWrapper,
  HamburgerWrapper,
  HiddenNavContent,
  HiddenNavList,
  SignInWrapper,
  PageName,
  OpenNavOverlay,
  LinkWrapper,
  LogoWrapper,
  Sides
} from "./nav-styles";

import HamburgerMenu from "../components/utils/hamburger-menu";
import { useStateProvider } from "../reducers/state_provider";

const navLinks = [
  {
    route: "/collections",
    name: "COLLECTIONS"
  },
  {
    route: "/about",
    name: "ABOUT US"
  }
];

// accepts 'light' or 'dark' as themes
const Nav = ({
  router,
  theme = "light",
  name,
  showLogo = true,
  showRack = true
}) => {
  const [{ cart, user }] = useStateProvider();
  const [activeHover, setActiveHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const openNavLeft = useSpring({
    transform: activeMenu ? "translateX(0%)" : "translateX(-100%)",
    WebkitTransform: activeMenu ? "translateX(0%)" : "translateX(-100%)"
  });
  
  const openNavBackground = useSpring({
    backgroundColor: activeMenu ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
    config: { duration: 500, clamp: true }
  });

  const isActive = link => router.pathname === link;

  const isLoggedIn = () => {
    return user != null && user.user_id != null;
  }

  const hamburgerAnimation = useSpring({
    transform: activeMenu ? "translateX(0px)" : "translateX(64px)",
    WebkitTransform: activeMenu ? "translateX(0px)" : "translateX(64px)"
  });

  return (
    <StyledNav
      dark={theme === "dark"}
      light={theme === "light"}
      activeHover={activeHover}
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      <Sides />
      <LogoWrapper>
        <LinkWrapper>
          {showLogo && (
            <Link href="/restricted" as="/" passHref>
              <a>
                <StyledLogo />
              </a>
            </Link>
          )}
        </LinkWrapper>
      </LogoWrapper>
      <Sides>
        {showRack && (
          <Link href="/rack" passHref>
            <Rack className={cx({ ["active"]: isActive("/rack") })}>
              MY RACK
              <RackCount>{cart.length}</RackCount>
            </Rack>
          </Link>
        )}
      </Sides>
      <OpenNavOverlay
        activeMenu={activeMenu}
        style={openNavBackground}
        onClick={() => setActiveMenu(false)}
        swipe={{
          ...useSwipeable({ onSwipedLeft: () => setActiveMenu(false) })
        }}
      />
      <PageName>{name}</PageName>
      <HiddenNavWrapper
        style={openNavLeft}
        {...useSwipeable({ onSwipedLeft: () => setActiveMenu(false) })}
      >
        <HamburgerWrapper style={hamburgerAnimation}>
          <HamburgerMenu
            activeHover={activeHover}
            theme={theme}
            activeMenu={activeMenu}
            callback={setActiveMenu}
          />
        </HamburgerWrapper>
        <HiddenNavContent>
          <StyledHiddenLogo />
          <HiddenNavList>
            {navLinks.map(navLink => {
              return (
                <li key={navLink.name} onClick={(e) => { gaTrackNavEvent(navLink.name); setActiveMenu(false);}}>
                  <Link href={navLink.route}>
                    <a className={cx({ ["active"]: isActive(navLink.route) })}>
                      <h1>{navLink.name}</h1>
                    </a>
                  </Link>
                </li>
              );
            })}
          </HiddenNavList>
        </HiddenNavContent>
        <SignInWrapper>
          {!isLoggedIn() && (
            <Link href="/login" passHref>
              <a>
                SIGN IN
              </a>
            </Link>
          )}
          {isLoggedIn() && (
            <Link href="/logout" passHref>
              <a>
                SIGN OUT
              </a>
            </Link>
          )}
        </SignInWrapper>
      </HiddenNavWrapper>
    </StyledNav>
  );
};

export default Nav;
