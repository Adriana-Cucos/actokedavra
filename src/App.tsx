import { Routes, Route } from 'react-router-dom'

import './App.css'

import { StyleGuide } from 'pages/StyleGuide/StyleGuide'
import { Home } from 'pages/Home/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/styleguide' element={<StyleGuide />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
