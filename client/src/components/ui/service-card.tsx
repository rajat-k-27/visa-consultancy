import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  className = "",
}) => {
  return (
    <Card className={`bg-light p-8 card-hover ${className}`}>
      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-secondary" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
      <p className="text-dark mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
            <span className="text-dark">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors">
        Learn More
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </Card>
  );
};

export { ServiceCard };
