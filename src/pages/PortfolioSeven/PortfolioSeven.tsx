import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionSeven/CollectionSeven';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioSeven: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioSeven;
