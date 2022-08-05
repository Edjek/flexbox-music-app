import React, { useContext, useEffect, useRef } from 'react';
import Context from '../Context';
import '../styles/Result.css';
import vinyle from '../assets/img/vinyle.png';
import musicalNote from '../assets/img/music-note.png';

const Result = () => {
    const result = useRef();
    const vinyl = useRef();
    const { setResult, setVinyl } = useContext(Context);

    useEffect(() => {
        setResult(result);
        setVinyl(vinyl);
    }, []);

    return (
        <div className="result" ref={result}>
            <div className="vinyl" ref={vinyl}>
                <img src={vinyle} alt="un vinyle" className="img-vinyl" />
                <img
                    src={musicalNote}
                    alt="note de musique"
                    className="img-note"
                />
                <img
                    src={musicalNote}
                    alt="note de musique"
                    className="img-note"
                />
                <img
                    src={musicalNote}
                    alt="note de musique"
                    className="img-note"
                />
            </div>
        </div>
    );
};

export default Result;
