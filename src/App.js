// import characters, { Rick } from './data.js'

import Home from './components/Home';
import Nav from './components/Nav'
import {Route, Routes} from 'react-router-dom'
import './App.css';
const App = () => {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>  
  )
}

export default App;
