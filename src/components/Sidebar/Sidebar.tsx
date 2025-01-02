import type React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GallerySeparator from '../Gallery/GallerySeparator/GallerySeparator';
import { paths, labels, getNavLinkClasses } from '@/routes/navigationPaths';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;
  const isMomentsActive = (): boolean => location.pathname.startsWith(paths.moments);

  return (
    <div className="hidden md:block lg:block bg-stone-50">
      <div className="flex h-full max-h-screen flex-col">
        <div className="grow flex flex-col gap-2">
          <div className="flex text-center">
            <Link to={paths.home} className="flex-1 pt-4 pb-2">
              <span className="font-bold">Chloe Ryder Photography</span>
            </Link>
          </div>

          <GallerySeparator />

          <div className="flex">
            <Link to={paths.home} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.home))}>{labels.home}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.gruyeres} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isMomentsActive())}>{labels.moments}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.gruyeres} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.gruyeres), true)}>{labels.gruyeres}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.lausanne} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.lausanne), true)}>{labels.lausanne}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.lavaux} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.lavaux), true)}>{labels.lavaux}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.zurich} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.zurich), true)}>{labels.zurich}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.zurichHome} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.zurichHome), true)}>{labels.zurichHome}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.arosa} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.arosa), true)}>{labels.arosa}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.vidy} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.vidy), true)}>{labels.vidy}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.basel} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.basel), true)}>{labels.basel}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.autumn_walk} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.autumn_walk), true)}>{labels.autumn_walk}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.piedmont} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.piedmont), true)}>{labels.piedmont}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.autumn_garden} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.autumn_garden), true)}>{labels.autumn_garden}</span>
            </Link>
          </div>

          <div className="flex">
            <Link to={paths.sean} className="flex-1 px-4 pt-2">
              <span className={getNavLinkClasses(isActive(paths.sean), true)}>{labels.sean}</span>
            </Link>
          </div>
        </div>
        <div className="flex-0 text-sm p-4 text-slate-500">© Chloe Ryder Photography</div>
      </div>
    </div>
  );
};
