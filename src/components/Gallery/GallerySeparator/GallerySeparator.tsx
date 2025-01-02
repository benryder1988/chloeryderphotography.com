import { Separator } from '@/components/ui/separator';
import type React from 'react';

export const GallerySeparator: React.FC = () => {
  return (
    <div className="flex w-full">
      <div className="flex-1" />
      <Separator className="flex-grow w-3/4" />
      <div className="flex-1" />
    </div>
  );
};

export default GallerySeparator;
