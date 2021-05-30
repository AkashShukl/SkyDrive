import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { Link } from "react-router-dom";

export default function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];

  return (
    <Breadcrumb className="flex-grow-1 n-0">
      {[...path].map((folder, index) => (
        <Breadcrumb.Item
          style={{ maxWidth: "150px" }}
          className="text-truncate d-inline-block"
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
              pathname: folder.id ? `/folder/${folder.id}` : "/",
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
          }}
        >
          {folder.name}
        </Breadcrumb.Item>
      ))}
      {currentFolder !== null && (
        <Breadcrumb.Item
          style={{ maxWidth: "200px" }}
          className="text-truncate d-inline-block"
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
