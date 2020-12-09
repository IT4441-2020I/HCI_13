function QwertyStenoKey(props) {
  const { keyType, qwertyKeyLetter, stenoKeyLetter } = props;

  return (
    <div className={`qwerty-steno-key shadow ${keyType}`}>
      {stenoKeyLetter ? (
        <>
          <div className="upper">{stenoKeyLetter}</div>
          <div className="lower">{qwertyKeyLetter}</div>
        </>
      ) : (
        qwertyKeyLetter
      )}
    </div>
  );
}

export default QwertyStenoKey;
