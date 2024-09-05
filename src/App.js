import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Setting from './pages/Setting';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <SideNav></SideNav>
      <Routes>
        <Route path='/' exact element={<Home/>} ></Route>
        <Route path='/about' exact element={<About/>}></Route>
        <Route path='/setting' exact element={<Setting/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
