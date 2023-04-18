import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';

interface FadeElementProps {
    className?: string;
    delay?: number;
    children: React.ReactChild | React.ReactChild[];
}

const FadeElement = ({ className, delay, children, ...rest }: FadeElementProps) => {
    const mergedClasses = cn('u-fade-element', className);
    const fadeElement = useRef(null);

    useEffect(() => {
        if (fadeElement?.current) {
            gsap.to(fadeElement.current, {
                scrollTrigger: {
                    trigger: fadeElement.current || '',
                    start: 'top 95%',
                    // markers: true,
                },
                autoAlpha: 1,
                duration: 1.2,
                delay: delay || 0,
                ease: 'power4.out',
            });
        }
    }, [delay, fadeElement]);

    return (
        <div ref={fadeElement} className={mergedClasses} {...rest}>
            {children}
        </div>
    );
};

export default FadeElement;
