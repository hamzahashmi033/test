import React from "react";
import "./style.css";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Logo from "../../public/logo/logo.png"
const Header = () => {
  return (
    <nav className="navbarSection">
      <div >
        <div>
          <GiHamburgerMenu size={30} color="black" />
        </div>
        <div>
          <Image src={Logo}  />
        </div>
      </div>
      <div className="">
       <CiSearch size={30} color="black"/>
       <CiUser size={30} color="black"/>
       <CiShoppingCart size={30} color="black"/>
      </div>
    </nav>
  );
};

export default Header;
