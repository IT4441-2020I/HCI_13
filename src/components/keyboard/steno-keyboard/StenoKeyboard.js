import "./steno_keyboard.css";
import StenoKey from "./StenoKey";
import {
    UPPER_BANK_KEYS,
    LOWER_BANK_KEYS,
    VOWEL_KEYS,
} from "../../../constants";

function StenoKeyboard(props) {
    const { style } = props;
    return (
        <div className="steno-keyboard" style={style}>
            <div className="upper-bank">
                {UPPER_BANK_KEYS.map(({ keyLetter, keyId }) => (
                    <StenoKey key={keyId} keyLetter={keyLetter} keyId={keyId} />
                ))}
            </div>
            <div className="lower-bank">
                {LOWER_BANK_KEYS.map(({ keyLetter, keyId }) => (
                    <StenoKey key={keyId} keyLetter={keyLetter} keyId={keyId} />
                ))}
            </div>
            <div className="steno-vowel-keys">
                {VOWEL_KEYS.map(({ keyLetter, keyId }) => (
                    <StenoKey key={keyId} keyLetter={keyLetter} keyId={keyId} />
                ))}
            </div>
        </div>
    );
}

function setStenoKeyPressed(keyId, parentSelector = "") {
    const stenoKey = document.querySelector(
        `${parentSelector} .steno-keyboard #${keyId}`
    );
    if (stenoKey !== null && !stenoKey.classList.contains("pressed")) {
        stenoKey.classList.add("pressed");
    }
}

function setStenoKeyWrongPressed(keyId, parentSelector = "") {
    const stenoKey = document.querySelector(
        `${parentSelector} .steno-keyboard #${keyId}`
    );
    if (stenoKey !== null && !stenoKey.classList.contains("wrong-pressed")) {
        stenoKey.classList.add("wrong-pressed");
    }
}

function setStenoKeyUnpressed(keyId, parentSelector = "") {
    const stenoKey = document.querySelector(
        `${parentSelector} .steno-keyboard #${keyId}`
    );
    if (stenoKey !== null) {
        stenoKey.classList.remove("pressed");
        stenoKey.classList.remove("wrong-pressed");
    }
}

export default StenoKeyboard;
export { setStenoKeyPressed, setStenoKeyWrongPressed, setStenoKeyUnpressed };
