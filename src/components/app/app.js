import React from "react";
import Search from "../search/search";
import Filter from "../filter/filter";
import TodoList from "../todo-list/todo-list";

const App = () => {
    const todos = [
        {id:1, label:'Working as donkey', important:true, done:true},
        {id:2, label: 'Living at working place', important: true, done: false},
        {id:3, label: 'Always wonna sleep', important: false, done: true},
        {id:4, label: 'Doing homework also there', important: false, done: false}
    ]
        return (
        <div>
            <h1>Угадайте у кого недосып???((((</h1>
            <Search />
            <Filter />
            <TodoList todosList={todos} />
        </div>
    )
}
export default App
