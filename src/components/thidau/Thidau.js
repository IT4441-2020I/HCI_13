import Street from "../racing-game/Street";
import Player from "../racing-game/Player";
import "./thidau.css";
import { useEffect, useRef, useState } from "react";
import { WORDS } from "../../constants";

function Thidau() {
    const minuteRef = useRef();
    const secondRef = useRef();
    const [gameStarted, setGameStarted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(new Array(WORDS.length));
    const currentWordIndex = useRef(0);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setGameStarted(true);
        }, 3000);
        return () => {
            clearTimeout(timeOutId);
        };
    }, []);

    useEffect(() => {
        if (gameStarted) {
            const timerLoopId = setInterval(() => {
                const minute = parseInt(minuteRef.current.innerText);
                const second = parseInt(secondRef.current.innerText);

                if (second === 59) {
                    secondRef.current.innerText = "00";
                    minuteRef.current.innerText = minute + 1;
                } else if (second < 9) {
                    secondRef.current.innerText = `0${second + 1}`;
                } else {
                    secondRef.current.innerText = second + 1;
                }
            }, 1000);
            return () => {
                clearInterval(timerLoopId);
            };
        }
    }, [gameStarted]);

    const handleChange = (event) => {
        const { value } = event.target;
        if (value.endsWith(" ")) {
            const index = currentWordIndex.current;
            if (index < WORDS.length) {
                if (value.trim() === WORDS[index]) {
                    setIsCorrect((isCorrect) => {
                        const newIsCorrect = [...isCorrect];
                        newIsCorrect[index] = "true";
                        return newIsCorrect;
                    });
                } else {
                    setIsCorrect((isCorrect) => {
                        const newIsCorrect = [...isCorrect];
                        newIsCorrect[index] = "false";
                        return newIsCorrect;
                    });
                }
                ++currentWordIndex.current;
            }
            event.target.value = "";
        }
    };

    return (
        <>
            <div className="racing-game-container shadow">
                <Street />
                <div className="players-wrapper">
                    <Player playerName={"Love Hust"} />
                    <Player playerName={"Niar"} />
                    <Player isMainPlayer={true} playerName={"You"} />
                    <Player playerName={"Nguyen Van"} />
                    <Player playerName={"Two Steps From Hell"} />
                </div>
            </div>
            <div className="exercise-container shadow">
                <p className="exercise">
                    {WORDS.map((word, index) => (
                        <span
                            className={
                                isCorrect[index] !== undefined
                                    ? isCorrect[index]
                                    : ""
                            }
                            key={index}
                        >{`${word} `}</span>
                    ))}
                </p>
                <input className="exercise-input" onChange={handleChange} />
            </div>
            <div className="timer shadow">
                <span ref={minuteRef} className="minute">
                    0
                </span>
                <span>:</span>
                <span ref={secondRef} className="second">
                    00
                </span>
            </div>
        </>
    );
}

export default Thidau;
