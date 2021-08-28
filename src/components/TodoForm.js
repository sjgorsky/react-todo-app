import React, {useState} from 'react'

function TodoForm() {
    const [input, setInputs] = useState('')
    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000)
            
        })
    }

    return (
        <div>
           <form className="todo-form" onSubmit={handleSubmit}>
               <input 
                type="text" 
                placeholder="Add a Todo" 
                value={input} 
                name="text" 
                className="todo-input">
                   </input>
                <button className="todo-button">Add Todo</button>
                   </form> 
        </div>
    )
}

export default TodoForm
