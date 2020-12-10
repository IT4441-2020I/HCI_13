import "./steno_keyboard.css";
import StenoKey from "./StenoKey";

function StenoKeyboard() {
    const upperBankKeys = [
        { keyLetter: "S", keyId: "q" },
        { keyLetter: "K", keyId: "w" },
        { keyLetter: "R", keyId: "e" },
        { keyLetter: "N", keyId: "r" },
        { keyLetter: "H", keyId: "t" },
        { keyLetter: "*", keyId: "u" },
        { keyLetter: "W", keyId: "i" },
        { keyLetter: "J", keyId: "o" },
        { keyLetter: "N", keyId: "p" },
        { keyLetter: "T", keyId: "[" },
    ];
    const lowerBankKeys = [
        { keyLetter: "T", keyId: "a" },
        { keyLetter: "P", keyId: "s" },
        { keyLetter: "H", keyId: "d" },
        { keyLetter: "N", keyId: "f" },
        { keyLetter: "S", keyId: "g" },
        { keyLetter: "N", keyId: "j" },
        { keyLetter: "Y", keyId: "k" },
        { keyLetter: "J", keyId: "l" },
        { keyLetter: "F", keyId: ";" },
        { keyLetter: "K", keyId: "'" },
    ];
    const vowelKeys = [
        { keyLetter: "U", keyId: "c" },
        { keyLetter: "O", keyId: "v" },
        { keyLetter: "E", keyId: "n" },
        { keyLetter: "A", keyId: "m" },
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

function setStenoKeyPressed(keyId) {
    const stenoKey = document.querySelector(`.steno-keyboard #${keyId}`);
    if (stenoKey !== null && !stenoKey.classList.contains("pressed")) {
        stenoKey.classList.add("pressed");
    }
}

function setStenoKeyUnpressed(keyId) {
    const stenoKey = document.querySelector(`.steno-keyboard #${keyId}`);
    if (stenoKey !== null) {
        stenoKey.classList.remove("pressed");
    }
}

export default StenoKeyboard;
export { setStenoKeyPressed, setStenoKeyUnpressed };
