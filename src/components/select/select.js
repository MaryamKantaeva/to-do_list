import { useEffect, useState } from "react"

const Select = ({tasks, setTasks}) => {
    const [value, setValue] = useState('all')
    const active = tasks.filter((item) => !item.isCompleted)
    const completed = tasks.filter((item) => item.isCompleted)
    useEffect(() => {
        if(value === 'all'){
            setTasks(tasks)
        }else if(value === 'active'){
            setTasks(active)
        }else if(value === 'completed'){
            setTasks(completed)
        }
    }, [value])

    return (
        <select className="todo__options" value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="all">все</option>
            <option value="active">активные</option>
            <option value="completed">завершённые</option>
        </select>
    )
}

export default Select
