import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './home/home'
import Entry from './entry/entry'
import { GlobalStyle } from './shared/ui'
import React, { useEffect } from 'react'

function App() {
 
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry" element={<Entry />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
