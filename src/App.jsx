import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import NewRoom from './components/NewRoom/NewRoom';
import ChatRooms from './components/ChatRooms/ChatRooms';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' replace  element={<Home />} />
        <Route path="/about-us"  index element={<AboutUs />} />
        {/* <Route path='/blogs/:id' element={<Blog />} /> */}
        {/* <Route path='/about' element={<AboutUs />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/chat-rooms' element={<ChatRooms />} />
        <Route path='/create-new' element={<NewRoom />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
