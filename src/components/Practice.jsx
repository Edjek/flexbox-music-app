import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import '../styles/Practice.css';

const Practice = () => {
    const { result, vinyl } = useContext(Context);

    const practice = useRef();
    const response = useRef();
    const submitBtn = useRef();
    const navigate = useNavigate();

    // // Clean string : without space, in lowercase, between : and ;
    let wash = (string) =>
        string.value
            .split(':')[1]
            .split(';')[0]
            .replace(/\s+/g, '')
            .toLowerCase();

    let flexEnd = (string) =>
        string.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes('justify-content:flex-end');

    let flexCenter = (string) =>
        string.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes('justify-content:center');

    // Prevent validation with animation
    let submit = (e) => {
        e.preventDefault();
        if (flexEnd(response.current)) {
            navigate('/page');
        } else {
            practice.current.classList.add('no');
            setTimeout(() => {
                practice.current.classList.remove('no');
            }, 1500);
        }
    };

    let responseInput = (e) => {
        if (e.target.value.includes(':')) {
            result.current.style.justifyContent = wash(e.target);

            if (flexEnd(e.target)) {
                vinyl.current.classList.add('play');
                submitBtn.current.classList.add('active');
                submitBtn.current.classList.add('okay');
                setTimeout(function () {
                    submitBtn.current.classList.remove('okay');
                }, 1500);
            } else if (flexCenter(e.target)) {
                return;
            } else {
                result.current.style.justifyContent = 'flex-start';
                submitBtn.current.classList.remove('active');
                vinyl.current.classList.remove('play');
            }
        }
    };
    return (
        <div className="practice" ref={practice}>
            <div className="aside">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
            </div>

            <form>
                <div className="response">
                    <p>#disquaire &#123;</p>
                    <p className="m2">display: flex;</p>
                    <textarea
                        name=""
                        id="response"
                        className="m2"
                        ref={response}
                        onInput={(e) => responseInput(e)}
                    ></textarea>
                    <p> &#125;</p>
                </div>
                <input
                    type="submit"
                    value="Suivant"
                    ref={submitBtn}
                    onClick={submit}
                />
            </form>
        </div>
    );
};

export default Practice;
