import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionTwo/CollectionTwo';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioTwo: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioTwo;
