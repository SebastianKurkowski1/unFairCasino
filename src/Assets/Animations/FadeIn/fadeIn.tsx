import { animated, useSpring, easings } from 'react-spring';
import React from 'react';

interface AnimationSettings {
  duration: number,
  animationDelay: number,
}

export default function FadeIn(animationProps: React.PropsWithChildren<AnimationSettings>) {
  const styles = useSpring({
    delay: animationProps.animationDelay,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: animationProps.duration,
      easing: easings.easeInBack,
    },
  });

  return (
    <animated.div style={styles}>
      {animationProps.children}
    </animated.div>
  );
}
