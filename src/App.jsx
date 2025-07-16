import { Routes, Route } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NasaFeed from './pages/NasaFeed.jsx'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/nasa' element={<NasaFeed/>}/>
      </Route>
    </Routes>
  )
}

export default App
