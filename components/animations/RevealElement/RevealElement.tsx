import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';

interface RevealElementProps {
    className?: string;
    delay?: number;
    children: React.ReactChild | React.ReactChild[];
}

const RevealElement = ({ className, delay, children, ...rest }: RevealElementProps, ref) => {
    const mergedClasses = cn('u-reveal-element', className);
    const revealElements = useRef(null);

    useEffect(() => {
        if (revealElements?.current) {
            gsap.to(revealElements.current, {
                scrollTrigger: {
                    trigger: revealElements.current || '',
                    start: 'top 95%',
                    // markers: true,
                },
                autoAlpha: 1,
                y: 0,
                duration: 1.2,
                delay: delay || 0,
                ease: 'power4.out',
            });
        }
    }, [delay, revealElements]);

    return (
        <div ref={revealElements} className={mergedClasses} {...rest}>
            {children}
        </div>
    );
};

export default RevealElement;
