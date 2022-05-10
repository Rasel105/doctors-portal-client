import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className='max-w-7xl	mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
 