import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  imageSrc?: string;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  description,
  imageSrc,
  className = "",
}) => {
  return (
    <Card className={`bg-light rounded-xl shadow-lg overflow-hidden card-hover ${className}`}>
      <div className="h-56 bg-secondary overflow-hidden">
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <CardContent className="p-6 text-center">
        <h4 className="text-xl font-bold text-secondary mb-1">{name}</h4>
        <p className="text-accent mb-4">{position}</p>
        <p className="text-dark text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export { TeamCard };
