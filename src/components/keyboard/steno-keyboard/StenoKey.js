export default function StenoKey(props) {
    const { keyLetter, keyId } = props;

    return (
        <div id={keyId} className="steno-key shadow">
            {keyLetter}
        </div>
    );
}
