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
    let { parentSelector, onKeyDownHook, onKeyUpHook } = props;
    if (parentSelector === undefined) {
        parentSelector = "";
    }

    const handleKeyDown = (event) => {
        const { keyCode } = event;
        setStenoKeyWrongPressed(`key${keyCode}`, parentSelector);
        setQwertyStenoKeyWrongPressed(`key${keyCode}`, parentSelector);

        if (typeof onKeyDownHook === "function") {
            onKeyDownHook(event);
        }
    };

    const handleKeyUp = (event) => {
        const { keyCode } = event;
        setStenoKeyUnpressed(`key${keyCode}`, parentSelector);
        setQwertyStenoKeyUnpressed(`key${keyCode}`, parentSelector);

        if (typeof onKeyUpHook === "function") {
            onKeyUpHook(event);
        }
    };

    return (
        <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
    );
}

export default StenoInput;
