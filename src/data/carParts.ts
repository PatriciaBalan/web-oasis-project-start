
export interface CarPart {
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
}

export const carParts: CarPart[] = [
  {
    id: '1',
    name: 'DPFA Sensor',
    brand: 'Mercedes Benz',
    partNumber: 'A0009053603',
    price: 245.99,
    description: 'Diesel Particulate Filter Pressure Sensor for Mercedes Benz vehicles',
    imageUrl: 'photo-1518770660439-4636190af475',
    detailedDescription: 'The DPFA (Diesel Particulate Filter Differential Pressure) sensor monitors the pressure difference across the diesel particulate filter. This sensor is crucial for the proper functioning of the emission control system and helps ensure optimal engine performance.',
    location: 'Located on the diesel particulate filter housing, typically mounted on the exhaust system between the engine and the rear axle',
    installationNotes: 'Requires proper torque specifications and may need ECU reprogramming after installation. Ensure engine is cool before installation.',
    locationImageUrl: 'photo-1487252665478-49b61b47f302'
  },
  {
    id: '2',
    name: 'MAF Sensor',
    brand: 'Mercedes Benz',
    partNumber: 'A0000940948',
    price: 189.50,
    description: 'Mass Air Flow Sensor for precise air intake measurement',
    imageUrl: 'photo-1518770660439-4636190af475',
    detailedDescription: 'The Mass Air Flow sensor measures the amount of air entering the engine to help the ECU calculate the proper fuel injection amount for optimal combustion.',
    location: 'Mounted in the air intake duct between the air filter housing and the throttle body',
    installationNotes: 'Handle with care to avoid damaging the sensing element. Clean the air intake system if necessary.',
    locationImageUrl: 'photo-1487252665478-49b61b47f302'
  },
  {
    id: '3',
    name: 'EGR Valve',
    brand: 'Mercedes Benz',
    partNumber: 'A6421400860',
    price: 425.75,
    description: 'Exhaust Gas Recirculation Valve for emission control',
    imageUrl: 'photo-1518770660439-4636190af475',
    detailedDescription: 'The EGR valve recirculates a portion of exhaust gases back into the engine cylinders to reduce NOx emissions and improve fuel efficiency.',
    location: 'Typically mounted on the intake manifold, connected to the exhaust system via EGR pipe',
    installationNotes: 'Clean the EGR passages and replace gaskets during installation. May require adaptation procedure.',
    locationImageUrl: 'photo-1487252665478-49b61b47f302'
  }
];
