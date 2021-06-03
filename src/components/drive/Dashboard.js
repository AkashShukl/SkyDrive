import React, { useState } from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import AddFolderBtn from "./AddFolderBtn";
import AddFileBtn from "./AddFileBtn";
import Navbar from "./Navbar";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import File from "./File";
import "../../style.css";

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
        <Row>
          <Col sm={2} className="sidebar">
            <Nav className="flex-column align-items-left">
              <Nav>
                <AddFolderBtn currentFolder={folder} />
              </Nav>
              <Nav>
                <AddFileBtn currentFolder={folder} />
              </Nav>
            </Nav>
          </Col>
          <Col>
            <div className="d-flex align-items-center ">
              <FolderBreadcrumbs  currentFolder={folder} />
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
            {childFolders && childFiles && <hr />}
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
