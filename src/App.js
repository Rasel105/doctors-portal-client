import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/appoinment' element={<Appointment />}></Route>
        <Route path='/contact   ' element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
 