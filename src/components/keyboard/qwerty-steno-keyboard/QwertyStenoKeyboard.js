import "./qwerty_steno_keyboard.css";
import QwertyStenoKey from "./QwertyStenoKey";
import {
    QWERTY_STENO_NUMBER_ROW_KEYS,
    QWERTY_STENO_TOP_ROW_KEYS,
    QWERTY_STENO_HOME_ROW_KEYS,
    QWERTY_STENO_BOTTOM_ROW_KEYS,
    QWERTY_STENO_CONTROL_ROW_KEYS,
} from "../../../constants";

function QwertyStenoKeyboad(props) {
    const { style } = props;
    const generateKeysRow = (keys) =>
        keys.map(
            ({ keyType, upperLetter, lowerLeftLetter, lowerLetter, keyId }) => (
                <QwertyStenoKey
                    keyType={keyType}
                    upperLetter={upperLetter}
                    lowerLetter={lowerLetter}
                    lowerLeftLetter={lowerLeftLetter}
                    keyId={keyId}
                />
            )
        );

    return (
        <div className="qwerty-steno-keyboard" style={style}>
            <div className="number-row">
                {generateKeysRow(QWERTY_STENO_NUMBER_ROW_KEYS)}
            </div>
            <div className="top-row">
                {generateKeysRow(QWERTY_STENO_TOP_ROW_KEYS)}
            </div>
            <div className="home-row">
                {generateKeysRow(QWERTY_STENO_HOME_ROW_KEYS)}
            </div>
            <div className="bottom-row">
                {generateKeysRow(QWERTY_STENO_BOTTOM_ROW_KEYS)}
            </div>
            <div className="control-row">
                {generateKeysRow(QWERTY_STENO_CONTROL_ROW_KEYS)}
            </div>
        </div>
    );
}

function setQwertyStenoKeyPressed(keyId, parentSelector = "") {
    const stenoKey = document.querySelector(
        `${parentSelector} .qwerty-steno-keyboard #${keyId}`
    );
    if (stenoKey !== null && !stenoKey.classList.contains("pressed")) {
        stenoKey.classList.add("pressed");
    }
}

function setQwertyStenoKeyWrongPressed(keyId, parentSelector = "") {
    const stenoKey = document.querySelector(
        `${parentSelector} .qwerty-steno-keyboard #${keyId}`
    );
    if (stenoKey !== null && !stenoKey.classList.contains("wrong-pressed")) {
        stenoKey.classList.add("wrong-pressed");
    }
}

function setQwertyStenoKeyUnpressed(keyId, parentSelector = "") {
    const stenoKey = document.querySelector(
        `${parentSelector} .qwerty-steno-keyboard #${keyId}`
    );
    if (stenoKey !== null) {
        stenoKey.classList.remove("pressed");
        stenoKey.classList.remove("wrong-pressed");
    }
}

export default QwertyStenoKeyboad;
export {
    setQwertyStenoKeyWrongPressed,
    setQwertyStenoKeyPressed,
    setQwertyStenoKeyUnpressed,
};