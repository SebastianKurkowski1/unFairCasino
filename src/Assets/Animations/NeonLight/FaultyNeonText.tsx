import './Styles/styles.scss';
import {useState} from "react";

interface AnimationSettings {
    animationText: string,
    animationDelay: number,
    animationDuration: number,
}

export default function FaultyNeonText(animationProps: AnimationSettings) {
    const [divClass, setDivClass] = useState('neonText');

    setTimeout(() => {
        setDivClass('faultyNeonText');
    }, animationProps.animationDelay)

    return (
        <div className={divClass}>{animationProps.animationText}</div>
    )
}