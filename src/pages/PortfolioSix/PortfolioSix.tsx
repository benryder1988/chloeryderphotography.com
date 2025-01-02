import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionSix/CollectionSix';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioSix: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioSix;
