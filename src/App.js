import './App.css';
import CreateEmployee from './Components/CreateEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import NavBar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import "bootstrap/dist/css/bootstrap.css";

//Router, Routes, Route
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='MainComponent'>
          <Routes>
            <Route exact path="/"  element={<EmployeeList />}/>
            <Route path="/employees/create" element={<CreateEmployee />} />
            <Route path="/employees/:id/update" element={<UpdateEmployee/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
