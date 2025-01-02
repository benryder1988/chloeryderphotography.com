import type React from 'react';

interface GalleryProps {
  children: React.ReactNode;
}

export const Gallery: React.FC<GalleryProps> = ({ children }) => {
  return <div className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-16 pb-10">{children}</div>;
};

export default Gallery;
