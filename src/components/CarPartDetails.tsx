
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CarPartDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  part: {
    id: string;
    name: string;
    brand: string;
    partNumber: string;
    price: number;
    description: string;
    imageUrl: string;
    detailedDescription: string;
    location: string;
    installationNotes: string;
    locationImageUrl: string;
  } | null;
}

const CarPartDetails = ({ isOpen, onClose, part }: CarPartDetailsProps) => {
  if (!part) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{part.name}</DialogTitle>
          <div className="flex gap-2">
            <Badge variant="secondary">{part.brand}</Badge>
            <Badge variant="outline">{part.partNumber}</Badge>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Part Image</h3>
              <img 
                src={`https://images.unsplash.com/${part.imageUrl}`}
                alt={part.name}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location on Vehicle</h3>
              <img 
                src={`https://images.unsplash.com/${part.locationImageUrl}`}
                alt={`${part.name} location`}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Detailed Description</h3>
            <p className="text-gray-700">{part.detailedDescription}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Location Information</h3>
            <p className="text-gray-700">{part.location}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Installation Notes</h3>
            <p className="text-gray-700">{part.installationNotes}</p>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-2xl font-bold text-green-600">${part.price}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarPartDetails;
