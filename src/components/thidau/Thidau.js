import "./thidau.css";
import { useEffect, useRef, useState } from "react";
import TypingExercise from "./TypingExercise";
import Result from "./Result";
import RacingGame from "../racing-game/RacingGame";
import FindingPlayers from "./FindingPlayers";

function Thidau() {
    const minuteRef = useRef();
    const secondRef = useRef();
    const [findingPlayers, setFindingPlayers] = useState(true);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);

    // useEffect(() => {
    //     const timeOutId = setTimeout(() => {
    //         setFindingPlayers(false);
    //     }, 5000);
    //
    //     return () => {
    //         clearTimeout(timeOutId);
    //     };
    // }, []);

    useEffect(() => {
        if (!findingPlayers) {
            const timeOutId = setTimeout(() => {
                setGameStarted(true);
            }, 5000);
            return () => {
                clearTimeout(timeOutId);
            };
        }
    }, [findingPlayers]);

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
            {findingPlayers ? (
                <FindingPlayers setFindingPlayers={setFindingPlayers} />
            ) : (
                <>
                    <RacingGame
                        gameStarted={gameStarted}
                        gameEnded={gameEnded}
                    />{" "}
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
            )}
        </>
    );
}

export default Thidau;
