import React, { useEffect } from 'react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Define colors and icons based on type
  const getToastStyles = () => {
    switch(type) {
      case 'error':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-800',
          icon: 'bg-red-500',
          iconContent: '!'
        };
      case 'success':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-800',
          icon: 'bg-green-500',
          iconContent: '✓'
        };
      case 'info':
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-800',
          icon: 'bg-blue-500',
          iconContent: 'i'
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div className="fixed top-4 right-4 z-50 animate-pulse">
      <div className={`${styles.bg} ${styles.border} border rounded-lg shadow-lg p-4 pr-12 min-w-[320px] max-w-md relative`}>
  
        <div className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-bl-lg animate-progress" 
             style={{ 
               width: '100%',
               animation: 'progress 2s linear forwards'
             }}>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className={`${styles.icon} text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm`}>
            {styles.iconContent}
          </div>
          
          {/* Message */}
          <p className={`${styles.text} text-base font-medium flex-1`}>
            {message}
          </p>
        </div>

        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}