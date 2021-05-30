import React from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import AddFolderBtn from "./AddFolderBtn";
import Navbar from "./Navbar";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";

export default function Dashboard() {
  // const { folderId } = useParams();
  //const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder();
  console.log(childFolders);
  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderBtn currentFolder={folder} />
        {childFolders && childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
