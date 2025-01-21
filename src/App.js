import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';



function App() {
  return (
    <div className="hideenscrollmain overflow-auto h-[100vh]">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus/" element={<Aboutus />} />
        <Route path="contactus/" element={<Contactus />} />
        

      </Routes>
    </BrowserRouter>
  </div>
    
  );
}

export default App;
