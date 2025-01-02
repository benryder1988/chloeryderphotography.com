import type React from 'react';
import { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

interface PhotoProps {
  image: string;
  caption: React.ReactNode;
}

export const Photo: React.FC<PhotoProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad: () => void = () => {
    setLoading(false);
  };

  const handleImageError: () => void = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <>
      {loading && !error && (
        <div className="w-full h-full bg-black">
          <div className="absolute inset-0 flex justify-center items-center">
            <BeatLoader
              color="#CCCCCC"
              loading={loading}
              size={10}
              speedMultiplier={0.5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
      {!error && (
        <img
          src={props.image}
          className={`w-full h-full object-cover rounded-sm transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          alt="photo"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      {error && <div className="w-full h-full text-white flex items-center justify-center">Failed to load image</div>}
    </>
  );
};

export default Photo;
