'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [starCount, setStarCount] = useState(0);

  const handleStarClick = () => {
    setStarCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-2  bg-base-300 h-10 ">
      <button
        onClick={handleStarClick}
        className="text-base-content hover:text-yellow-500 transition-colors duration-200"
      >
        <FaStar size={24} />
      </button>
      <span className="text-foreground font-semibold">{starCount}</span>
    </div>
  );
};

export default StarRating;