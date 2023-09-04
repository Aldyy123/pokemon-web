// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-300 dark:bg-gray-800">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 dark:border-gray-100 border-gray-950"></div>
    </div>
  );
};

export default Loading;
