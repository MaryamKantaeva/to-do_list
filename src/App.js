import Form from "./components/form/form";
import Select from "./components/select/select";
import Container from "./components/container/container";

const App = () => {
  return (
  <div className="todo">
    <Form/>
    <Select/>
    <Container/>
  </div>
  );
};

export default App;