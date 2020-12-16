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
import { useRef, useEffect } from "react";

function StenoInput(props) {
    const inputRef = useRef();
    let { parentSelector, onKeyDownHook, onKeyUpHook, onChangeHook } = props;
    if (parentSelector === undefined) {
        parentSelector = "";
    }

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    });

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
    };

    return (
        <input
            ref={inputRef}
            type="text"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            style={{ width: "100%", fontSize: "1.5rem" }}
            
        />
    );
}

export default StenoInput;
