// components/Loading.js
import React from 'react';

interface Props {
  screen?: boolean
}

const Loading = ({
  screen = true
}: Props) => {
  return (
    <div className={`${screen && 'h-screen'} flex items-center justify-center bg-gray-300 dark:bg-gray-800`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 dark:border-gray-100 border-gray-950"></div>
    </div>
  );
};

export default Loading;
