import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const CardWhatsInForYou: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-grey-300 opacity-100 shadow-xl rounded-lg p-6 m-4 max-w-xs min-w-[250px] min-h-[270px] flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div>
        <h2 className="text-xl font-bold mb-6 text-blue-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <button className="bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-800">
        Get to know more
      </button>
    </div>
  );
};

export default CardWhatsInForYou;
