import Component1 from "./Component1";
import ComponentForProps from "./ComponentForProps";
import Text from "./Text";


function App(props) {

  const number = 2;
  const text = "Some text";
  const obj = {
    name: 'name',
    age: 'age',
    login: 'login',
    password: 'password'
  };
const func = ()=>{console.log(obj);};
  return <div>
  <Component1/> 
  <ComponentForProps 
    number = { number } 
    text = { text }
    obj = { obj }
    func= { func }
    />
    <h1>Hello, {props.name}</h1>
    <h3>Сейчас {new Date().toLocaleTimeString()}.</h3>
    <Text />
  </div>
    ;
    
}

export default App;
