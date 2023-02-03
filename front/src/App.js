// import characters, { Rick } from './data.js'

import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'
import Favourites from './components/Favourites/Favourite';
import './App.css';
const App = () => {

  const [bgImg, setBgImg] = useState('')
    useEffect(() => {
      fetch("https://api.unsplash.com/photos/random/?topic=textures-patterns&client_id=1eXsHaR8jPSWv-89XXEeHJ9Z6oEihkGef6tM5Iu2Ca4")
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
      <Route path='/favoritos' element={<Favourites />} />
    </Routes>
    </div>

  )
}

export default App;
