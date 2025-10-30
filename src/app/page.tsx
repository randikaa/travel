'use client';

import { useState } from 'react';
import Globe from '@/components/Globe';
import CountryInfo from '@/components/CountryInfo';
import { countries, Country } from '@/data/countries';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Travel By Randika
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-180px)]">
          <div>
            <Globe countries={countries} onCountryClick={setSelectedCountry} />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <CountryInfo country={selectedCountry} />
          </div>
        </div>
      </div>
    </div>
  );
}
