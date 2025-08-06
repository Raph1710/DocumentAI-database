import React, { useState, useEffect } from 'react'

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Mock screenshot images - replace with your actual screenshots
  const screenshots = [
    {
      src: "https://swasthx.com/assets/banner_3-de66739a.webp",
    },
    {
      src: "https://swasthx.com/assets/banner_1-b49a4066.webp",
    },
    {
      src: "https://swasthx.com/assets/banner_5-f92d780d.webp",
    }
  ]

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [screenshots.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16 gap-12">
          {/* Left: Headings */}
          <div className="flex-1 text-left">
            <h1 className="text-9xl md:text-7xl font-semibold text-gray-900 mb-8 leading-tight">Your Health At Your Fingertips</h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-blue-400 mb-6 leading-snug">Fewer steps, Faster Care.</h2>
            <h3 className="text-xl md:text-2xl text-gray-700 font-medium mb-8">"Walk into hospitals like you fly through airports—smart, paperless, and powered by Swasthx AI."</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center bg-black text-white px-6 py-4 rounded-lg text-lg font-semibold shadow hover:bg-gray-900 transition">
                Coming soon on
                <img src="https://swasthx.com/assets/playstore-98fb8451.webp" className='w-6 h-6 mr-2'></img>Playstore
              </button>
              <button className="flex items-center bg-black text-white px-6 py-4 rounded-lg text-lg font-semibold shadow hover:bg-gray-900 transition">
                Coming soon on 
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.564 13.271c-.025-2.568 2.099-3.797 2.192-3.854-1.197-1.748-3.06-1.99-3.719-2.017-1.583-.16-3.09.927-3.89.927-.8 0-2.04-.904-3.36-.88-1.728.025-3.33 1.004-4.22 2.553-1.8 3.12-.46 7.73 1.29 10.26.86 1.24 1.88 2.63 3.22 2.58 1.3-.05 1.8-.83 3.37-.83 1.57 0 2.01.83 3.37.8 1.4-.03 2.28-1.26 3.13-2.5.62-.89.87-1.36 1.36-2.39-3.57-1.36-3.44-4.01-3.42-4.13zm-3.23-7.7c.71-.86 1.19-2.06 1.06-3.27-1.02.04-2.25.68-2.98 1.54-.66.77-1.24 2-1.02 3.18 1.13.09 2.29-.57 3.04-1.45z"/>
                </svg>
                App Store
              </button>
            </div>
          </div>
          {/* Right: Phone Frame */}
          <div className="w-full md:w-auto flex-1 flex justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Screenshot Images */}
                  <div className="relative w-full h-full">
                    {screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot.src}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {/* Carousel Indicators */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Three-Step Process */}
        <div className="mb-16">
          <h2 className="text-5xl font-semibold text-center text-gray-900 mb-12">
              Seamless Access with Privacy
          </h2>
          <h3 className="text-3xl font-semibold text-center text-gray-500 mb-12">
          Giving you access to your medical records, anytime, anywhere.
          </h3>
          
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
      </main>
      <footer className="bg-blue-300 text-gray-800 mt-16 pt-10 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand and Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Swasthx</h2>
            <div className="mb-2">BAY CONNECT SOLUTIONS PRIVATE LIMITED</div>
            <div className="font-semibold mt-4 mb-1">Email Us</div>
            <div className="mb-2">connect@swasthx.com</div>
            <div className="font-semibold mt-4 mb-1">Contact Us</div>
            <div className="mb-2">+91 79953 27270</div>
          </div>
          {/* Column 2: Addresses */}
          <div>
            <div className="font-semibold mb-1">Operating address</div>
            <div className="mb-4 text-sm">thub phase 2.0, 20, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081, India</div>
            <div className="font-semibold mb-1">Registered address</div>
            <div className="text-sm">P.No.550/F, Road No.92, Jubilee Hills, Film Nagar, Shaikpet, Hyderabad, 500096, Telangana</div>
          </div>
          {/* Column 3: Links */}
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">For Doctors</a></li>
              <li><a href="#" className="hover:underline">For Customers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
            <div className="font-semibold mt-4 mb-2">Social</div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Linkedin" className="hover:text-blue-700">Linkedin</a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-600">Instagram</a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">Facebook</a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">Twitter</a>
            </div>
          </div>
          {/* Column 4: Legal */}
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Google API Disclosure</a></li>
              <li><a href="#" className="hover:underline">Refund & Cancelation</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-200 mt-8 pt-4 text-center text-sm text-gray-500">
          Copyright © 2025 Swasthx. All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default Home