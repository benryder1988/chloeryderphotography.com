import { lazy } from 'react';
import { paths } from '@/routes/navigationPaths'; // Import paths from navigationPaths.ts

// Use async functions with lazy imports
const NotFound = lazy(async () => {
  const module = await import('@/pages/NotFound/NotFound');
  return module;
});

const DashboardWrapper = lazy(async () => {
  const module = await import('@/components/DashboardWrapper/DashboardWrapper');
  return module;
});

const PortfolioOne = lazy(async () => {
  const module = await import('@/pages/PortfolioOne/PortfolioOne');
  return module;
});

const PortfolioTwo = lazy(async () => {
  const module = await import('@/pages/PortfolioTwo/PortfolioTwo');
  return module;
});

const PortfolioThree = lazy(async () => {
  const module = await import('@/pages/PortfolioThree/PortfolioThree');
  return module;
});

const PortfolioFour = lazy(async () => {
  const module = await import('@/pages/PortfolioFour/PortfolioFour');
  return module;
});

const PortfolioFive = lazy(async () => {
  const module = await import('@/pages/PortfolioFive/PortfolioFive');
  return module;
});

const PortfolioSix = lazy(async () => {
  const module = await import('@/pages/PortfolioSix/PortfolioSix');
  return module;
});

const PortfolioSeven = lazy(async () => {
  const module = await import('@/pages/PortfolioSeven/PortfolioSeven');
  return module;
});

const PortfolioBasel = lazy(async () => {
  const module = await import('@/pages/PortfolioBasel/Portfolio');
  return module;
});

const PortfolioAutumnWalk = lazy(async () => {
  const module = await import('@/pages/PortfolioAutumnWalk/Portfolio');
  return module;
});

const PortfolioItaly = lazy(async () => {
  const module = await import('@/pages/PortfolioItaly/Portfolio');
  return module;
});

const PortfolioAutumnGarden = lazy(async () => {
  const module = await import('@/pages/PortfolioAutumnGarden/Portfolio');
  return module;
});

const PortfolioSean = lazy(async () => {
  const module = await import('@/pages/PortfolioSean/Portfolio');
  return module;
});
const Home = lazy(async () => {
  const module = await import('@/pages/Home/Home');
  return module;
});

const routes = [
  {
    path: '*',
    label: '',
    display: false,
    icon: null,
    element: <NotFound />,
  },
  {
    path: paths.home,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={Home} />,
  },
  {
    path: paths.lausanne,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioOne} />,
  },
  {
    path: paths.zurichHome,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioTwo} />,
  },
  {
    path: paths.zurich,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioThree} />,
  },
  {
    path: paths.gruyeres,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioFour} />,
  },
  {
    path: paths.lavaux,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioFive} />,
  },
  {
    path: paths.arosa,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioSix} />,
  },
  {
    path: paths.vidy,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioSeven} />,
  },
  {
    path: paths.basel,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioBasel} />,
  },

  {
    path: paths.autumn_walk,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioAutumnWalk} />,
  },

  {
    path: paths.piedmont,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioItaly} />,
  },

  {
    path: paths.autumn_garden,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioAutumnGarden} />,
  },

  {
    path: paths.sean,
    label: '',
    display: false,
    icon: null,
    element: <DashboardWrapper component={PortfolioSean} />,
  },
];

export default routes;
