// Helper function to get priority color
export const getPriorityColor = (priority) => {
  if (priority.includes('HIGH')) return 'bg-red-100 text-red-600 border-red-200';
  if (priority.includes('MEDIUM')) return 'bg-yellow-100 text-yellow-600 border-yellow-200';
  return 'bg-blue-100 text-blue-600 border-blue-200';
};

// Helper function to format date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: '2-digit', 
    day: '2-digit', 
    year: 'numeric' 
  });
};

// Helper function to pad ticket ID
export const formatTicketId = (id) => {
  return '#' + id.toString().padStart(4, '0');
};