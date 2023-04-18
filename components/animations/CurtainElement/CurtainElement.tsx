import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';

interface CurtainElementProps {
    className?: string;
    delay?: number;
    duration?: number;
    children: React.ReactChild | React.ReactChild[];
}

const CurtainElement = ({ className, delay, duration, children, ...rest }: CurtainElementProps) => {
    const mergedClasses = cn('u-curtain-element', className);
    const curtainElement = useRef(null);

    useEffect(() => {
        if (curtainElement?.current) {
            gsap.to(curtainElement.current, {
                scrollTrigger: {
                    trigger: curtainElement.current || '',
                    start: 'top 95%',
                    // markers: true,
                },
                scaleX: 1,
                duration: duration || 1.2,
                delay: delay || 0,
                ease: 'power4.inOut',
            });
        }
    }, [delay, curtainElement, duration]);

    return (
        <div ref={curtainElement} className={mergedClasses} {...rest}>
            {children}
        </div>
    );
};

export default CurtainElement;
