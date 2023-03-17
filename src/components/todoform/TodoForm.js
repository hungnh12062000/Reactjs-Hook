import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './tofoform.scss';

const TodoForm = ({ addTodo }) => {

     const [title, setTitle] = useState('');

     const onTitleChange = event => {
          setTitle(event.target.value);
     }

     const handleSubmit = event => {
          event.preventDefault();
          addTodo({
               id: uuidv4(),
               title
          })
          setTitle('')
     }

     return (
          <form action="" onSubmit={handleSubmit}>
               <div className="text-field">
                    <label htmlFor="username1">Username</label>
                    <input type="text" name='title' placeholder="Enter your username" onChange={onTitleChange} value={title} required />
               </div>
               <div className="text-field">
                    <input className='button' type="submit" name="submit" value="Add" placeholder='Enter a new todo ...' />
               </div>
          </form>
     )
}

export default TodoForm