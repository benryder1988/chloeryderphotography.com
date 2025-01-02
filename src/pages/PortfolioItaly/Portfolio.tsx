import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionItaly/Collection';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioItaly: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioItaly;
