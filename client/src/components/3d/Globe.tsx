import React from 'react';
import { GlobeCanvas } from '@/components/ui/globe-canvas';
import { School, PlaneTakeoff, BadgeCheck } from 'lucide-react';

interface GlobeProps {
  size?: 'sm' | 'md' | 'lg';
}

const Globe: React.FC<GlobeProps> = ({ size = 'md' }) => {
  // Size classes based on the size prop
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-64 h-64 md:w-80 md:h-80',
    lg: 'w-80 h-80 md:w-96 md:h-96'
  };

  return (
    <div className="globe-container flex justify-center items-center">
      <div className={`globe ${sizeClasses[size]} relative`}>
        {/* Globe Canvas */}
        <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary">
          <GlobeCanvas />
        </div>

        {/* Floating Icons */}
        <div className="absolute -right-4 top-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
          <School className="h-6 w-6 text-primary" />
        </div>
        
        <div className="absolute -left-4 bottom-1/3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
          <PlaneTakeoff className="h-6 w-6 text-secondary" />
        </div>
        
        <div className="absolute top-0 left-1/3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
          <BadgeCheck className="h-5 w-5 text-accent" />
        </div>
      </div>
    </div>
  );
};

export default Globe;
