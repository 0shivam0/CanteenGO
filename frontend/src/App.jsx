import React from 'react'
import Navbar from './components/Navbar/Navbar'
import{Routes, Route} from 'react-router-dom';
import Menu from './pages/menu';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
