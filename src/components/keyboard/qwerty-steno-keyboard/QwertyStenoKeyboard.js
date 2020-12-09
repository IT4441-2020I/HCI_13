import "./qwerty_steno_keyboard.css";
import QwertyStenoKey from "./QwertyStenoKey";

function QwertyStenoKeyboad() {
  return (
    <div className="qwerty-steno-keyboard">
      <QwertyStenoKey keyType={"letter"} qwertyKeyLetter={"A"} />
    </div>
  );
}

export default QwertyStenoKeyboad;
