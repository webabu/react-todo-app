import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/images/todo_icon.png';
import TodoItems from './TodoItems';
const Todo = () => {
  const inputRef = useRef();
  const [toDoList, setToDoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === '') {
      return null;
    }
    const newToDo = {
      id: Date.now(),
      title: inputText,
      isComplete: false,
    };
    setToDoList((prev) => [...prev, newToDo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) =>{
    setToDoList((prev) => {
       return prev.filter( (todo) => todo.id !== id)
    })
  }
  const toggle = (id) =>{
    setToDoList( (prev) => {
      return prev.map( (todo) => {
            if(todo.id === id){
              return { ...todo, isComplete: !todo.isComplete}
            }
            return todo;
      })
    })
  }
  useEffect( () =>{
    localStorage.setItem('todos', JSON.stringify(toDoList) )
  }, [toDoList])

  return (
    <div className="bg-white place-self-center w-11/12 p-7 max-w-md flex flex-col min-h-140 rounded-xl">
      <div className="flex items-center  mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do-List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full ">
        <input
          ref={inputRef}
          className="flex-1 bg-transparent border-0 outline-0 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task..."
        />
        <button
          onClick={add}
          className="bg-orange-600 border-none rounded-full  w-32 h-14 text-white cursor-pointer text-xl font-medium hover:bg-orange-700 transition-transform"
        >
          ADD +
        </button>
      </div>

      {toDoList.map((item, index) => (
        <TodoItems title={item.title} key={index} id={item.id} isComplete={item.isComplete} deleteTodo= {deleteTodo} toggle={toggle}/>
      ))}
    </div>
  );
};

export default Todo;
