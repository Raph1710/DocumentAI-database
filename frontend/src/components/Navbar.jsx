import React from 'react'

function Navbar({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold cursor-pointer" onClick={() => handleNavClick('home')}>
              Document AI
            </h1>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                  currentPage === 'home' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('database')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                  currentPage === 'database' 
                    ? 'bg-blue-700 text-white' 
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                Database
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 