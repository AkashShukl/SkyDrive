import {
  faDoorOpen,
  faFile,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Fade } from "react-bootstrap";
import { deleteFile } from "./DeleteFile";
import "./style.css";

export default function File({ file }) {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  //console.log(file);

  const handleDelete = () => {
    deleteFile(file);
  };

  const showInfo = () => {
    setOpenInfo(!openInfo);
  };

  const timestampToDate = (seconds) => {
    let ms = seconds * 1000;
    let d = new Date(ms);
    let todate = d.getDate();
    let tomonth = d.getMonth() + 1;
    let toyear = d.getFullYear();
    let original_date = tomonth + "/" + todate + "/" + toyear;
    return " " + original_date;
  };

  return (
    <>
      <div className={openInfo ? "file-info active" : "file-info"}>
        <FontAwesomeIcon
          id="file-info-close-btn"
          onClick={showInfo}
          size="1x"
          icon={faTimes}
        />
        <div className="file-details">
          <span>
            <label>Name : </label>{" "}
            <label className="truncate">{file.name}</label>
          </span>
          <span>
            <label>Size :</label>{" "}
            <label className="truncate">{file.size} Bytes</label>
          </span>
          <span>
            <label>Type :</label>{" "}
            <label className="truncate">{file.type}</label>
          </span>
          <span>
            <label>Url :</label>{" "}
            <label className="truncate">
              <a href={file.url}>Link</a>
            </label>
          </span>
          <span>
            <label>Created At : </label>{" "}
            <label className="truncate">
              {file.createdAt !== null &&
                timestampToDate(file.createdAt.seconds)}
            </label>
          </span>
        </div>
      </div>
      <Button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        variant="outline-info"
        className=" text-truncate w-100"
        onClick={showInfo}
      >
        <div className="file-icon-name">
          {" "}
          <FontAwesomeIcon size="3x" icon={faFile} />{" "}
          <label className="file-name text-truncate "> {file.name} </label>{" "}
        </div>
      </Button>
      <Fade
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        in={open}
        className="w-100"
      >
        <div id="fade-file-options">
          <a
            href={file.url}
            rel="noopener noreferrer"
            target="_blank"
            className=" btn"
            download
          >
            <FontAwesomeIcon size="1x" icon={faDoorOpen} />
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
