import { faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Fade } from "react-bootstrap";
import React, { useState } from "react";
import { database, storage } from "../../firebase";

export default function File({ file }) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    console.log("deleting initiated ...");
    console.log(file);
    var fileRef = storage.refFromURL(file.url);
    fileRef
      .delete()
      .then(function () {
        // File deleted successfully
        console.log("File Deleted");
      })
      .catch(function (error) {
        console.log("Error occurd while deleteing", error);
      });
    database.files
      .where("url", "==", file.url)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref
            .delete()
            .then(() => {
              console.log("ref gone from db and file deleted from storage");
            })
            .catch((error) => {
              console.log("ErrorOccured", error);
            });
        });
      }).catch((error)=>{console.log("unable to get db ref")});
  };
  return (
    <>
      <Button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        variant="outline-info"
        className=" text-truncate w-100"
      >
        <FontAwesomeIcon icon={faFile} /> {file.name}
      </Button>
      <Fade
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        in={open}
        className="w-100"
      >
        <div id="example-fade-text">
          <a
            href={file.url}
            rel="noopener noreferrer"
            target="_blank"
            className=" btn"
            download
          >
            Open
          </a>
          <label
            className=" btn"
            onClick={handleDelete}
            style={{ padding: "2px" }}
          >
            {" "}
            <FontAwesomeIcon icon={faTrash} />
          </label>
        </div>
      </Fade>
    </>
  );
}

// <div className=" btn btn-outline-dark">
// <a
//   href={file.url}
//   rel="noreferrer"
//   target="_blank"
//   className="btn btn-outline-dark text-truncate w-100"
// >
//   <FontAwesomeIcon icon={faFile} />
//   {file.name}

// </a>
//       <FontAwesomeIcon icon={faTrash} />
//     </div>
