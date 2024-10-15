// CardWhatsInForYou.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const CardWhatsInForYou: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white bg-opacity-60 shadow-lg rounded-lg p-6 m-4 max-w-xs min-w-[200px] min-h-[250px] flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2">
      <div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
        Get to know more
      </button>
    </div>
  );
};

export default CardWhatsInForYou;
