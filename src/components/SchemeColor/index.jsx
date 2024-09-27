import React from 'react';
import './style.css';

export const SchemeColor = ({ colors }) => {
  return (
      <div className="scheme-colors">
          {colors.map(p => <div key={p} className="scheme-color" style={{ backgroundColor: p }} >{p}</div>)}
      </div>
  );
};
