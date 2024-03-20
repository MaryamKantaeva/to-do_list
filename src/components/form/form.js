import Input from "../input/input";

const Form = ({tasks, setTasks}) => {
    return (
        <form>
            <Input tasks={tasks} setTasks={setTasks}/>
        </form>
    )
}

export default Form;