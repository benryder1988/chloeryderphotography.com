import React from 'react';

interface SingleRowProps {
  componentOne: React.ReactNode;
}

export const SingleRow: React.FC<SingleRowProps> = (props) => {
  return <div>{props.componentOne}</div>;
};

export default SingleRow;
