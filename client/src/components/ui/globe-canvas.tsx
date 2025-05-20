import React from 'react';

interface GlobeCanvasProps {
  className?: string;
  showFloatingObjects?: boolean;
}

// Simplified GlobeCanvas component without Three.js
// This is a fallback when 3D rendering is not available
const GlobeCanvas: React.FC<GlobeCanvasProps> = ({ 
  className = "w-full h-full min-h-[300px]",
  showFloatingObjects = true
}) => {
  return (
    <div className={`${className} relative overflow-hidden bg-gradient-to-b from-primary/20 to-secondary/20 rounded-full flex items-center justify-center`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-secondary/30 to-primary/30 animate-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/5 h-3/5 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 animate-float" style={{ animationDelay: "1s" }} />
      </div>
      <div className="z-10 font-bold text-secondary text-xl">Global Visa</div>
    </div>
  );
};

export { GlobeCanvas };
