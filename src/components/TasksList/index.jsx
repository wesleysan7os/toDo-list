import "./tasksList.css";
import Task from "../Task";

export default function TasksList() {
  return (
    <main>
      <h2>All Tasks</h2>
      <div className="all-tasks">
        <Task title="React" taskColor="blueviolet" titleColor="lightskyblue" />
        <Task title="React Native" taskColor="darkgray" titleColor="lightgray" />
        <Task title="Flutter" taskColor="hotpink" titleColor="lightpink" />
        <Task title="Angular" taskColor="darkorange" titleColor="lightsalmon" />
        <Task title="Ionic" taskColor="darksalmon" titleColor="lightsalmon" />
        <Task title="Typescript" taskColor="darkcyan" titleColor="cyan" />
        <Task title="Node" taskColor="darkkhaki" titleColor="khaki" />
        <Task title="Jest" taskColor="darkturquoise" titleColor="lightblue" />
        <Task title="Jest" taskColor="darkturquoise" titleColor="lightblue" />
      </div>
    </main>
  );
}