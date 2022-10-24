import "./App.css";
import Home from "./Home";
import Header from "./Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"




function App() {
  return (
    <div className="App">
     <Header />
     <Home/>
    </div>
  );
}

export default App;
