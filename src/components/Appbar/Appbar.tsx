import type React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { paths, labels, getNavLinkClasses } from '@/routes/navigationPaths';
import { MenuIcon, XIcon } from 'lucide-react';

export const Appbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string): boolean => location.pathname === path;
  const isMomentsActive = (): boolean => location.pathname.startsWith(paths.moments);

  return (
    <div className="relative md:hidden lg:hidden">
      <div className="flex justify-between items-center p-4 bg-stone-50 shadow-md z-10">
        <span className="font-bold">Chloe Ryder Photography</span>
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-stone-50 shadow-lg z-20 pb-4">
          <div className="flex flex-col">
            <Link to={paths.home} className="px-4 py-2" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.home))}>{labels.home}</span>
            </Link>

            <Link to={paths.gruyeres} className="px-4 py-2" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isMomentsActive())}>{labels.moments}</span>
            </Link>

            <Link to={paths.gruyeres} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.gruyeres), true)}>{labels.gruyeres}</span>
            </Link>

            <Link to={paths.lausanne} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.lausanne), true)}>{labels.lausanne}</span>
            </Link>

            <Link to={paths.lavaux} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.lavaux), true)}>{labels.lavaux}</span>
            </Link>

            <Link to={paths.zurich} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.zurich), true)}>{labels.zurich}</span>
            </Link>

            <Link to={paths.zurichHome} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.zurichHome), true)}>{labels.zurichHome}</span>
            </Link>

            <Link to={paths.arosa} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.arosa), true)}>{labels.arosa}</span>
            </Link>

            <Link to={paths.vidy} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.vidy), true)}>{labels.vidy}</span>
            </Link>

            <Link to={paths.basel} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.basel), true)}>{labels.basel}</span>
            </Link>

            <Link to={paths.autumn_walk} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.autumn_walk), true)}>{labels.autumn_walk}</span>
            </Link>

            <Link to={paths.piedmont} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.piedmont), true)}>{labels.piedmont}</span>
            </Link>

            <Link to={paths.autumn_garden} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.autumn_garden), true)}>{labels.autumn_garden}</span>
            </Link>

            <Link to={paths.sean} className="px-4 py-2 ml-4" onClick={toggleMenu}>
              <span className={getNavLinkClasses(isActive(paths.sean), true)}>{labels.sean}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
