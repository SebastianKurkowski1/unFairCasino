import { animated, useSpring } from 'react-spring';
import './Styles/styles.scss';
import { useState } from 'react';

interface AnimationSettings {
  animationText: string,
  animationDelay: number,
  animationDuration: number,
}

export default function NeonText(
  { animationDelay, animationDuration, animationText }: AnimationSettings,
) {
  const [cancel, setCancel] = useState(true);
  const [divClass, setDivClass] = useState('neonText');

  setTimeout(() => {
    setCancel(false);
    setDivClass('');
  }, animationDelay);

  const styles = useSpring({
    loop: {
      reverse: true,
    },
    cancel,
    from: {
      textShadow: '0 0 2px #fff, 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #bc13fe,'
          + ' 0 0 45px #bc13fe, 0 0 55px #bc13fe, 0 0 70px #bc13fe, 0 0 80px #bc13fe',
    },
    to: {
      textShadow: '0 0 2px #fff, 0 0 3px #fff, 0 0 6px #fff, 0 0 7px #fff, 0 0 20px #bc13fe,'
          + ' 0 0 50px #bc13fe, 0 0 70px #bc13fe, 0 0 110px #bc13fe, 0 0 145px #bc13fe',
    },
    config: {
      duration: animationDuration,
    },

  });
  return (
    <animated.div className={divClass} style={styles}>{animationText}</animated.div>
  );
}
