import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionFive/CollectionFive';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioFive: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioFive;
