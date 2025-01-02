import type React from 'react';

interface PortraitLandscapeRowProps {
  componentOne: React.ReactNode;
  componentTwo: React.ReactNode;
}

export const PortraitLandscapeRow: React.FC<PortraitLandscapeRowProps> = (props) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      <div className="">{props.componentOne}</div>
      <div className="col-span-2">{props.componentTwo}</div>
    </div>
  );
};

export default PortraitLandscapeRow;
