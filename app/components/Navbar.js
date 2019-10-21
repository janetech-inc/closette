import { useState } from "react";
import "./Navbar.scss";
import Link from 'next/link';

import HamburgerMenu from "./utils/hamburger-menu";
import { HamburgerWrapper } from "../layouts/nav-styles";

const Navbar = () => {
  const [activeHover, setActiveHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="Navbar">
      <HamburgerWrapper className="left">
        <HamburgerMenu
          theme={"dark"}
          activeHover={activeHover}
          activeMenu={activeMenu}
          callback={setActiveMenu}
        />
      </HamburgerWrapper>
      <h1 className="center">CLOSETTE</h1>
      <div className="right"></div>
    </div>
  )
};

export default Navbar;