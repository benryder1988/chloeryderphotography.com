import type React from 'react';

interface TripleRowProps {
  componentOne: React.ReactNode;
  componentTwo: React.ReactNode;
  componentThree: React.ReactNode;
}

export const TripleRow: React.FC<TripleRowProps> = (props) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      <div>{props.componentOne}</div>
      <div>{props.componentTwo}</div>
      <div>{props.componentThree}</div>
    </div>
  );
};

export default TripleRow;
