
type AddFormProps = {
  addNewTask: (title: string) => void,
  theme: string
}
export default function AddForm({addNewTask, theme}: AddFormProps){
const handleAddTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter" && event.currentTarget.value !== ""){
    addNewTask(event.currentTarget.value)
    event.currentTarget.value = ''
  }
}

  return(
    <div className={`add-form add-form-${theme}`}>
      <input onKeyDown={handleAddTask}/>
    </div>

  )
}