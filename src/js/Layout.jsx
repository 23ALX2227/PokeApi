import React from 'react'
import { BrowserRoute, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home.jsx'

export const Layout = () => {
  return (
    <div className='layout'>
        <BrowserRoute>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Home />} path='/home' />
                <Route element={<h1>Not Found!</h1>} path='*' />
            </Routes>
        
        </BrowserRoute>

    </div>
  )
}
