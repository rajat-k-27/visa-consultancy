import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CountryCardProps {
  name: string;
  imageSrc: string;
  description: string;
  features: string[];
  className?: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  imageSrc,
  description,
  features,
  className = "",
}) => {
  return (
    <Card className={`overflow-hidden shadow-xl card-hover ${className}`}>
      <div className="h-52 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`University campus in ${name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-secondary">{name}</h3>
          <div className="bg-primary h-8 w-12 rounded"></div>
        </div>
        <p className="text-dark mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, index) => (
            <span key={index} className="px-3 py-1 bg-light text-secondary text-sm rounded-full">
              {feature}
            </span>
          ))}
        </div>
        <Button 
          variant="default" 
          className="rounded-full bg-secondary hover:bg-secondary/90 text-white"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export { CountryCard };
