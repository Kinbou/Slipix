/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';

// create custom hook for set title page
export const useTitle = (title = '') => {
  const documentTitle = title === '' ? 'Slipix' : `${title} - Slipix`;
  useEffect(() => {
    document.title = documentTitle;
  });
};
