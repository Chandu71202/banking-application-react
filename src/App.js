import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
