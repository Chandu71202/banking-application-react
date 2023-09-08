import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
  );
}

export default App;
