import React from 'react';

export default function TicketCard({ ticket, onClick }) {
  const getPriorityColor = (priority) => {
    if (priority.includes('HIGH')) return 'text-xs font-semibold text-red-600 text-[12px]';
    if (priority.includes('MEDIUM')) return 'text-xs font-semibold text-yellow-500 text-[12px]';
    return 'text-xs font-semibold text-blue-500 text-[12px]';
  };

  const getPriorityText = (priority) => {
    if (priority.includes('HIGH')) return 'HIGH PRIORITY';
    if (priority.includes('MEDIUM')) return 'MEDIUM PRIORITY';
    return 'LOW PRIORITY';
  };

  const getStatusColor = (status) => {
    if (status === 'In-Progress') return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all cursor-pointer"
    >
      
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-gray-900 text-base flex-1 leading-tight">
          {ticket.title}
        </h3>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`w-2 h-2 rounded-full ${getStatusColor(ticket.status)}`}></span>
          <span className="text-green-600 text-sm font-medium">{ticket.status}</span>
        </div>
      </div>
      

      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
        {ticket.description}
      </p>
      
  
      <div className="flex items-center justify-between gap-4 text-sm">
      
        <div className="flex items-center gap-3">
          <span className="text-gray-700 font-medium">
            #{ticket.id.toString().padStart(4, '0')}
          </span>
          <span className={`px-1 rounded text-xs font-semibold ${getPriorityColor(ticket.priority)}`}>
            {getPriorityText(ticket.priority)}
          </span>
        </div>
    
        <div className="flex items-center gap-3 text-gray-600">
          <span className="text-sm">{ticket.customer}</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}