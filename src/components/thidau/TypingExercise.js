import { useRef, useState, useEffect } from "react";
import { WORDS } from "../../constants";

function TypingExercise(props) {
    const { gameStarted, setGameEnded } = props;
    const [isCorrect, setIsCorrect] = useState(new Array(WORDS.length));
    const currentWordIndex = useRef(0);
    const inputRef = useRef();

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

            if (currentWordIndex.current === WORDS.length) {
                setGameEnded(true);
            }
            event.target.value = "";
        }
    };

    useEffect(() => {
        if (inputRef.current !== null && gameStarted) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    }, [gameStarted]);

    return (
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
