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
      {/* <Link href="/products"><a>Products</a></Link> */}
      <HamburgerWrapper>
        <HamburgerMenu
          theme={"dark"}
          activeHover={activeHover}
          activeMenu={activeMenu}
          callback={setActiveMenu}
        />
      </HamburgerWrapper>
      <h1>CLOSETTE</h1>
    </div>
  )
};

export default Navbar;