import AddToDo from "./components/addtodo"
import { Navbar } from "./components/navbar"
import Todos from "./components/todos"
import "./App.css"

export const App = () => {
  return (
    <main>
      <h1> TODO REACT + TYPESCRIPT </h1>
      <Navbar/>
      <AddToDo/>
      <Todos/> 
    </main>
  )
}
