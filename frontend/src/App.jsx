import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import UpdateList from './pages/UpdateList';
import List from './pages/List';
import Contact from './components/Contact';
import Search from './pages/Search';
import AdminProfile from './pages/AdminProfile';
import CreateList from './pages/CreateList';







export default function App() {
  return (
    <div className='bg-yellow-100'>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/update' element={<UpdateList />} />
          <Route path='/list' element={<List />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search />} />
          <Route path='/adprofile' element={<AdminProfile />} />
          <Route path='/createlist' element={<CreateList />} />
  
  
  
  
  
  
  
      </Routes>
      <Footer />
  
      </BrowserRouter> 
    </div>
    
    )
}
