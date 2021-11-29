// import logo from "./logo.svg";
import "./App.css";
import { ParentPropsClass } from "./Components/Function/ParentPropsClass";
import { ParentProps } from "./Components/Propss/ParentProps.jsx";

const App = () => {
  return (
    <div className="App">
      {/* <ParentProps /> */}
      {/* {<ParentPropsClass />} */}
      <ParentPropsClass />
    </div>
  );
};

export default App;
