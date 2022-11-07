import './Styles/styles.scss';
import { useState } from 'react';

interface AnimationSettings {
  animationText: string,
  animationDelay: number,
  animationDuration: number,
}

export default function FaultyNeonText(animationProps: AnimationSettings) {
  const [divClass, setDivClass] = useState('neonText');

  const { animationDelay, animationText } = animationProps;
  setTimeout(() => {
    setDivClass('faultyNeonText');
  }, animationDelay);

  return (
    <div className={divClass}>{animationText}</div>
  );
}
