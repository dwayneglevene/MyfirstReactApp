import React from "react";
import Todo from "./Todo"

function TodoList(){
    return(
        <ul>
            {TodoList.map(todo =>(
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    )

}


export default TodoList;