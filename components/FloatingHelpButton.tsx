
import React from 'react';
import Icon from './Icon';

const FloatingHelpButton: React.FC = () => {
  return (
    <button className="absolute bottom-28 right-4 z-20 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110">
      <Icon name="help" className="w-7 h-7" />
    </button>
  );
};

export default FloatingHelpButton;
