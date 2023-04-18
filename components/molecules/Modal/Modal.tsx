import { useRef, useEffect, useState, useCallback, ReactNode } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { gsap } from 'gsap';
import Button from '@atoms/Button';
import Portal from '@atoms/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    name?: string;
    opened: boolean;
    maxWidth?: number;
    isFullScreen?: boolean;
    button?: string;
    close?: (state: boolean) => void;
    children: ReactNode;
}

const Modal = ({ opened, maxWidth = null, button = 'close', close, children }: ModalProps) => {
    const element = useRef<null | HTMLDivElement>(null);
    const inner = useRef<null | HTMLDivElement>(null);

    const [isOpened, setOpened] = useState(false);
    const [timeline, setTimeline] = useState(null);

    useEffect(() => {
        if (element?.current && inner?.current) {
            const tl = gsap.timeline({
                paused: true,
            });

            tl.add('start')
                .fromTo(
                    element.current,
                    {
                        autoAlpha: 0,
                    },
                    {
                        duration: 0.2,
                        autoAlpha: 1,
                        onStart: () => setOpened(true),
                        onReverseComplete: () => setOpened(false),
                    },
                    'start'
                )
                .fromTo(
                    inner.current,
                    {
                        scale: 0.9,
                    },
                    {
                        scale: 1,
                        duration: 0.5,
                        ease: 'expo.out',
                    },
                    'start'
                );

            setTimeline(tl);

            return () => {
                tl.kill();
            };
        }
    }, [element, inner, setTimeline, setOpened]);

    useEffect(() => {
        if (timeline && element?.current) {
            if (opened) {
                disableBodyScroll(element.current, {
                    reserveScrollBarGap: true,
                });
                timeline?.timeScale(1)?.play();
            } else {
                clearAllBodyScrollLocks();
                timeline?.timeScale(2)?.reverse();
            }
        }
    }, [opened, timeline, element]);

    const toClose = useCallback(
        state => {
            if (close && typeof close === 'function' && opened) close(state);
        },
        [close, opened]
    );

    return (
        <div ref={element} aria-hidden={!isOpened} className={styles.main}>
            <div ref={inner} className={styles.inner}>
                {isOpened && (
                    <div className={styles.container} style={{ maxWidth }}>
                        <div className={styles.btn}>
                            <Button label={button} onClick={() => toClose(false)} />
                        </div>
                        <div className={styles.containerInner}>{children}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ModalWithPortal = ({
    name = 'modal',
    opened,
    maxWidth = null,
    button = 'close',
    close,
    children,
}: ModalProps) => (
    <Portal name={name}>
        <Modal opened={opened} close={close} maxWidth={maxWidth} button={button}>
            {children}
        </Modal>
    </Portal>
);

export default ModalWithPortal;
