import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/About us/AboutUs';
import OurCourses from './pages/OurCourses/OurCourses';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/ourcourses" element={<OurCourses/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
