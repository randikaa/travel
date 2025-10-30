export interface Country {
    name: string;
    code: string;
    lat: number;
    lng: number;
    description: string;
    imageUrl: string;
}

export const countries: Country[] = [
    {
        name: "United States",
        code: "US",
        lat: 37.0902,
        lng: -95.7129,
        description: "The United States is a country of 50 states covering a vast swath of North America. Major cities include New York, a global finance and culture center, and Washington, DC, the capital. The country is known for its diverse landscapes, from beaches to mountains, and its significant cultural influence worldwide.",
        imageUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80"
    },
    {
        name: "France",
        code: "FR",
        lat: 46.2276,
        lng: 2.2137,
        description: "France is a country in Western Europe known for its rich history, art, fashion, and cuisine. Paris, its capital, is famed for the Eiffel Tower, Gothic Notre-Dame cathedral, and the Louvre museum. The country is also renowned for its wines and sophisticated cuisine.",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
    },
    {
        name: "Japan",
        code: "JP",
        lat: 36.2048,
        lng: 138.2529,
        description: "Japan is an island nation in East Asia known for its blend of ancient traditions and cutting-edge technology. Tokyo, the capital, is famous for its skyscrapers, shopping, and pop culture. The country is renowned for its temples, gardens, imperial palaces, and traditional arts like tea ceremonies.",
        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
    },
    {
        name: "Brazil",
        code: "BR",
        lat: -14.2350,
        lng: -51.9253,
        description: "Brazil is the largest country in South America and Latin America. Known for its Amazon rainforest, vibrant culture, and beautiful beaches. Rio de Janeiro is famous for its Carnival festival, Christ the Redeemer statue, and Copacabana beach.",
        imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80"
    },
    {
        name: "Australia",
        code: "AU",
        lat: -25.2744,
        lng: 133.7751,
        description: "Australia is a country and continent surrounded by the Indian and Pacific oceans. Known for its unique wildlife, stunning beaches, and the Great Barrier Reef. Sydney is famous for its Opera House and Harbour Bridge, while the Outback offers vast, remote landscapes.",
        imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80"
    },
    {
        name: "Egypt",
        code: "EG",
        lat: 26.8206,
        lng: 30.8025,
        description: "Egypt is a country linking northeast Africa with the Middle East. Known for its ancient civilization and iconic monuments like the Pyramids of Giza and the Great Sphinx. The Nile River valley and delta are home to one of the world's oldest civilizations.",
        imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80"
    },
    {
        name: "India",
        code: "IN",
        lat: 20.5937,
        lng: 78.9629,
        description: "India is a vast South Asian country with diverse terrain, from Himalayan peaks to Indian Ocean coastline. Known for its rich history spanning 5,000 years, the Taj Mahal, vibrant culture, and spiritual traditions. It's the world's largest democracy with incredible diversity.",
        imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
    },
    {
        name: "Italy",
        code: "IT",
        lat: 41.8719,
        lng: 12.5674,
        description: "Italy is a European country with a long Mediterranean coastline. Known for its art, architecture, and cuisine. Rome, its capital, is home to the Vatican, ancient ruins like the Colosseum, and Renaissance masterpieces. Venice, Florence, and Milan are other iconic cities.",
        imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80"
    },
    {
        name: "Canada",
        code: "CA",
        lat: 56.1304,
        lng: -106.3468,
        description: "Canada is a North American country stretching from the Atlantic to the Pacific. Known for its vast wilderness, multicultural cities, and natural beauty. Toronto, Vancouver, and Montreal are major urban centers. The country is famous for its politeness, hockey, and maple syrup.",
        imageUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80"
    },
    {
        name: "United Kingdom",
        code: "GB",
        lat: 55.3781,
        lng: -3.4360,
        description: "The United Kingdom comprises England, Scotland, Wales, and Northern Ireland. London, the capital, is a global city known for Big Ben, the Tower of London, and Buckingham Palace. The UK has a rich history of literature, music, and scientific innovation.",
        imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
    }
];
