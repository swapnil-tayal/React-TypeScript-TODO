import { useState } from "react"
import { useTodos } from "../store/todos";

const AddToDo = () => {

    const[todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos();

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("");
    }

  return (
    <form onSubmit={handleSumbit}>
        <input 
            type="text" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)}
            />
        <button type="submit"> Add </button>
    </form>
  )
}


export default AddToDo