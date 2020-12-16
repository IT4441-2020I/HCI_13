import StenoKeyboard from "../keyboard/steno-keyboard/StenoKeyboard";
import Hands from "../keyboard/Hands";
import StenoInput from "../keyboard/StenoInput";
import QwertyStenoKeyboad from "../keyboard/qwerty-steno-keyboard/QwertyStenoKeyboard";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { useRef } from "react";

function LessionPracticeContent(props) {
    const { hidePracticeContent } = props;
    const requireKeyRef = useRef();
    const pressedKeys = new Set();

    const handleKeyDown = (event) => {
        const { key } = event;
        pressedKeys.add(key);
        const pressedWord = [...pressedKeys].join("");
        event.target.value = pressedWord;
        if (pressedWord.toUpperCase() === requireKeyRef.current.innerText) {
            generateKey();
        }
    };

    const handleKeyUp = (event) => {
        const { key } = event;
        pressedKeys.delete(key);
        event.target.value = [...pressedKeys].join("");
    };

    const handleChange = (event) => {
        event.target.value = [...pressedKeys].join("");
    };

    const generateKey = () => {
        if (requireKeyRef.current.innerText === "S") {
            requireKeyRef.current.innerText = "K";
        } else {
            requireKeyRef.current.innerText = "S";
        }
    };

    return (
        <div className="lession-practice-wrapper">
            <button id="hide-practice-button" onClick={hidePracticeContent}>
                <MdArrowBack size="1.5em" />
                Quay lại bài học
            </button>
            <div ref={requireKeyRef} className="require-key">
                S
            </div>
            <button id="next-key" onClick={generateKey}>
                Phím khác
                <MdArrowForward size="20px" />
            </button>
            <StenoInput
                parentSelector=".lession-practice-wrapper"
                onKeyDownHook={handleKeyDown}
                onKeyUpHook={handleKeyUp}
                onChangeHook={handleChange}
            />
            <div className="keyboards">
                <QwertyStenoKeyboad style={{ fontSize: 12 }} />
                <StenoKeyboard style={{ fontSize: 18 }} />
            </div>
            <Hands />
        </div>
    );
}

export default LessionPracticeContent;
