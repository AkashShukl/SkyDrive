import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { sidebarItems } from "./sidebarItems";
import { Navbar } from "react-bootstrap";
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
          SkyDrive
        </Link>
      </div>

      <nav className={open ? "sidenav-menu active" : "sidenav-menu"}>
        <ul className="sidenav-menu-items">
          <li className="sidenavbar-toggle">
            <Link to="#" className="menu-bars">
              <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
            </Link>
          </li>
          {sidebarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
