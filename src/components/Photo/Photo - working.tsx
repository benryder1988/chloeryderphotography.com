import type React from 'react';

interface PhotoProps {
  image: string;
  caption: React.ReactNode;
}

export const Photo: React.FC<PhotoProps> = (props) => {
  return (
    // <div className="w-full h-full">
    // <div className="overflow-hidden rounded-sm bg-gray-100" style={{ minHeight: '200px' }}>
    <img
      src={props.image}
      className="w-full h-full object-cover rounded-sm transition-opacity duration-300"
      alt="photo"
    />
    // </div>
    // </div>
  );
};

export default Photo;
