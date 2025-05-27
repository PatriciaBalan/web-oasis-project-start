
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, User } from 'lucide-react';

interface CarPart {
  id: string;
  name: string;
  brand: string;
  partNumber: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface CarPartCardProps {
  part: CarPart;
  isAuthenticated: boolean;
  onViewDetails: (partId: string) => void;
  onLogin: () => void;
}

const CarPartCard = ({ part, isAuthenticated, onViewDetails, onLogin }: CarPartCardProps) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">{part.name}</CardTitle>
        <p className="text-sm text-gray-600">{part.brand} - {part.partNumber}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <img 
          src={`https://images.unsplash.com/${part.imageUrl}`}
          alt={part.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="text-sm text-gray-700">{part.description}</p>
        <p className="text-xl font-bold text-green-600">${part.price}</p>
        
        {isAuthenticated ? (
          <Button 
            onClick={() => onViewDetails(part.id)}
            className="w-full"
          >
            View Details & Location
          </Button>
        ) : (
          <Button 
            onClick={onLogin}
            variant="outline"
            className="w-full"
          >
            <Lock className="h-4 w-4 mr-2" />
            Login to View Details
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CarPartCard;
