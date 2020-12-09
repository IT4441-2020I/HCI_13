export default function StenoKey(props) {
  const { keyLetter, isPressed } = props;

  return (
    <div className={`steno-key shadow ${isPressed ? "pressed" : ""}`}>
      {keyLetter}
    </div>
  );
}
