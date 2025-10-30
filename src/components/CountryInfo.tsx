'use client';

import { Country } from '@/data/countries';
import Image from 'next/image';

interface CountryInfoProps {
  country: Country | null;
}

export default function CountryInfo({ country }: CountryInfoProps) {
  if (!country) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <div className="text-center">
          <p className="text-xl mb-2">Click on a country marker</p>
          <p className="text-sm">to see its information</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">{country.name}</h2>
      <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={country.imageUrl}
          alt={country.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Country Code</h3>
          <p className="text-lg text-gray-900">{country.code}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Coordinates</h3>
          <p className="text-lg text-gray-900">
            {country.lat.toFixed(4)}°, {country.lng.toFixed(4)}°
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Description</h3>
          <p className="text-base text-gray-700 leading-relaxed">{country.description}</p>
        </div>
      </div>
    </div>
  );
}
