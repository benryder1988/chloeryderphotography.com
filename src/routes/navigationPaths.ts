// src/navigationPaths.ts

export const paths = {
  home: '/',
  moments: '/moments',
  lausanne: '/moments/the_lausanne_edition',
  zurichHome: '/moments/the_zurich_home_edition',
  zurich: '/moments/the_zurich_edition',
  gruyeres: '/moments/the_gruyeres_edition',
  lavaux: '/moments/the_lavaux_edition',
  arosa: '/moments/the_arosa_edition',
  vidy: '/moments/the_vidy_edition',
  basel: '/moments/the_basel_edition',
  autumn_walk: '/moments/the_autumn_walk_edition',
  piedmont: '/moments/the_piedmont_edition',
  autumn_garden: '/moments/the_autumn_garden_edition',
  sean: '/moments/the_kung_fu_edition',
};

export const labels = {
  home: 'Home',
  moments: 'Moments',
  lausanne: 'Lausanne',
  zurichHome: 'Home in Zurich',
  zurich: 'Zurich',
  gruyeres: 'Gruyères',
  lavaux: 'The Lavaux',
  arosa: 'Arosa',
  vidy: 'Vidy',
  basel: 'Basel',
  autumn_walk: 'An Autumn Walk',
  piedmont: 'Piedmont',
  autumn_garden: 'The Autumn Garden',
  sean: 'Kung Fu Portraits',
};

export const getNavLinkClasses = (isActive: boolean, isChild = false): string => {
  return `${isActive ? 'font-bold' : 'font-thin'} ${isChild ? 'text-sm ml-4' : ''}`;
};
