import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from "../todo-add";

import './app.css';


class App extends React.Component {
  state = {
    todoData: [
      {id:1, label:'Working as donkey', important:true, done:true},
      {id:2, label: 'Living at working place', important: true, done: false},
      {id:3, label: 'Always wonna sleep', important: false, done: true},
      {id:4, label: 'Doing homework also there', important: false, done: false}
    ],
    status: 'all',
    search: ''
  }

  onDelete = (id) => {
    this.setState((oldState) => {
      const elementIndex = oldState.todoData.findIndex((item) => item.id === id);

      const prev = oldState.todoData.slice(0, elementIndex)
      const next = oldState.todoData.slice(elementIndex + 1)

      const newTodoData = [...prev, ...next]

      return {todoData: newTodoData}
    })
  }

   onImportant = (id) => {
    this.setState((oldState) => {
      const elementIndex = oldState.todoData.findIndex((item) => item.id === id);
      const oldElement = oldState.todoData[elementIndex]

      const prev = oldState.todoData.slice(0, elementIndex)
      const newElement = {...oldElement, important: !oldElement.important}
      const next = oldState.todoData.slice(elementIndex + 1)

      const newTodoData = [...prev, newElement, ...next]

      return {todoData: newTodoData}
    })
  }

  onDone = (id) => {
    this.setState((oldState) => {
      const elementIndex = oldState.todoData.findIndex((item) => item.id === id);
      const oldElement = oldState.todoData[elementIndex]

      const prev = oldState.todoData.slice(0, elementIndex)
      const newElement = {...oldElement, done: !oldElement.done}
      const next = oldState.todoData.slice(elementIndex + 1)

      const newTodoData = [...prev, newElement, ...next]

      return {todoData: newTodoData}
    })
  }

  onStatusFilter = (todos, filter) => {
    let data = todos;

    if (filter === 'done') {
      data = todos.filter((item) => {
        if (item.done === true) {
          return item
        }
      })
    } else if (filter === 'active'){
      data = todos.filter((item) => {
        if (item.done === false){
          return item
        }
      })
    }

    return data;
  }

  onChangeStatus = (status) => {
    this.setState({
      status: status
    })
  }

  onAdd = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() *55),
      label: text,
      important: false,
      done: false
    }

    this.setState((oldState) => {
      return(
          {
            todoData: [...oldState.todoData, newTodo]
          }
      )
    })
  }

  onSearchFilter = (todos, searchFilter) => {
    return todos.filter((item) => {
      if (item.label.toLowerCase().includes(searchFilter.toLowerCase())) {
        return item;
      }
    })
  }

  onSearch = (searchString) => {
    this.setState({
      search: searchString
    })
  }
  onAppHeader = (id) =>{
    this.setState(({todoData}) =>{
      return{
        todoData: this.props(todoData, id, 'done')
      };


    });
  };
  todoData;
  render() {
    const filterdTodos = this.state.todoData.filter((item)=>{
      return item.done===true
    })
    const todosDone = filterdTodos.length
    const haveToDo = this.state.todoData.filter((item) => {
      return item.done === false
    })
    const toDo = haveToDo.length
    console.log(this.state)
    const filtred = this.onStatusFilter(this.state.todoData, this.state.status);
    const searchFiltred = this.onSearchFilter(filtred, this.state.search);
    // const haveToDo = this.todoData.filter(el => el.done).length;
    // const isDone = this.todoData.length - haveToDo;
    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={todosDone} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter onChangeStatus={this.onChangeStatus} />
        </div>
        <TodoAdd onAdd={this.onAdd}/>

        <TodoList
          todos={searchFiltred}
          onDelete={this.onDelete}
          onImportant={this.onImportant}
          onDone={this.onDone}
        />
        <h1>Угадайте у кого недосып???((((</h1>
      </div>
    );
  }
}

export default App;
