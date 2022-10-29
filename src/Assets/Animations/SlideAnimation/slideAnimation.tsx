import {animated, useSpring} from "react-spring";
import React from "react";

interface AnimationSettings {
    fromX: number,
    toX: number,
    fromY: number,
    toY: number,
    animationDelay: number,
}

export default function SlideAnimation(animationProps: React.PropsWithChildren<AnimationSettings>){

    const styles = useSpring({
        delay: animationProps.animationDelay,
        from: {
            x: animationProps.fromX,
            y: animationProps.fromY,
        },
        to: {
            x: animationProps.toX,
            y: animationProps.toY,
        },
        config: {
            tension: 10,
            friction: 10,
            mass: 2.1,
        }
    })


    return (
        <animated.div style={styles}>
            {animationProps.children}
        </animated.div>
    );
}