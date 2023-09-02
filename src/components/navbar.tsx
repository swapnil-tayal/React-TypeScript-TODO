import { Link, useSearchParams } from 'react-router-dom'

export const Navbar = () => {
    const [searchParams] = useSearchParams();
    let todoData = searchParams.get("todos");
  return (
    <nav>
        <Link to="/" className={todoData === null ? "active" : ""}> All </Link>
        <Link 
            to="/?todos=active" 
            className={todoData === "active" ? "active" : ""}> Active </Link>
        <Link 
            to="/?todos=completed" 
            className={todoData === "completed" ? "active" : ""}> Completed </Link>
    </nav>
  )
}
