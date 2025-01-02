import React from 'react';

interface HeroProps {
  heroText: string;
}

export const Hero: React.FC<HeroProps> = (props) => {
  return <h5 className="mb-8 font-light text-justify">{props.heroText}</h5>;
};

export default Hero;
