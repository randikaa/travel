'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { Country } from '@/data/countries';

interface GlobeProps {
  countries: Country[];
  onCountryClick: (country: Country) => void;
}

function CountryMarker({ country, onClick }: { country: Country; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  const phi = (90 - country.lat) * (Math.PI / 180);
  const theta = (country.lng + 180) * (Math.PI / 180);
  const radius = 2.02;

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return (
    <mesh
      position={[x, y, z]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial
        color={hovered ? '#ff6b6b' : '#4ecdc4'}
        emissive={hovered ? '#ff6b6b' : '#4ecdc4'}
        emissiveIntensity={hovered ? 0.8 : 0.5}
      />
    </mesh>
  );
}

function EarthGlobe({ countries, onCountryClick }: GlobeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, '/textures/earth.jpg');

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      {countries.map((country) => (
        <CountryMarker
          key={country.code}
          country={country}
          onClick={() => onCountryClick(country)}
        />
      ))}
    </group>
  );
}

export default function Globe({ countries, onCountryClick }: GlobeProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <EarthGlobe countries={countries} onCountryClick={onCountryClick} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        autoRotate={false}
      />
    </Canvas>
  );
}
