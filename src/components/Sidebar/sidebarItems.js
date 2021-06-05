import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useFolder } from "../hooks/useFolder";

export  const sidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
    cName: "sidenav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
    cName: "sidenav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
    cName: "sidenav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
    cName: "sidenav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
    cName: "sidenav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
    cName: "sidenav-text",
  },
];
