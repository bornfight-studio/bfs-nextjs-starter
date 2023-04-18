import { useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface useAccordionProps {
    wrapper: {
        current: HTMLDivElement;
    };
    inner: {
        current: HTMLDivElement;
    };
}

const useAccordion = ({ wrapper, inner }: useAccordionProps) => {
    const [opened, setOpened] = useState<boolean>(false);

    const close = useCallback(() => {
        if (inner?.current && wrapper?.current) {
            gsap.to(inner.current, {
                autoAlpha: 0,
            });

            gsap.to(wrapper.current, {
                height: 0,
                duration: 0.6,
                delay: 0.1,
                ease: 'expo.inOut',
                onComplete: () => ScrollTrigger.refresh(),
            });
        }
    }, [inner, wrapper]);

    const open = useCallback(() => {
        if (inner?.current && wrapper?.current) {
            const height = wrapper.current.scrollHeight;
            gsap.to(wrapper.current, {
                height: height,
                duration: 0.6,
                ease: 'expo.inOut',
                onStart: () => {
                    if (wrapper) {
                        wrapper.current.style.height = 'auto';
                        if (inner) {
                            gsap.to(inner.current, {
                                autoAlpha: 1,
                                delay: 0.2,
                            });
                        }
                    }
                },
                onComplete: () => {
                    gsap.set(wrapper.current, {
                        height: 'auto',
                    });
                    ScrollTrigger.refresh();
                },
            });
        }
    }, [wrapper, inner]);

    const toggle = useCallback(() => {
        opened ? close() : open();
        setOpened(!opened);
    }, [opened, setOpened, open, close]);

    return {
        accordionOpened: opened,
        accordionToggle: toggle,
        accordionClose: close,
        accordionOpen: open,
    };
};

export default useAccordion;
