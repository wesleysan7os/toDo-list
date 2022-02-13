import "./task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Task(props) {
  return (
    <article style={{ borderTop: `4px solid ${props.taskColor}` }}>
      <span className="title" style={{ backgroundColor: props.titleColor }}>
        {props.title}
      </span>
      <p className="task-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi
      </p>
      <footer className="icons" style={{ color: props.taskColor }}>
        <FontAwesomeIcon icon={faPenToSquare} className="editIcon" />
        <FontAwesomeIcon icon={faTrashCan} className="trashIcon" />
      </footer>
    </article>
  );
}
