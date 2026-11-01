
type TaskItemProps = {
  id: string,
  title: string,
  done: boolean,
  handleRemoveTask: (id: string) => void,
  handleUpdateTask: (id: string) => void,
  theme: string
}
export default function TaskItem({id, title, done, handleRemoveTask, handleUpdateTask, theme}: TaskItemProps){

  const handleRemove = () => {
    handleRemoveTask(id)
  }

  const handleUpdate = () => {
    handleUpdateTask(id)
  }

  return(
    <div className={`task-item task-item-${theme}`} style={{backgroundColor: (done) ? "green" : "red"}}>
      <h2>{title}</h2>
      <div className="task-buttons">
        <button onClick={handleUpdate}>✓</button>
        <button onClick={handleRemove}>✗</button>
      </div>
    </div>

  )
}