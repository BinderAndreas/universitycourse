import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/About us/AboutUs';
import OurCourses from './pages/OurCourses/OurCourses';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/ourcourses" element={<OurCourses/>}/>
        <Route path='/login' element={<Auth/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
