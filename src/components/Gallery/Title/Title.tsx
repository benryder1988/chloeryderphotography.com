import React from 'react';

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  return <p className="font-oxygen font-bold pb-4 text-lg md:text-2xl">{props.title}</p>;
  // return <p className="font-oxygen font-bold">{props.title}</p>;
};

export default Title;
