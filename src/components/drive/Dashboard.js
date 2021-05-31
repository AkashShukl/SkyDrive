import React from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import AddFolderBtn from "./AddFolderBtn";
import AddFileBtn from "./AddFileBtn";
import Navbar from "./Navbar";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import File from './File'
export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileBtn currentFolder={folder} />
          <AddFolderBtn currentFolder={folder} />
        </div>

        {childFolders && childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders && childFiles && <hr/> } 
        {childFiles && childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
