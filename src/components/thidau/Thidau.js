import "./thidau.css";
import { useEffect, useRef, useState } from "react";
import Street from "../racing-game/Street";
import Player from "../racing-game/Player";
import TypingExercise from "./TypingExercise";
import Result from "./Result";

function Thidau() {
    const minuteRef = useRef();
    const secondRef = useRef();
    const [gameStarted, setGameStarted] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        if (!gameStarted) {
            const timeOutId = setTimeout(() => {
                setGameStarted(true);
            }, 3000);
            return () => {
                clearTimeout(timeOutId);
            };
        }
    }, []);

    useEffect(() => {
        if (gameStarted && !gameEnded) {
            const timerLoopId = setInterval(() => {
                const minute = parseInt(minuteRef.current.innerText);
                const second = parseInt(secondRef.current.innerText);

                if (minuteRef.current !== null && secondRef.current !== null) {
                    if (second === 59) {
                        secondRef.current.innerText = "00";
                        minuteRef.current.innerText = minute + 1;
                    } else if (second < 9) {
                        secondRef.current.innerText = `0${second + 1}`;
                    } else {
                        secondRef.current.innerText = second + 1;
                    }
                }
            }, 1000);
            return () => {
                clearInterval(timerLoopId);
            };
        }
    }, [gameStarted, gameEnded]);

    const restartGame = () => {
        window.location.reload();
    };

    return (
        <>
            <div className="racing-game-container shadow">
                <Street />
                <div className="players-wrapper">
                    <Player playerName={"Love Hust"} gameEnded={gameEnded} />
                    <Player playerName={"Niar"} gameEnded={gameEnded} />
                    <Player
                        isMainPlayer={true}
                        playerName={"You"}
                        gameEnded={gameEnded}
                    />
                    <Player playerName={"Nguyen Van"} gameEnded={gameEnded} />
                    <Player
                        playerName={"Two Steps From Hell"}
                        gameEnded={gameEnded}
                    />
                </div>
            </div>
            <TypingExercise
                gameStarted={gameStarted}
                setGameEnded={setGameEnded}
            />
            <div className="timer shadow">
                <span ref={minuteRef} className="minute">
                    0
                </span>
                <span>:</span>
                <span ref={secondRef} className="second">
                    00
                </span>
            </div>
            {gameEnded && <Result restartGame={restartGame} />}
        </>
    );
}

export default Thidau;
