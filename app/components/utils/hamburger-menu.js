import { StyledHamburgerMenu, HamburgerIcon } from "./hamburger-menu-styles";

const HamburgerMenu = ({ activeHover, theme, activeMenu, callback }) => (
  <StyledHamburgerMenu onClick={() => callback(!activeMenu)}>
    <HamburgerIcon
      activeTheme={theme}
      activeHover={activeHover}
      activeMenuItem={activeMenu}
    />
  </StyledHamburgerMenu>
);

export default HamburgerMenu;
