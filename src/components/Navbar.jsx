import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
    
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">CS — Ticket System</h1>
          </div>
     
          <div className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-medium transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-medium transition">
              FAQ
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-medium transition">
              Changelog
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-medium transition">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-medium transition">
              Download
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-medium transition">
              Contact
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition text-base font-medium flex items-center gap-2">
              <span className="text-lg">+</span> New Ticket
            </button>
          </div>

  
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>


        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-base font-medium transition">
              Home
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-base font-medium transition">
              FAQ
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-base font-medium transition">
              Changelog
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-base font-medium transition">
              Blog
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-base font-medium transition">
              Download
            </a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-base font-medium transition">
              Contact
            </a>
            <button className="w-full bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition text-base font-medium mt-2">
              + New Ticket
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}