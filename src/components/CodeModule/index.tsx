import React, { useEffect, useState } from 'react';

let lineCounter = 0;

export const CodeLine: React.FC = ({ children }) => {
  const [lineID, setLineID] = useState(lineCounter);

  useEffect(() => {
    lineCounter += 1;
    setLineID(lineCounter);
    return () => {
      lineCounter = 0;
      setLineID(lineCounter);
    };
  }, []);

  return (
    <div data-line-nr={lineID} className='code-l'>
      {children}{' '}
    </div>
  );
};

export const CodeContainer: React.FC = ({ children }) => {
  useEffect(() => {
    lineCounter = 0;
  }, []);

  return <code>{children}</code>;
};
