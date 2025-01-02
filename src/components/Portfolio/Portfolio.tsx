import type React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';

interface PortfolioProps {
  title: React.ReactNode;
  heroSection: React.ReactNode;
  gallery: React.ReactNode;
}

export const Portfolio: React.FC<PortfolioProps> = (props) => {
  return (
    <ScrollArea className="w-full h-screen rounded-md border">
      <div className="p-6 md:p-12 lg:p-12">
        {props.title}
        {/* {props.heroSection} */}
        {/* <GallerySeparator /> */}
        <div className="mb-2 md:mb-8 lg:mb-8 " />
        {props.gallery}
        <div className="lg:hidden md:hidden text-sm text-slate-500 pb-16">© Chloe Ryder Photography</div>
      </div>
    </ScrollArea>
  );
};

export default Portfolio;
