import './App.css';
import Navbar from './component/navbar/Index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./pages/index";
import  Proyectos  from "./pages/Proyectos";
import  Equipos  from "./pages/Equipos";
import  Tecnologias  from "./pages/Tecnologias";





function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/portafolio" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/proyectos"  component={Proyectos} />
        <Route path="/equipos"  component={Equipos} />
        <Route path="/tecnologias"  component={Tecnologias} />
      </Switch>
    </Router>
  );
}

export default App;
