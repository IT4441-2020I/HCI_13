import "./steno_keyboard.css";
import StenoKey from "./StenoKey";

function StenoKeyboard() {
  const upperBankKeys = ["S", "K", "R", "N", "H", "*", "W", "J", "N", "T"];
  const lowerBankKeys = ["T", "P", "H", "N", "S", "N", "Y", "J", "F", "K"];
  const vowelKeys = ["U", "O", "E", "A"];
  return (
    <div className="steno-keyboard">
      <div className="upper-bank">
        {upperBankKeys.map((keyLetter, index) => (
          <StenoKey key={index} keyLetter={keyLetter} />
        ))}
      </div>
      <div className="lower-bank">
        {lowerBankKeys.map((keyLetter, index) => (
          <StenoKey key={index} keyLetter={keyLetter} />
        ))}
      </div>
      <div className="steno-vowel-keys">
        {vowelKeys.map((keyLetter, index) => (
          <StenoKey key={index} keyLetter={keyLetter} />
        ))}
      </div>
    </div>
  );
}

export default StenoKeyboard;
