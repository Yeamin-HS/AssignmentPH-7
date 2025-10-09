import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { initialTickets } from './data/ticketsData';

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleAddToProgress = (ticket) => {
    if (inProgressTickets.find(t => t.id === ticket.id)) {
      showToast('Ticket is already in progress!', 'info');
      return;
    }
    setInProgressTickets([...inProgressTickets, ticket]);
    showToast(`"${ticket.title}" has been added to In-Progress!`, 'success');
  };

  const handleComplete = (ticketId) => {
    const ticket = inProgressTickets.find(t => t.id === ticketId);
    if (!ticket) return;

    setInProgressTickets(inProgressTickets.filter(t => t.id !== ticketId));
    setResolvedTickets([...resolvedTickets, ticket]);
    setTickets(tickets.filter(t => t.id !== ticketId));
    showToast(`"${ticket.title}" has been marked as resolved!`, 'success');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <Navbar />
      
      <Banner 
        inProgressCount={inProgressTickets.length} 
        resolvedCount={resolvedTickets.length} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Tickets</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map(ticket => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket} 
                  onClick={() => handleAddToProgress(ticket)} 
                />
              ))}
            </div>
          </div>

          {/* Task Status Section */}
          <TaskStatus 
            inProgressTickets={inProgressTickets}
            resolvedTickets={resolvedTickets}
            onComplete={handleComplete}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}