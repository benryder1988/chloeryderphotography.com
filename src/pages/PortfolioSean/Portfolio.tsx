import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionSean/Collection';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioSean: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioSean;
