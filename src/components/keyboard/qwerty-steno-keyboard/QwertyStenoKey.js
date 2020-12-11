function QwertyStenoKey(props) {
    const { keyType, upperLetter, lowerLetter, lowerLeftLetter, keyId } = props;

    return (
        <div id={keyId} className={`qwerty-steno-key shadow ${keyType}`}>
            {upperLetter ? (
                <>
                    <div className="upper">{upperLetter}</div>
                    {lowerLetter && <div className="lower">{lowerLetter}</div>}
                    {lowerLeftLetter && (
                        <div className="lower-left">{lowerLeftLetter}</div>
                    )}
                </>
            ) : (
                lowerLetter
            )}
        </div>
    );
}

export default QwertyStenoKey;
