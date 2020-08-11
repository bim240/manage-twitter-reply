import React from "react";
import { GiCutDiamond } from "react-icons/gi";
import { AiOutlineClockCircle, AiTwotoneShop } from "react-icons/ai";
import { RiHome4Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { TiMessages, TiFolder } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { GrSettingsOption } from "react-icons/gr";

const Header = (props) => {
  let navData = [
    { name: <AiOutlineClockCircle />, link: "/clock" },
    { name: <RiHome4Line />, link: "/home" },
    { name: <FiUsers />, link: "/user" },
    { name: <TiMessages />, link: "/" },
    { name: <TiFolder />, link: "/folder" },
    { name: <AiTwotoneShop />, link: "/shop" },
  ];
  return (
    <header className="header_container">
      <div>
        <div className="header_icon_container">
          <GiCutDiamond />
        </div>
        <nav className="nav_contanier">
          {navData.map((singleNav, i) => {
            return (
              <NavLink
                to={singleNav.link}
                key={i}
                className="single_nav"
                activeClassName="nav_active">
                {singleNav.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="profile_setting">
        <NavLink to="/setting" activeClassName="active" className="icon">
          <GrSettingsOption />
        </NavLink>
        <NavLink to="/profile" className="icon ">
          <img
            src="https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4"
            className="profile_image"
            alt="img"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
