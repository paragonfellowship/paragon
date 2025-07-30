// src/components/ProjectMaps.js
import React from 'react';
import './ProjectMaps.css';

const ProjectMaps = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1Aua9ivUL7951108tHdpKb50Qd-BqWGM&ehbc=2E312F&noprof=1"
        className="map-iframe"
        title="Our Project Locations"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="fullscreen 'none'"  // Modern browsers
        allowfullscreen="false"    // Legacy attribute
      ></iframe>
    </div>
  );
};

export default ProjectMaps;