import { ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";

function GameStartWating() {
    const [progress, setProgress] = useState(100);
    useEffect(() => {
        setProgress(0);
    }, []);
    return (
        <div className="waiting">
            <ProgressBar striped animated now={progress} label="Bắt đầu" />
        </div>
    );
}

export default GameStartWating;
