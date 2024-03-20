const Task = ({task, date, isCompleted, setTasks, tasks}) => {
    const deleteTask = () => {
        setTasks(tasks.filter((item) => item.task !== task))
    }
    const completeTask = () => {
        setTasks(tasks.map((item) => item.task === task ? {...item, isCompleted: !item.isCompleted} : item))
    }
    return (
        <li className={"todo__item " + (isCompleted ? 'completed' : '')}>
            <span className="todo__task">
                {task}
                <div className="todo__date">{date}</div>
            </span>
            <span className="todo__action todo__action_complete" onClick={completeTask}></span>
            <span className="todo__action todo__action_delete" onClick={deleteTask}></span>
        </li>
    )
}
export default Task