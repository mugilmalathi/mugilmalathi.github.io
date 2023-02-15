import React, { useState } from "react";
import "./nav.scss";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";

const Navbar = () => {
  const [bgcolor, setBgColor] = useState(0);
  return (
    <div className="navbar">
      <div
        style={{
          background: bgcolor == 0 ? "#fff" : "",
          color: bgcolor == 0 ? "#1c1b20" : "",
        }}
        onClick={() => setBgColor(0)}
      >
        <FaHome />
      </div>
      <div
        style={{
          background: bgcolor == 1 ? "#fff" : "",
          color: bgcolor == 1 ? "#1c1b20" : "",
        }}
        onClick={() => setBgColor(1)}
      >
        <FaUserAlt />
      </div>
      <div
        style={{
          background: bgcolor == 2 ? "#fff" : "",
          color: bgcolor == 2 ? "#1c1b20" : "",
        }}
        onClick={() => setBgColor(2)}
      >
        <FaBook />
      </div>
      <div
        style={{
          background: bgcolor == 3 ? "#fff" : "",
          color: bgcolor == 3 ? "#1c1b20" : "",
        }}
        onClick={() => setBgColor(3)}
      >
        <FaBriefcase />
      </div>
      <div
        style={{
          background: bgcolor == 4 ? "#fff" : "",
          color: bgcolor == 4 ? "#1c1b20" : "",
        }}
        onClick={() => setBgColor(4)}
      >
        <FaLaptop />
      </div>
      <div
        style={{
          background: bgcolor == 5 ? "#fff" : "",
          color: bgcolor == 5 ? "#1c1b20" : "",
        }}
        onClick={() => setBgColor(5)}
      >
        <FaAddressBook />
      </div>
      <div
        style={{
          background: bgcolor == 6 ? "#fff" : "",
          color: bgcolor == 6 ? "#1c1b20" : "",
        }}
        onClick={() => setBgColor(6)}
      >
        <FaRegWindowRestore />
      </div>
      .
    </div>
  );
};

export default Navbar;
