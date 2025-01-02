import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionBasel/Collection';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioBasel: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioBasel;
