import StenoKeyboard, {
    setStenoKeyPressed,
    setStenoKeyUnpressed,
} from "../../keyboard/steno-keyboard/StenoKeyboard";
import QwertyStenoKeyboad, {
    setQwertyStenoKeyPressed,
    setQwertyStenoKeyUnpressed,
} from "../../keyboard/qwerty-steno-keyboard/QwertyStenoKeyboard";
import Hands, {
    setFingerPressed,
    setFingerUnpressed,
} from "../../keyboard/Hands";
import { useRef, useEffect } from "react";
import "./finger_place_guide.css";

function FingerPlaceGuide() {
    const previousSelectedLetter = useRef({
        previousStenoKeyId: "key81",
        previousButtonId: "s",
        previousFingerId: "finger-0",
    });

    useEffect(() => {
        setStenoKeyPressed("key81");
        setQwertyStenoKeyPressed("key81");
        setFingerPressed("finger-0");
    }, []);

    const selectLetter = (event) => {
        const {
            previousStenoKeyId,
            previousButtonId,
            previousFingerId,
        } = previousSelectedLetter.current;

        // Remove previous selection
        setStenoKeyUnpressed(previousStenoKeyId);
        setQwertyStenoKeyUnpressed(previousStenoKeyId);
        setFingerUnpressed(previousFingerId);
        const previousButton = document.querySelector(
            `.letters button#${previousButtonId}`
        );
        previousButton.classList.remove("button-primary");
        previousButton.classList.add("button-secondary");

        // Update new selection
        const stenoKeyId = event.target.attributes["steno-key-id"].value;
        setStenoKeyPressed(stenoKeyId);
        setQwertyStenoKeyPressed(stenoKeyId);
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

    return (
        <section className="guide-section">
            <h5>Hướng dẫn cách đặt tay</h5>
            <div className="letters">
                <button
                    onClick={selectLetter}
                    id="s"
                    className="button-primary box-shadow"
                    steno-key-id="key81"
                    finger-id="finger-0"
                >
                    s
                </button>
                <button
                    onClick={selectLetter}
                    id="t"
                    className="button-secondary box-shadow"
                    steno-key-id="key65"
                    finger-id="finger-0"
                >
                    t
                </button>
                <button
                    onClick={selectLetter}
                    id="k"
                    className="button-secondary box-shadow"
                    steno-key-id="key87"
                    finger-id="finger-1"
                >
                    k
                </button>
                <button
                    onClick={selectLetter}
                    id="c"
                    className="button-secondary box-shadow"
                    steno-key-id="key87"
                    finger-id="finger-1"
                >
                    c
                </button>
                <button
                    onClick={selectLetter}
                    id="h"
                    className="button-secondary box-shadow"
                    steno-key-id="key68"
                    finger-id="finger-2"
                >
                    h
                </button>
                <button
                    onClick={selectLetter}
                    id="r"
                    className="button-secondary box-shadow"
                    steno-key-id="key69"
                    finger-id="finger-2"
                >
                    r
                </button>
            </div>
            <div className="keyboards">
                <QwertyStenoKeyboad style={{ fontSize: 12 }} />
                <StenoKeyboard style={{ fontSize: 18 }} />
            </div>
            <Hands />
        </section>
    );
}

export default FingerPlaceGuide;
