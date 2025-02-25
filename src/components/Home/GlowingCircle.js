import React from 'react';
import './GlowingCircle.css';

const GlowingCircle = ({ imageSrc }) => {
    return (
        <div className="glow-circle">
            <img src={imageSrc} alt="Profile" className="circle-image" />
        </div>
    );
};

export default GlowingCircle;
