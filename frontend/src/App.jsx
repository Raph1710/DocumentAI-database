import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Database from './pages/database'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Function to render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'database':
        return <Database />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Blue Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Render Current Page */}
      {renderPage()}
    </div>
  )
}

export default App
