import React from 'react'
import Header from './component/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
