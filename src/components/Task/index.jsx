import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./task.css";

export default function Task(props) {
  const [enableTitleEdit, setEnableTitleEdit] = useState(false);
  const [enableDescriptionEdit, setEnableDescriptionEdit] = useState(false);

  function setTaskEdit(enable) {
    setEnableTitleEdit(enable);
    setEnableDescriptionEdit(enable);
  }

  return (
    <article style={{ borderTop: `4px solid ${props.taskColor}` }}>
      <span
        contentEditable={enableTitleEdit}
        onClick={() => setEnableTitleEdit(true)}
        className={`title ${!enableTitleEdit ? "cursor-pointer" : ""}`}
        style={{ backgroundColor: props.titleColor }}
      >
        {props.title}
      </span>
      <p
        contentEditable={enableDescriptionEdit}
        onClick={() => setEnableDescriptionEdit(true)}
        className={`description ${
          !enableDescriptionEdit ? "cursor-pointer" : ""
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi
      </p>
      <footer className="icons" style={{ color: props.taskColor }}>
        <span
          onClick={() => setTaskEdit(true)}
        >
          <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
        </span>
        <FontAwesomeIcon icon={faTrashCan} className="trashIcon" />
      </footer>
    </article>
  );
}