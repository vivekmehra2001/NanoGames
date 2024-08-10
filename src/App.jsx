import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import NGhouse from './pages/games/NGhouse';
import Original from './pages/games/Original';
import Footer from './component/Footer';
import Auth from './component/authentication/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter >
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Auth />} />

        {/* <Route path="/ng-house" element={<NGhouse />} /> */}
        {/* <Route path="/original" element={<Original />} /> */}
      </Routes>
      <Footer/>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
