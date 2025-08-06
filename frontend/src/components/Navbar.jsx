import React from 'react'

function Navbar({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand in top-left */}
          <div className="flex-shrink-0">
            <h1 className="cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src="https://swasthx.com/assets/Swasthx_White-25caeae3.webp" 
                alt="SwasthX" 
                className='h-48 w-auto'
              />
            </h1>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
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