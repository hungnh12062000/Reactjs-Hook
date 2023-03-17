import React from 'react';
import { useState } from 'react';
import TodoForm from '../todoform/TodoForm';
import TodoItem from '../todoitem/TodoItem';
import './todo.scss'

const Todos = () => {

     const [todos, setTodos] = useState([
          {
               id: 1,
               title: 'HTML'
          },
          {
               id: 2,
               title: 'HTM5'
          },
          {
               id: 3,
               title: 'PUG'
          },
     ]);

     const addTodoItem = todo => {
          setTodos([...todos, todo])
     }
     const deleteTodoItem = id => {
          setTodos(todos.filter(todo => todo.id !== id))
     }


     return (
          <>
               <div className="todo-list">
                    <TodoForm addTodo={addTodoItem} />
                    <ul>
                         {
                              todos.map(todo => (
                                   <TodoItem todo={todo} key={todo.id} deleteTodoItem={deleteTodoItem} />
                              ))
                         }
                    </ul>
               </div>
          </>
     )
}

export default Todos