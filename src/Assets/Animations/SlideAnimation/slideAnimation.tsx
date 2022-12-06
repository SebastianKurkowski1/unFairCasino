import { animated, useSpring } from 'react-spring';
import React from 'react';

interface AnimationSettings {
  fromX: number,
  toX: number,
  fromY: number,
  toY: number,
  animationDelay: number,
}

export default function SlideAnimation({
  animationDelay,
  children,
  fromX,
  fromY,
  toX,
  toY,
}: React.PropsWithChildren<AnimationSettings>) {
  const styles = useSpring({
    delay: animationDelay,
    from: {
      x: fromX,
      y: fromY,
    },
    to: {
      x: toX,
      y: toY,
    },
    config: {
      tension: 10,
      friction: 10,
      mass: 2.1,
    },
  });

  return (
    <animated.div style={styles}>
      {children}
    </animated.div>
  );
}
