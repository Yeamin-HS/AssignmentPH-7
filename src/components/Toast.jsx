import React, { useEffect } from 'react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl z-50 flex items-center gap-3 min-w-80 max-w-md animate-slide-down`}>
      <span className="flex-1 text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-2xl font-bold hover:opacity-80 leading-none">×</button>
    </div>
  );
}