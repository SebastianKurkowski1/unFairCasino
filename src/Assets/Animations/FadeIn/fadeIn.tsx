import { animated, useSpring, easings } from 'react-spring';
import React from 'react';

interface AnimationSettings {
  duration: number,
  animationDelay: number,
}

export default function FadeIn(
  { animationDelay, children, duration }: React.PropsWithChildren<AnimationSettings>,
) {
  const styles = useSpring({
    delay: animationDelay,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration,
      easing: easings.easeInBack,
    },
  });

  return (
    <animated.div style={styles}>
      {children}
    </animated.div>
  );
}
