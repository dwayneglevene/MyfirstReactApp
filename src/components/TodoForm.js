import React, {useState} from "react";
import uuid from "uuid";


function TodoForm({addTodo}){
    const [todo,setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
//  ONLY GETS CALLED IF TO DO TASK IS NOT EMPPY REMOVES WHITE SPACE FROM STRING
        if(todo.task.trim()){
            addTodo({...todo, id: uuid.v4()});
            //reset task input
            setTodo({...todo,task: ""});

        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value={todo.task}  onchange={handleTaskInputChange}/>
            <buttom />
        </form>

    );
}





export default TodoForm;