import Task from "../task/task"

const Container = ({tasks, setTasks}) => {
    return (
        <ul className="todo__items">
            {tasks.map(({task, isCompleted, date}) => 
                (<Task task={task} date={date} isCompleted={isCompleted} setTasks={setTasks} tasks={tasks} key={task}/>)
            )}
        </ul>
    )
}
export default Container