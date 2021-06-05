import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faFolderPlus, faInfoCircle, faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";


export  const sidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faDatabase} />,
    cName: "sidenav-text",
  },
  {
    title: "Info",
    path: "/team",
    icon: <FontAwesomeIcon icon={faInfoCircle} />,
    cName: "sidenav-text",
  },
  {
    title: "Profile",
    path: "/messages",
    icon: <FontAwesomeIcon icon={faUserCircle} />,
    cName: "sidenav-text",
  },
  {
    title: "Logout",
    path: "/support",
    icon: <FontAwesomeIcon icon={faSignOutAlt} />,
    cName: "sidenav-text",
  },
];
