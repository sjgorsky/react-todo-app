import React, {useState} from 'react'

function TodoForm() {
    const [input, setInputs] = useState('')
    return (
        <div>
           <form className="todo-form">
               <input 
                type="text" 
                placeholder="Add a Todo" 
                value={input} 
                name="text" 
                className="todo-input">
                   </input></form> 
        </div>
    )
}

export default TodoForm
