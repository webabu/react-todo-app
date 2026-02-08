import React from 'react'
import tick from '../assets/images/tick.png'
import delete_icon from '../assets/images/delete.png'
import ont_tick from '../assets/images/not_tick.png'

const TodoItems = ({title, id, isComplete,  deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={ () => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick :ont_tick } alt="" className='w-7' />
      <p className={`ml-4 text-slate-700 decoration-slate-500 text-[17px] ${isComplete ? "line-through" : ''}`}>{title}</p>
      </div>
      <img onClick={ ()=>{ deleteTodo(id) }} src={delete_icon} alt="" className='cursor-pointer w-3.5 '  />
    </div>
    
  )
}

export default TodoItems