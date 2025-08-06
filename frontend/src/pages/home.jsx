import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Document AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your intelligent document processing solution
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-150 ease-in-out">
              Get Started
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-150 ease-in-out">
              Learn More
            </button>
          </div>
        </div>

        {/* Animated Three-Step Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          
          <div className="relative">
            {/* Connecting Lines - Connect from edge to edge */}
            <div className="absolute w-3/4 h-1 bg-blue-500 left-1/2 top-[30%] transform -translate-x-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
              {/* Step 1: Store */}
              <div className="text-center relative">
                <div className="bg-blue-50 rounded-full w-48 h-48 mx-auto mb-8 flex items-center justify-center relative">
                  {/* Medical Data Source Icons */}
                  <div className="grid grid-cols-3 gap-3 w-28 h-28">
                    <div className="bg-green-500 rounded-lg text-white text-sm flex items-center justify-center">💬</div>
                    <div className="bg-red-500 rounded-lg text-white text-sm flex items-center justify-center">❤️</div>
                    <div className="bg-orange-500 rounded-lg text-white text-sm flex items-center justify-center">📁</div>
                    <div className="bg-blue-500 rounded-lg text-white text-sm flex items-center justify-center">🏥</div>
                    <div className="bg-blue-300 rounded-lg text-white text-sm flex items-center justify-center">📋</div>
                    <div className="bg-blue-700 rounded-lg text-white text-sm flex items-center justify-center">💙</div>
                    <div className="bg-red-500 rounded-lg text-white text-sm flex items-center justify-center">📷</div>
                    <div className="bg-blue-800 rounded-lg text-white text-sm flex items-center justify-center">📊</div>
                    <div className="bg-gray-400 rounded-lg text-white text-sm flex items-center justify-center">📄</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Store</h3>
                <p className="text-gray-600 leading-relaxed">
                  Effortlessly organize your medical records with just one click—both digital and physical documents securely stored in one place.
                </p>
              </div>

              {/* Step 2: Process */}
              <div className="text-center relative">
                <div className="bg-blue-50 rounded-full w-48 h-48 mx-auto mb-8 flex items-center justify-center relative">
                  {/* Processing Animation with Medical Documents */}
                  <div className="relative">
                    <div className="w-48 h-48 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-blue-600 text-5xl">📋</div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Do The Work</h3>
                <p className="text-gray-600 leading-relaxed">
                  Let our technology seamlessly manage backend tasks for efficient medical record organization.
                </p>
              </div>

              {/* Step 3: Timeline */}
              <div className="text-center relative">
                <div className="bg-blue-50 rounded-full w-48 h-48 mx-auto mb-8 flex items-center justify-center relative">
                  {/* Mobile Device with Medical Timeline */}
                  <div className="w-20 h-28 bg-gray-800 rounded-lg p-1">
                    <div className="w-full h-full bg-white rounded-md p-2">
                      {/* Timeline Content */}
                      <div className="space-y-2">
                        <div className="text-xs text-gray-600 font-bold text-center">2023</div>
                        <div className="w-full h-2 bg-blue-300 rounded"></div>
                        <div className="w-3/4 h-2 bg-green-300 rounded"></div>
                        <div className="w-1/2 h-2 bg-yellow-300 rounded"></div>
                        <div className="text-xs text-gray-500 text-center">📊</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Timeline</h3>
                <p className="text-gray-600 leading-relaxed">
                  Organize your medical records effortlessly with our timeline, ensuring you never worry about them again. Streamline your health journey with ease.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-blue-600 text-3xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Document Processing
            </h3>
            <p className="text-gray-600">
              Automatically extract and process information from your documents with advanced AI algorithms.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-blue-600 text-3xl mb-4">🗄️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Database Management
            </h3>
            <p className="text-gray-600">
              Store and organize your processed documents efficiently in our secure database system.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-blue-600 text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI-Powered
            </h3>
            <p className="text-gray-600">
              Advanced AI algorithms provide accurate document analysis and intelligent insights.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home 