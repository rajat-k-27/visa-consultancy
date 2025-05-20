import React from 'react';

interface GlobeCanvasProps {
  className?: string;
  showFloatingObjects?: boolean;
}

// Enhanced CSS-based Globe component
const GlobeCanvas: React.FC<GlobeCanvasProps> = ({ 
  className = "w-full h-full min-h-[300px]",
  showFloatingObjects = true
}) => {
  return (
    <div className={`${className} relative overflow-hidden bg-gradient-to-b from-primary/20 to-secondary/20 rounded-full flex items-center justify-center rotate-3d`}>
      {/* Main globe layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-secondary/30 to-primary/30 animate-pulse-glow" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/5 h-3/5 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Continent markings */}
      <div className="absolute w-2/5 h-1/5 bg-secondary/10 rounded-full top-1/4 left-1/4 rotate-12"></div>
      <div className="absolute w-1/5 h-1/6 bg-primary/20 rounded-full bottom-1/3 right-1/4 -rotate-12"></div>
      <div className="absolute w-1/6 h-1/5 bg-secondary/15 rounded-full top-1/3 right-1/3 rotate-45"></div>
      
      {/* Country labels */}
      {showFloatingObjects && (
        <>
          <div className="absolute top-1/6 right-1/4 z-10">
            <div className="px-2 py-1 bg-primary text-secondary text-xs font-bold rounded-md animate-float" style={{ animationDelay: "0.5s" }}>
              Canada
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 z-10">
            <div className="px-2 py-1 bg-primary text-secondary text-xs font-bold rounded-md animate-float" style={{ animationDelay: "1.5s" }}>
              Australia
            </div>
          </div>
          <div className="absolute top-1/3 left-1/6 z-10">
            <div className="px-2 py-1 bg-primary text-secondary text-xs font-bold rounded-md animate-float" style={{ animationDelay: "2s" }}>
              UK
            </div>
          </div>
          <div className="absolute bottom-1/6 right-1/5 z-10">
            <div className="px-2 py-1 bg-primary text-secondary text-xs font-bold rounded-md animate-float" style={{ animationDelay: "1s" }}>
              USA
            </div>
          </div>
        </>
      )}
      
      {/* Central label */}
      <div className="z-10 font-bold text-secondary text-xl bg-primary/80 px-3 py-1 rounded-md">GlobalVisa</div>
    </div>
  );
};

export { GlobeCanvas };
