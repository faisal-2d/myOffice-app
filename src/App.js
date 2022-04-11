import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import ClassRoutine from './Components/ClassRoutine/ClassRoutine';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Prizes from './Components/Prizes/Prizes';
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/courses' element={<Courses></Courses>}></Route>
        <Route path='/class-routine' element={<ClassRoutine></ClassRoutine>}></Route>
        <Route path='prizes' element={<Prizes></Prizes>}></Route>
        <Route path='about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='registration' element={<Registration></Registration>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
