import {
    setFingerPressed,
    setFingerWrongPressed,
    setFingerUnpressed,
} from "./Hands";
import {
    setStenoKeyWrongPressed,
    setStenoKeyUnpressed,
} from "./steno-keyboard/StenoKeyboard";
import {
    setQwertyStenoKeyWrongPressed,
    setQwertyStenoKeyUnpressed,
} from "./qwerty-steno-keyboard/QwertyStenoKeyboard";

function StenoInput(props) {
    let { parentSelector } = props;
    if (parentSelector === undefined) {
        parentSelector = "";
    }
    const pressedKeys = [];

    const handleKeyDown = (event) => {
        const { key, keyCode } = event;
        setStenoKeyWrongPressed(`key${keyCode}`, parentSelector);
        setQwertyStenoKeyWrongPressed(`key${keyCode}`, parentSelector);
        if (!pressedKeys.includes(key)) {
            pressedKeys.push(key);
            event.target.value = pressedKeys.join("");
        }
    };

    const handleKeyUp = (event) => {
        const { key, keyCode } = event;
        setStenoKeyUnpressed(`key${keyCode}`, parentSelector);
        setQwertyStenoKeyUnpressed(`key${keyCode}`, parentSelector);
        const keyIndex = pressedKeys.indexOf(key);
        if (keyIndex !== -1) {
            pressedKeys.splice(keyIndex, 1);
            event.target.value = pressedKeys.join("");
        }
    };

    const handleChange = (event) => {
        event.target.value = pressedKeys.join("");
    };

    return (
        <input
            type="text"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
        />
    );
}

export default StenoInput;
