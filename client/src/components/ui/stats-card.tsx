import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  className = "",
}) => {
  return (
    <Card className={`bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform ${className}`}>
      <CardContent className="p-0 text-center">
        <div className="text-primary text-4xl font-bold mb-2">{value}</div>
        <p className="text-dark">{label}</p>
      </CardContent>
    </Card>
  );
};

export { StatsCard };
