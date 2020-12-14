import turtleImage from "../../static/images/turtle-race.jpg";
import { useEffect, useRef } from "react";

export default function Player(props) {
    const playerRef = useRef();
    const { isMainPlayer, playerName, gameEnded } = props;

    useEffect(() => {
        if (playerRef.current !== null) {
            playerRef.current.style.transform = `translateX(300px)`;
        }

        const movePlayer = (newPos) => {
            playerRef.current.style.transform = `translateX(${newPos}px)`;
        };

        const gameLoop = () => {
            const offset = getRandomInteger(-300, 1500);
            movePlayer(offset);
        };

        if (!isMainPlayer && !gameEnded) {
            const loopId = setInterval(gameLoop, 5000);
            return () => clearInterval(loopId);
        }
    }, [isMainPlayer, gameEnded]);

    return (
        <div
            ref={playerRef}
            className={`player ${isMainPlayer ? "main-player" : ""}`}
        >
            <img src={turtleImage} alt="player" />
            <span className="player-name">{playerName}</span>
        </div>
    );
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
