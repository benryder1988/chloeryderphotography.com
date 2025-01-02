import type React from 'react';

interface LandscapePortraitRowProps {
  componentOne: React.ReactNode;
  componentTwo: React.ReactNode;
}

export const LandscapePortraitRow: React.FC<LandscapePortraitRowProps> = (props) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      <div className="col-span-2">{props.componentOne}</div>
      <div className="">{props.componentTwo}</div>
    </div>
  );
};

export default LandscapePortraitRow;
