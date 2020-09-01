import React from "react";
import { scrollById } from "../../utils/Tools";

import "./menu.css";

const Menu = () => {
  return (
    <div className="menu d-flex">
      <p onClick={() => scrollById("aboutMe")}>About me</p>
      <p onClick={() => scrollById("projects")}>My projects</p>
      <p onClick={() => scrollById("contact")}>Contact</p>
    </div>
  );
};

export default Menu;
