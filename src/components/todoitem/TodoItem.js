import React from 'react'

const TodoItem = ({ todo, deleteTodoItem }) => {


     const style = {
          background: 'rgb(240, 240, 240)',
          color: 'black',
     }

     return (
          <>
               <li onClick={() => { deleteTodoItem(todo.id) }} style={style}>{todo.title}</li>
          </>
     )
}

export default TodoItem