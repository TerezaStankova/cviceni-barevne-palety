import React from 'react';
import './style.css';

export const Palette = ({ palette }) => {
    return (
        <div className="palette">
            <div className={palette.direction === 'vertical' ? "palette-scheme palette-scheme--vertical" : "palette-scheme palette-scheme--horizontal"}>
                <img className="scheme-image" src={palette.image} alt={palette.image} />
                <div className="scheme-colors">
                    {palette.colors.map(p => <div key={p} className="scheme-color" style={{ backgroundColor: p }} >{p}</div>)}
                </div>
            </div>
            <div className="palette-info">
                <h2>{palette.name}</h2>
                <p>{palette.description}</p>

                <p>Photo by <a href={palette.attribution.name} target="_blank">{palette.attribution.name}</a>.</p>
            </div>
        </div>
      );
};
