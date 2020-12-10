import "./steno_keyboard.css";
import StenoKey from "./StenoKey";

function StenoKeyboard() {
    const upperBankKeys = [
        { keyLetter: "S", keyId: "key81" },
        { keyLetter: "K", keyId: "key87" },
        { keyLetter: "R", keyId: "key69" },
        { keyLetter: "N", keyId: "key82" },
        { keyLetter: "H", keyId: "key84" },
        { keyLetter: "*", keyId: "key85" },
        { keyLetter: "W", keyId: "key73" },
        { keyLetter: "J", keyId: "key79" },
        { keyLetter: "N", keyId: "key80" },
        { keyLetter: "T", keyId: "key219" },
    ];
    const lowerBankKeys = [
        { keyLetter: "T", keyId: "key65" },
        { keyLetter: "P", keyId: "key83" },
        { keyLetter: "H", keyId: "key68" },
        { keyLetter: "N", keyId: "key70" },
        { keyLetter: "S", keyId: "key71" },
        { keyLetter: "N", keyId: "key74" },
        { keyLetter: "Y", keyId: "key75" },
        { keyLetter: "J", keyId: "key76" },
        { keyLetter: "F", keyId: "key59" },
        { keyLetter: "K", keyId: "key222" },
    ];
    const vowelKeys = [
        { keyLetter: "U", keyId: "key67" },
        { keyLetter: "O", keyId: "key86" },
        { keyLetter: "E", keyId: "key78" },
        { keyLetter: "A", keyId: "key77" },
    ];
    return (
        <div className="steno-keyboard">
            <div className="upper-bank">
                {upperBankKeys.map(({ keyLetter, keyId }) => (
                    <StenoKey key={keyId} keyLetter={keyLetter} keyId={keyId} />
                ))}
            </div>
            <div className="lower-bank">
                {lowerBankKeys.map(({ keyLetter, keyId }) => (
                    <StenoKey key={keyId} keyLetter={keyLetter} keyId={keyId} />
                ))}
            </div>
            <div className="steno-vowel-keys">
                {vowelKeys.map(({ keyLetter, keyId }) => (
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
