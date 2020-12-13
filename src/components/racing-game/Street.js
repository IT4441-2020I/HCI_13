import streetImage from "../../static/images/racing-street.svg";
import { useEffect, useRef } from "react";

function Street() {
    const street1 = useRef();
    const street2 = useRef();

    useEffect(() => {
        let street1Pos = 0;
        let street2Pos = 0;

        const gameLoop = () => {
            if (street1Pos === -100) {
                street1Pos = 100;
            } else {
                --street1Pos;
            }

            if (street2Pos === -200) {
                street2Pos = 0;
            } else {
                --street2Pos;
            }

            if (street1.current !== null) {
                street1.current.style.transform = `translateX(${street1Pos}%)`;
            }
            if (street1.current !== null) {
                street2.current.style.transform = `translateX(${street2Pos}%)`;
            }
        };

        const loop = setInterval(gameLoop, 33);
        return () => clearInterval(loop);
    }, []);

    return (
        <div className="street">
            <img ref={street1} src={streetImage} alt="street" />
            <img ref={street2} src={streetImage} alt="street" />
        </div>
    );
}

export default Street;
