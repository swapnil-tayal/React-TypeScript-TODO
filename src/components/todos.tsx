import { useTodos } from "../store/todos"
import { useSearchParams } from "react-router-dom"

const Todos = () => {

    const {todos, toogleTodoAsCompleted, handleDeleteTodo} = useTodos();

    const [searchParams] = useSearchParams();
    let todoData = searchParams.get("todos");
    console.log(todoData);

    let filterData = todos

    if(todoData === "active"){
        filterData = filterData.filter((task) => !task.completed)
    }
    if(todoData === "completed"){
        filterData = filterData.filter((task) => task.completed)
    }

  return (
    <ul className="main-task" >
        {
            filterData.map((todo) => {
                return <li key={todo.id} >
                    <input 
                        type="checkbox" 
                        id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toogleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`}> {todo.task} </label>
                    {
                        todo.completed && (
                            <button 
                                type='button'
                                onClick={() => handleDeleteTodo(todo.id)}> Delete </button>
                        )
                    }
                </li> 
            })
        }
    </ul>
  )
}

export default Todos