import React from 'react'
import Form from './component/form'
import Feed from './component/feed'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/get-image" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App