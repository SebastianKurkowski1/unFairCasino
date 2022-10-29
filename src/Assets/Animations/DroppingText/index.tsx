import {animated, useChain, useSpringRef, useSprings} from "react-spring";
import React from "react";

interface AnimationSettings {
    lettersDelay: number,
    word: string[],
    animationDelay: number,
}

export default function DroppingText(animationProps: AnimationSettings) {

    const textArray = animationProps.word;

    const from = {
        y: -2000,
        x: -300,
    }
    const to = {
        y: 0,
        x: 0,
    }


    const springRef = useSpringRef();

    const [props] = useSprings(textArray.length, i => ({
        ref: springRef,
        delay: animationProps.lettersDelay * i,
        to,
        from: from,
        config: {
            tension: 140,
            friction: 20,
            mass: 1.1,
        }
    }))

    useChain([springRef], [animationProps.animationDelay, 0])

    return (
        <div className={"flex flex-row"}>
            {props.map(({y, x}, i) => (
                <animated.div key={i} style={{y, x}}>
                    {textArray[i]}
                </animated.div>
            ))}
        </div>
    )
}