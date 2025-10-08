import React from 'react';

export default function TicketCard({ ticket, onClick }) {
  const getPriorityColor = (priority) => {
    if (priority.includes('HIGH')) return 'bg-red-100 text-red-600 border border-red-200';
    if (priority.includes('MEDIUM')) return 'bg-yellow-100 text-yellow-600 border border-yellow-200';
    return 'bg-blue-100 text-blue-600 border border-blue-200';
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer p-6 border border-gray-200"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-semibold text-gray-900 text-lg flex-1">{ticket.title}</h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-emerald-600 text-sm font-medium">{ticket.status}</span>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{ticket.description}</p>
      
      <div className="flex items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="text-gray-700 font-medium">#{ticket.id.toString().padStart(4, '0')}</span>
          <span className={`px-3 py-1 rounded-md text-xs font-semibold ${getPriorityColor(ticket.priority)}`}>
            {ticket.priority}
          </span>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
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