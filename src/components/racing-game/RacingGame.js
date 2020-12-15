import "./racing_game.css";
import Street from "../racing-game/Street";
import Player from "../racing-game/Player";
import GameStartWating from "../racing-game/GameStartWaiting";

function RacingGame(props) {
    const { gameStarted, gameEnded } = props;
    return (
        <div className="racing-game-container shadow">
            {!gameStarted && <GameStartWating />}
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
    );
}

export default RacingGame;
