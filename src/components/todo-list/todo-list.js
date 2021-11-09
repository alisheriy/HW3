import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({todosList}) => {
    const content = todosList.map((item) =>{
        return <li key={item.id}><TodoListItem label={item.label} /></li>

    })
    return(
        <div>
            <ul>
                {content}
            </ul>
        </div>
    )
}
export default TodoList
