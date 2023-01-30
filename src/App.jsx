import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Room from './components/NewRoom/NewRoom';
import ChatRooms from './components/ChatRooms/ChatRooms';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />


        <Route path="/home/about-us"  index element={<AboutUs />} />
        {/* <Route path='/blogs/:id' element={<Blog />} /> */}
        {/* <Route path='/about' element={<AboutUs />} /> */}
        <Route path='/home/contact' element={<Contact />} />
        <Route path='/home/chat-rooms' element={<ChatRooms />} />
        <Route path='/home/room/:id' element={<Room />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




