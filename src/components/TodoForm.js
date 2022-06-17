import React,{useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input,setInput] =useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() =>{
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('')

  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input 
            type="text" 
            placeholder="Digite a atualização" 
            value={input}
            className='todo-input edit'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='todo-button edit'>Atualizar Tarefa</button>
        </>
      ): (
        <>
          <input 
          type="text" 
          placeholder="Escreva aqui a tarefa" 
          value={input}
          className='todo-input'
          onChange={handleChange}
          ref={inputRef}
        />
        <button className='todo-button'>Adicionar Tarefa</button>
        </>
      )}

    </form>
  )
}


export default TodoForm
