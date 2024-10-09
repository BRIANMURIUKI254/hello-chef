import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './Hero';
import './Styles/Hero.css';
import SignIn from './pages/SignIn'; // Import the SignIn component
import Admin from './Admin/Admin'; // Import the Admin component
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import necessary components

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
