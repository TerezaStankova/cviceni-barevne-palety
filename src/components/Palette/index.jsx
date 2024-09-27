import React from 'react';
import './style.css';
import { SchemeColor } from '../SchemeColor';

export const Palette = ({ paletteData }) => {
    return (
        <div className="palette">
            <div className={paletteData.direction === 'vertical' ? "palette-scheme palette-scheme--vertical" : "palette-scheme palette-scheme--horizontal"}>
                <img className="scheme-image" src={paletteData.image} alt={paletteData.image} />
                <SchemeColor colors={paletteData.colors}/>
            </div>
            <div className="palette-info">
                <h2>{paletteData.name}</h2>
                <p>{paletteData.description}</p>

                <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
            </div>
        </div>
      );
};
