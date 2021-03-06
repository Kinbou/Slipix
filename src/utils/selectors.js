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

// Dynamic label
export const labelClassname = (input) => {
  if (input !== null) {
    if (typeof input === 'number') {
      return classNames({ 'label--active': input > 0 });
    }
    return classNames({ 'label--active': input.length > 0 });
  }
  return input;
};

// Format date : dd/mm/yyyy à hh/mm
export const formatDate = (date, dateOnly = false) => {
  if (date === null || date === '') {
    return '';
  }

  const newDate = new Date(date);

  if (dateOnly) {
    return `${(`0${newDate.getDate()}`).slice(-2)}/${(`0${newDate.getMonth() + 1}`).slice(-2)}/${newDate.getFullYear()}`;
  }

  return `${(`0${newDate.getDate()}`).slice(-2)}/${(`0${newDate.getMonth() + 1}`).slice(-2)}/${newDate.getFullYear()} à ${(`0${newDate.getHours()}`).slice(-2)}h${(`0${newDate.getMinutes()}`).slice(-2)}`;
};

export const validEmail = (data) => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(data).toLowerCase())) {
    return false;
  }
  return true;
};

export const urlBack = 'https://backend.slipix-progresser-sur-league-of-legends.fr';
export const urlLocal = 'http://localhost:8000';

export const useResolution = () => {
  const screenWidth = window.screen.width;
  if (screenWidth > 3400) {
    return '4k';
  }
  if (screenWidth > 2000) {
    return '2k';
  }
  if (screenWidth > 1024) {
    return 'standard';
  }
  if (screenWidth > 600) {
    return 'tablette';
  }
  return 'phone';
};
