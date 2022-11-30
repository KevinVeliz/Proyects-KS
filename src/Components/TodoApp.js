import '../Styles/TodoApp.css'
import { useState } from "react";
import Todo from "./todo";

const TodoApp = () => {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);


    function handleInput(e) {
        const value = e.target.value
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if(title === ""){
            alert("Please enter a title")
        }
        else {
            e.preventDefault();
            const newTodo = {
                id: crypto.randomUUID(),
                title: title,
                completed: false
            }
    
            let todosMap = todos.map((todos) =>(todos.title))
            let todosInclude = todosMap.includes(title)

            if(todosInclude !== true){
                const temp = [...todos]
                temp.unshift(newTodo);
                setTodos(temp);
                setTitle('')
            } else {
                alert('The title already exists')
                setTitle('')
            }
        }
        
    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find((item) => item.id === id)
        item.title = value;
        setTodos(temp)
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id != id);
        setTodos(temp) 
    }

    return (
        <div className="todoContainer">
            <h1 className='text-todo'>Todo App</h1>
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input className="todoInput" value={title} onChange={handleInput} />
                <input type="submit" value="Create todo" className="buttonCreate" onClick={handleSubmit} />
            </form>
            <div className="todosContainer">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </div>
        </div>
    );
}
 
export default TodoApp;