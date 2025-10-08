import React from 'react';
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* In-Progress Card */}
          <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-2xl p-12 text-white text-center overflow-hidden shadow-lg min-h-[200px] flex flex-col items-center justify-center">
            {/* Background Vector Images */}
            <img
              src={vector1}
              alt=""
              className="absolute top-0 left-0 w-70 object-cover opacity-200 z-0"
            />
            <img
              src={vector2}
              alt=""
              className="absolute top-0 right-0 w-full h-full object-cover opacity-30 z-0"
            />
            <img
              src={vector1}
              alt=""
              className="absolute top-0 right-0 rotate-180 w-70 object-cover opacity-200 z-0"
            />
            <img
              src={vector2}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
            />
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 opacity-95">In-Progress</h3>
              <div className="text-7xl font-bold">{inProgressCount}</div>
            </div>
          </div>

     
          <div className="relative bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-12 text-white text-center overflow-hidden shadow-lg min-h-[200px] flex flex-col items-center justify-center">
           
            <img
              src={vector1}
              alt=""
              className="absolute top-0 left-0 w-70 object-cover opacity-200 z-0"
            />
            <img
              src={vector2}
              alt=""
              className="absolute top-0 right-0 w-full h-full object-cover opacity-30 z-0"
            />
            <img
              src={vector1}
              alt=""
              className="absolute top-0 right-0 rotate-180 w-70 object-cover opacity-200 z-0"
            />
            <img
              src={vector2}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
            />
        
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 opacity-95">Resolved</h3>
              <div className="text-7xl font-bold">{resolvedCount}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}