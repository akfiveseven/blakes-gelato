import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import { Footer } from "./components/Footer.jsx";

import { Navbar } from "./components/Navbar.jsx";


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
