import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Men from "./pages/Men";
import Menoffer from './pages/Menoffer';
import Women from './pages/Women';
import WishlistPage from './pages/WishlistPage';
import WishList from './context/WishList'; 

function App() {
  return (
    <div className="App">
      <Router>
        <WishList>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/menoffers" element={<Menoffer />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </WishList>
      </Router>
    </div>
  );
}

export default App;
