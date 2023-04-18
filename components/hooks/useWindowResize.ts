import { useEffect } from 'react';

const useWindowResize = func => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', func);

            return () => {
                window.removeEventListener('resize', func);
            };
        }
    }, [func]);

    return null;
};

export default useWindowResize;
