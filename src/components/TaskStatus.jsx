import React from 'react';

export default function TaskStatus({ inProgressTickets, resolvedTickets, onComplete }) {
  return (
    <div className="lg:col-span-1">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Task Status</h2>
      
      {/* In Progress Section */}
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">In-Progress Task Status</h3>
          </div>
          <div className="p-5">
            {inProgressTickets.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">No tasks in progress</p>
              </div>
            ) : (
              <div className="space-y-3">
                {inProgressTickets.map(ticket => (
                  <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <h4 className="font-medium text-gray-900 text-sm mb-3">{ticket.title}</h4>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onComplete(ticket.id);
                      }}
                      className="w-full bg-emerald-500 text-white py-2.5 rounded-lg hover:bg-emerald-600 transition text-sm font-semibold">
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Resolved Section */}
      <div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Resolved Task</h3>
          </div>
          <div className="p-5">
            {resolvedTickets.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">No resolved tasks yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {resolvedTickets.map(ticket => (
                  <div key={ticket.id} className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h4 className="font-medium text-gray-900 text-sm">{ticket.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}