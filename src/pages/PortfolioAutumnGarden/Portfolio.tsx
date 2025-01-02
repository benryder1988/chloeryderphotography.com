import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionAutumnGarden/Collection';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioAutumnGarden: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioAutumnGarden;
