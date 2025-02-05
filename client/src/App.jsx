import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import Merch from "./pages/Merch.jsx";
import Contact from "./pages/Contact.jsx";

import { Navbar } from "./components/Navbar.jsx";


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
