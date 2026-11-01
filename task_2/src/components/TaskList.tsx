import TaskItem from "./TaskItem"

export type Task = {
  id: string,
  title: string,
  done: boolean
}
type TaskListProps = {
  tasks: Task[]
  handleRemoveTask: (id: string) => void,
  handleUpdateTask: (id: string) => void,
  theme: string
}


export default function Task({ tasks, handleRemoveTask, handleUpdateTask, theme }: TaskListProps) {
  return (
    <div className={`task-list add-form-${theme}`}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          handleRemoveTask={handleRemoveTask}
          handleUpdateTask={handleUpdateTask}
          theme={theme}
        />
      ))}
    </div>
  )
}
