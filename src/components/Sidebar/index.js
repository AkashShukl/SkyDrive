import React, { useState } from "react";
import { faBars, faJedi, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { sidebarItems } from "./sidebarItems";

import "./style.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const showSidebar = () => setOpen(!open);

  return (
    <>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
        </Link>
        <Link to="#" className="sidebar-text">
          <FontAwesomeIcon icon={faJedi}/>{" "}SkyDrive
        </Link>
      </div>

      <nav className={open ? "sidenav-menu active" : "sidenav-menu"}>
        <ul className="sidenav-menu-items">
          <li className="sidenavbar-toggle">
            <Link to="#" className="menu-bars">
              <FontAwesomeIcon icon={faTimes} onClick={showSidebar} />
            </Link>
          </li>
          {sidebarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="icon-text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
