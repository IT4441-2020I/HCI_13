import { useRef, useState, useEffect } from "react";
import { WORDS } from "../../constants";

function TypingExercise(props) {
    const { gameStarted, setGameEnded } = props;
    const [wordsStatus, setWordsStatus] = useState(new Array(WORDS.length));
    const currentWordIndex = useRef(0);
    const inputRef = useRef();

    const updateWordStatus = (status, index) => {
        setWordsStatus((wordsStatus) => {
            const newWordsStatus = [...wordsStatus];
            newWordsStatus[index] = status;
            return newWordsStatus;
        });
    };

    const handleChange = (event) => {
        const { value } = event.target;
        if (value.endsWith(" ")) {
            const index = currentWordIndex.current;
            if (index < WORDS.length) {
                if (value.trim() === WORDS[index]) {
                    updateWordStatus("true", index);
                } else {
                    updateWordStatus("false", index);
                }
            }

            if (currentWordIndex.current === WORDS.length - 1) {
                setGameEnded(true);
            } else {
                ++currentWordIndex.current;
                updateWordStatus("current", currentWordIndex.current);
            }
            event.target.value = "";
        }
    };

    useEffect(() => {
        if (inputRef.current !== null && gameStarted) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
            updateWordStatus("current", 0);
        }
    }, [gameStarted]);

    return (
        <div className="exercise-container shadow">
            <p className="exercise">
                {WORDS.map((word, index) => (
                    <span
                        className={
                            wordsStatus[index] !== undefined
                                ? wordsStatus[index]
                                : ""
                        }
                        key={index}
                    >{`${word} `}</span>
                ))}
            </p>
            <input
                ref={inputRef}
                className="exercise-input"
                onChange={handleChange}
                disabled
            />
        </div>
    );
}

export default TypingExercise;
