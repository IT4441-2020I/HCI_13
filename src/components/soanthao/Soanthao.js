import "./soanthao.css";
import StenoInput from "../keyboard/StenoInput";
import QwertyStenoKeyboard from "../keyboard/qwerty-steno-keyboard/QwertyStenoKeyboard";
import StenoKeyboard from "../keyboard/steno-keyboard/StenoKeyboard";
import { MdContentCopy, MdCheckCircle } from "react-icons/md";
import { Toast, ToastBody } from "react-bootstrap";
import { useState } from "react";

function Soanthao() {
    const [toastShow, setToastShow] = useState(false);

    const copyToClipboard = () => {
        const inputField = document.querySelector(
            ".soanthao .input-area textarea"
        );
        if (inputField !== null) {
            inputField.select();
            document.execCommand("copy");
        }
        setToastShow(true);
    };

    return (
        <div className="soanthao">
            <div className="input-area">
                <StenoInput type={"textarea"} />
                <MdContentCopy
                    id="copy-icon"
                    size="2.5em"
                    onClick={copyToClipboard}
                />
                <Toast
                    onClose={() => setToastShow(false)}
                    show={toastShow}
                    delay={1500}
                    autohide
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "3em",
                        borderLeft: "5px solid #28A745",
                    }}
                >
                    <Toast.Body>
                        <MdCheckCircle
                            color="#28A745"
                            size="1.5em"
                            style={{
                                float: "left",
                                position: "relative",
                                margin: "auto",
                            }}
                        />
                        Sao chép thành công!
                    </Toast.Body>
                </Toast>
                <div className="keyboards">
                    <QwertyStenoKeyboard style={{ fontSize: 14 }} />
                    <StenoKeyboard style={{ fontSize: 18 }} />
                </div>
            </div>
        </div>
    );
}

export default Soanthao;
