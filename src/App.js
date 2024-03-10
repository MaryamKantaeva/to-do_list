import Form from "./components/form/form";
import Select from "./components/select/select";
import Container from "./components/container/container";
import BoxAdvertising from "./components/boxAdvertising/boxAdvertising";


const App = () => {
  return (
  <div className="todo">
    <Form/>
    <Select/>
    <Container/>
    <BoxAdvertising/>
  </div>
  );
};

export default App;
