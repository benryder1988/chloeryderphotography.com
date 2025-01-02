import type React from 'react';

interface DoubleRowProps {
  componentOne: React.ReactNode;
  componentTwo: React.ReactNode;
}

export const DoubleRow: React.FC<DoubleRowProps> = (props) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div>{props.componentOne}</div>
      <div>{props.componentTwo}</div>
    </div>
  );
};

export default DoubleRow;
