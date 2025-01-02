import React from 'react';
import { title, heroSection, gallery } from '@/assets/CollectionAutumnWalk/Collection';

import Portfolio from '@/components/Portfolio/Portfolio';

export const PortfolioAutumnWalk: React.FC = () => {
  return <Portfolio title={title} heroSection={heroSection} gallery={gallery} />;
};

export default PortfolioAutumnWalk;
