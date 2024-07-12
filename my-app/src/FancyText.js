import React from 'react';
import './FancyText.css';

export default function FancyText({title, text}) {
  return(
    // If text is a title, returns fancytitle css. If not, returns fancytext css
    <div className={title ? 'fancytitle' : 'fancytext'}>
      {text}
    </div>
  );
};