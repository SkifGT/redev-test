import Component1 from "./Component1";
import Text from "./Text";

function App(props) {
  return <div>
  <Component1/>
    <h1>Hello, {props.name}</h1>
    <h3>Сейчас {new Date().toLocaleTimeString()}.</h3>
    <Text />
  </div>
    ;
}

export default App;
