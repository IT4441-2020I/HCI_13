import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import { useRef, useEffect } from "react";
import StenoKeyboard, {
    setStenoKeyPressed,
    setStenoKeyUnpressed,
} from "../keyboard/steno-keyboard/StenoKeyboard";
import Hands, { setFingerPressed, setFingerUnpressed } from "../keyboard/Hands";

function LessionContent(props) {
    const { hideLessionContent } = props;
    const previousSelectedLetter = useRef({
        previousStenoKeyId: "q",
        previousButtonId: "s",
        previousFingerId: "finger-0",
    });

    const selectLetter = (event) => {
        const {
            previousStenoKeyId,
            previousButtonId,
            previousFingerId,
        } = previousSelectedLetter.current;

        // Remove previous selection
        setStenoKeyUnpressed(previousStenoKeyId);
        setFingerUnpressed(previousFingerId);
        const previousButton = document.querySelector(
            `.letters button#${previousButtonId}`
        );
        previousButton.classList.remove("button-primary");
        previousButton.classList.add("button-secondary");

        // Update new selection
        const stenoKeyId = event.target.attributes["steno-key"].value;
        setStenoKeyPressed(stenoKeyId);
        const fingerId = event.target.attributes["finger-id"].value;
        setFingerPressed(fingerId);
        event.target.classList.remove("button-secondary");
        event.target.classList.add("button-primary");

        // Set current selection to previous selection
        previousSelectedLetter.current = {
            previousStenoKeyId: stenoKeyId,
            previousButtonId: event.target.id,
            previousFingerId: fingerId,
        };
    };

    useEffect(() => {
        document.querySelector(".steno-keyboard #q").classList.add("pressed");
        document
            .querySelector(".hands #finger-0")
            .classList.add("finger-pressed");
    }, []);

    return (
        <>
            <div className="close-icon" onClick={hideLessionContent}>
                <Icon icon={closeIcon} />
            </div>
            <div className="lession-wrapper">
                <section className="lession-header">
                    <h3 className="topic-header">Học gõ âm đầu</h3>
                    <h5 className="lession-title">
                        Những âm có cùng cách phát âm với phím tốc ký
                    </h5>
                </section>
                <section className="rules-section">
                    <table className="rules-table">
                        <caption>Bảng quy tắc</caption>
                        <thead>
                            <tr>
                                <th>Âm Tiếng Việt</th>
                                <th>Phím tốc ký</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>s</td>
                                <td>s</td>
                            </tr>
                            <tr>
                                <td>t</td>
                                <td>t</td>
                            </tr>
                            <tr>
                                <td>k</td>
                                <td>k</td>
                            </tr>
                            <tr>
                                <td>c</td>
                                <td>k</td>
                            </tr>
                            <tr>
                                <td>h</td>
                                <td>h</td>
                            </tr>
                            <tr>
                                <td>r</td>
                                <td>r</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="guide-section">
                    <h5>Hướng dẫn cách đặt tay</h5>
                    <div className="letters">
                        <button
                            onClick={selectLetter}
                            id="s"
                            className="button-primary box-shadow"
                            steno-key="q"
                            finger-id="finger-0"
                        >
                            s
                        </button>
                        <button
                            onClick={selectLetter}
                            id="t"
                            className="button-secondary box-shadow"
                            steno-key="a"
                            finger-id="finger-0"
                        >
                            t
                        </button>
                        <button
                            onClick={selectLetter}
                            id="k"
                            className="button-secondary box-shadow"
                            steno-key="w"
                            finger-id="finger-1"
                        >
                            k
                        </button>
                        <button
                            onClick={selectLetter}
                            id="c"
                            className="button-secondary box-shadow"
                            steno-key="w"
                            finger-id="finger-1"
                        >
                            c
                        </button>
                        <button
                            onClick={selectLetter}
                            id="h"
                            className="button-secondary box-shadow"
                            steno-key="d"
                            finger-id="finger-2"
                        >
                            h
                        </button>
                        <button
                            onClick={selectLetter}
                            id="r"
                            className="button-secondary box-shadow"
                            steno-key="e"
                            finger-id="finger-2"
                        >
                            r
                        </button>
                    </div>
                    <div className="keyboards">
                        <StenoKeyboard />
                    </div>
                    <Hands />
                </section>
            </div>
        </>
    );
}

export default LessionContent;
