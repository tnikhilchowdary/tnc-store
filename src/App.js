import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Men from "./pages/Men";
import Menoffer from './pages/Menoffer';
import Women from './pages/Women';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path='/women' element={<Women/>} />
          <Route path="/menoffers" element={<Menoffer />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
