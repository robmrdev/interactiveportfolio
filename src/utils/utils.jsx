import React from "react";
import { useState } from 'react';

const waveEffect = (text) => {
    const [animationStarted, setAnimationStarted] = useState(false);
    const [key, setkey] = useState(0)
    let keys = 0
    const startAnimation = () => {
        setAnimationStarted(true);
        setkey(keys += 1)
    };
    const words = text.split(' ');
    let indexCounter = 0;
    const component =
        <h2 className={`sectionTitle contactTitle ${animationStarted ? 'animationStarted' : ''}`}
            onMouseEnter={startAnimation}
            key={key}>
            {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    {wordIndex > 0 && <span className="wordSpace">&nbsp;</span>}
                    <div className='contactWord'>
                        {word.split('').map((letter, letterIndex) => {
                            indexCounter += 1;
                            return (
                                <div
                                    key={letterIndex}
                                    className='designCharacter'
                                    style={{
                                        animationDelay: `${0.02 * indexCounter}s`
                                    }}
                                >
                                    {letter === ' ' ? '\u00A0' : letter}
                                </div>
                            );
                        })}
                    </div>
                </React.Fragment>
            ))}
        </h2>
    return component
}

export {
    waveEffect
}