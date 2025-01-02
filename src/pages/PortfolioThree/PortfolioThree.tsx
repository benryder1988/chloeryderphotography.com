import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionThree/CollectionThree';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioThree: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioThree;
