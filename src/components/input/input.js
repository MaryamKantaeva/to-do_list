import { useState } from "react"

const Input = ({tasks, setTasks}) => {
    const [value, setValue] = useState('')

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    const getValue = (e) => {
        e.preventDefault()
        if(value.trim() !== '' && tasks.every((item) => item.task !== value)){
            setTasks([...tasks, {task: value, isCompleted: false, date: new Date().toLocaleString()}])
        }  
        setValue('')    
    } 

    return (
        <div className="todo__input">
            <input className="todo__text" type="text" value={value} onChange={changeValue} />
            <button className="todo__add" onClick={getValue}></button>
        </div>
    )
}

export default Input