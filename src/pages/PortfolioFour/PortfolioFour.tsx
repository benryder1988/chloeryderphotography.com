import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionFour/CollectionFour';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioFour: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioFour;
