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
    let { parentSelector, onKeyDownHook, onKeyUpHook, onChangeHook } = props;
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

    const handleChange = (event) => {
        if (typeof onChangeHook === "function") {
            onChangeHook(event);
        }
    }

    return (
        <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onChange={handleChange} />
    );
}

export default StenoInput;