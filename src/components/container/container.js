import Task from "../task/task"

const Container = () => {
    return (
        <ul className="todo__items">
            <Task value ='Встать в 6' date='10.03.2024'/>
            <Task value ='Купить корм Барсику' date='10.03.2024'/>
        </ul>
    )
}
export default Container