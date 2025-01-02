import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionOne/CollectionOne';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioOne: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioOne;
