import slugify from 'react-slugify';
import classNames from 'classnames';

export const slugifyName = (name) => slugify(name, {
  lower: true,
});

// pipe = barre verticale
// Créer plusieurs string (tableau) à chaque |
export const pipe = (data) => {
  const pipes = data.split('|');
  return pipes;
};

// Créer plusieurs string (tableau) à chaque -
export const hyphen = (data) => {
  const hyphenn = data.split('-');
  return hyphenn;
};

// export const maj = (data) => {
//   const test = strUcFirst(data);
// };

// Dynamic label
export const labelClassname = (input) => {
  if (input !== null) {
    if (typeof input === 'number') {
      return classNames('global-label', { 'global-label--active': input > 0 });
    }
    return classNames('global-label', { 'global-label--active': input.length > 0 });
  }
  return input;
};
