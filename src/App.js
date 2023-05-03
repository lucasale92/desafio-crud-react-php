import './App.css';

import List from "./components/list";
import Create from './components/create';
import Edit from './components/edit';
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"
function App() {
  return (
    <Router>
      
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to={"/crear"}>Crear empleado</Link>
              <Link className="nav-item nav-link" to={"/editar"}>Editar empleado</Link>
          </div>
      </nav>
      <div className='container'>
        <br></br>
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route path="/crear" element={<Create />} />
        <Route path="/editar" element={<Edit />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;



