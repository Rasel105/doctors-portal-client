import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp'
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';
import Myhistory from './Pages/Dashboard/Myhistory';
import ForgetPassword from './Pages/Login/ForgetPassword'
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor'
function App() {
  return (
    <div className='max-w-7xl	mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/review' element={<Reviews />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppoinment />}></Route>
          <Route path='myreview' element={<MyReview />}></Route>
          <Route path='myhistory' element={<Myhistory />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
        </Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgetpass' element={<ForgetPassword />}></Route >
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
