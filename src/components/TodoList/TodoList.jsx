import "./TodoList.css";
import Todo from "../Todo/Todo";

export default function TodoList() {
  return (
    <main>
      <h2>All Tasks</h2>
      <div className="all-tasks">
        <Todo title="React" taskColor="blueviolet" titleColor="lightskyblue" />
        <Todo title="React Native" taskColor="darkgray" titleColor="lightgray" />
        <Todo title="Flutter" taskColor="hotpink" titleColor="lightpink" />
        <Todo title="Angular" taskColor="darkorange" titleColor="lightsalmon" />
        <Todo title="Ionic" taskColor="darksalmon" titleColor="lightsalmon" />
        <Todo title="Typescript" taskColor="darkcyan" titleColor="cyan" />
        <Todo title="Node" taskColor="darkkhaki" titleColor="khaki" />
        <Todo title="Jest" taskColor="darkturquoise" titleColor="lightblue" />
        <Todo title="Jest" taskColor="darkturquoise" titleColor="lightblue" />
      </div>
    </main>
  );
}