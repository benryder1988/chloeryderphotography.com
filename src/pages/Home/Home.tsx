import type React from 'react';
// import Title from '@/components/Gallery/Title/Title';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BASE_URL, COLLECTION_THREE } from '@/config/config';

// Function to generate full image URL for CollectionThree
const getImageUrl = (imageName: string): string => `${BASE_URL}/${COLLECTION_THREE}/${imageName}`;

export const Home: React.FC = () => {
  const imageUrl = getImageUrl('Zurich_Edition-7.jpg');

  return (
    <ScrollArea className="w-full h-screen">
      <div className="w-full h-14" style={{ backgroundColor: '#1B3222' }}></div>
      <div className="overflow-hidden w-full h-full">
        <img src={imageUrl} className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-14" style={{ backgroundColor: '#1B3222' }}></div>

      {/* <div className="p-12">
        <Title title="Chloe" />
      </div> */}
    </ScrollArea>
  );
};

export default Home;
