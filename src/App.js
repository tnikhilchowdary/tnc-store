import logo from './logo.svg';
import './App.css';
import Navbar from './componnets/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Men from "./pages/Men";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
