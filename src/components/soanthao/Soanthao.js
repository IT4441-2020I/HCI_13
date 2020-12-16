import "./soanthao.css";
import StenoInput from "../keyboard/StenoInput";
import QwertyStenoKeyboard from "../keyboard/qwerty-steno-keyboard/QwertyStenoKeyboard";
import StenoKeyboard from "../keyboard/steno-keyboard/StenoKeyboard";
import { MdContentCopy } from "react-icons/md";

function Soanthao() {
    const copyToClipboard = () => {
        const inputField = document.querySelector(
            ".soanthao .input-area textarea"
        );
        if (inputField !== null) {
            inputField.select();
            document.execCommand("copy");
        }
    };

    return (
        <div className="soanthao">
            <div className="input-area">
                <StenoInput type={"textarea"} />
                <MdContentCopy size="2.5em" onClick={copyToClipboard} />
            </div>
            <div className="keyboards">
                <QwertyStenoKeyboard style={{ fontSize: 14 }} />
                <StenoKeyboard style={{ fontSize: 18 }} />
            </div>
        </div>
    );
}

export default Soanthao;
