import { useEffect } from 'react';

export default function useClickOutside(elRef: any, callback: any) {
  useEffect(() => {
    const listener = (e: any) => {
      if (!elRef?.current || !elRef?.current?.contains(e.target)) {
        callback(e);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [callback, elRef]);
}
