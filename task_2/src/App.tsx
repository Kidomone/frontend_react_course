import { useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TaskList, { type Task } from "./components/TaskList";





export default function App() {
  const [theme, setTheme] = useState("light")

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const defaultTasks: Task[] = [
    { id: '1', title: 'Title 1', done: true },
    { id: '2', title: 'Title 2', done: false },
    { id: '3', title: 'Title 3', done: true },
  ]

  const [tasks, setTasks] = useState(defaultTasks)

  const addNewTask = (title: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      done: false,
    }
    setTasks([...tasks, newTask])
  }

  const handleRemoveTask = (id: string) => {
    const filtered = tasks.filter((task) => task.id !== id)
    setTasks(filtered)
  }

  const handleUpdateTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="main">
      <Header handleToggleTheme={handleToggleTheme} theme={theme} />
      <AddForm addNewTask={addNewTask} theme={theme} />
      <TaskList handleUpdateTask={handleUpdateTask} handleRemoveTask={handleRemoveTask} tasks={tasks} theme={theme} />
    </div>
  )
}