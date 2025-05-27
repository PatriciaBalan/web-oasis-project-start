
import React from 'react';
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight } from 'lucide-react';

interface CarDiagramProps {
  partName: string;
  location: string;
}

const CarDiagram = ({ partName, location }: CarDiagramProps) => {
  // Determine arrow position and direction based on part location
  const getArrowConfig = (partName: string, location: string) => {
    const name = partName.toLowerCase();
    const loc = location.toLowerCase();
    
    if (name.includes('dpfa') || name.includes('particulate')) {
      return {
        position: { top: '65%', left: '50%' },
        direction: 'up',
        label: 'DPF Housing'
      };
    } else if (name.includes('maf') || name.includes('mass air flow')) {
      return {
        position: { top: '35%', left: '25%' },
        direction: 'down',
        label: 'Air Intake'
      };
    } else if (name.includes('egr') || name.includes('exhaust gas')) {
      return {
        position: { top: '40%', left: '65%' },
        direction: 'left',
        label: 'Intake Manifold'
      };
    } else {
      return {
        position: { top: '50%', left: '50%' },
        direction: 'down',
        label: 'Engine Bay'
      };
    }
  };

  const arrowConfig = getArrowConfig(partName, location);

  const renderArrow = () => {
    const ArrowComponent = {
      up: ArrowUp,
      down: ArrowDown,
      left: ArrowLeft,
      right: ArrowRight
    }[arrowConfig.direction];

    return (
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={arrowConfig.position}
      >
        <div className="flex flex-col items-center animate-pulse">
          <ArrowComponent className="h-8 w-8 text-red-500 font-bold drop-shadow-lg" />
          <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold mt-1 shadow-lg">
            {arrowConfig.label}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300">
      {/* Car Diagram SVG */}
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Car Body */}
        <rect x="50" y="80" width="300" height="60" rx="10" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
        
        {/* Car Hood */}
        <rect x="50" y="70" width="80" height="20" rx="5" fill="#d1d5db" stroke="#374151" strokeWidth="2" />
        
        {/* Car Windshield */}
        <polygon points="130,70 180,50 250,50 280,70" fill="#bfdbfe" stroke="#374151" strokeWidth="2" />
        
        {/* Car Roof */}
        <rect x="180" y="50" width="100" height="20" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
        
        {/* Wheels */}
        <circle cx="100" cy="160" r="20" fill="#374151" stroke="#000" strokeWidth="2" />
        <circle cx="300" cy="160" r="20" fill="#374151" stroke="#000" strokeWidth="2" />
        <circle cx="100" cy="160" r="12" fill="#6b7280" />
        <circle cx="300" cy="160" r="12" fill="#6b7280" />
        
        {/* Engine Block */}
        <rect x="60" y="90" width="60" height="40" rx="5" fill="#9ca3af" stroke="#374151" strokeWidth="1" />
        
        {/* Exhaust System */}
        <rect x="280" y="145" width="60" height="8" rx="4" fill="#6b7280" stroke="#374151" strokeWidth="1" />
        
        {/* Air Intake */}
        <rect x="70" y="75" width="30" height="15" rx="3" fill="#60a5fa" stroke="#374151" strokeWidth="1" />
        
        {/* Labels */}
        <text x="85" y="115" fontSize="8" fill="#374151" textAnchor="middle">Engine</text>
        <text x="85" y="85" fontSize="6" fill="#374151" textAnchor="middle">Air Intake</text>
        <text x="310" y="155" fontSize="6" fill="#374151" textAnchor="middle">Exhaust</text>
      </svg>
      
      {/* Arrow Overlay */}
      {renderArrow()}
      
      {/* Legend */}
      <div className="absolute bottom-2 right-2 bg-white p-2 rounded shadow-lg text-xs">
        <div className="font-semibold text-gray-800 mb-1">Sensor Location</div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-gray-600">{partName}</span>
        </div>
      </div>
    </div>
  );
};

export default CarDiagram;
