// import characters, { Rick } from './data.js'

import Home from './components/Home';
import Nav from './components/Nav'
import {Route, Routes} from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react';
const App = () => {
  const [bgImg, setBgImg] = useState('')
    useEffect(() => {
      fetch("https://api.unsplash.com/photos/random/?query=los+simpson&client_id=1eXsHaR8jPSWv-89XXEeHJ9Z6oEihkGef6tM5Iu2Ca4")
      .then(res => res.json())
      .then(data => setBgImg(data.urls.regular))
    }, [])
  return (
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>

  )
}

export default App;
