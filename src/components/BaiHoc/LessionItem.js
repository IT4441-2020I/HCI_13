import LeaderLine from "react-leader-line";
import { useRef, useEffect } from "react";
import "./lession.css";

function LessionItem(props) {
    const { title, lessionStartRef, lessionEndRef, showLessionContent } = props;
    const contentRef1 = useRef();
    const contentRef2 = useRef();

    useEffect(() => {
        const lineStyles = {
            dash: {
                len: 5,
                gap: 5,
            },
            color: "grey",
            size: 2,
            path: "straight",
            startPlug: "behind",
            endPlug: "behind",
        };
        const line1 = new LeaderLine(
            lessionStartRef.current,
            contentRef1.current,
            lineStyles
        );
        const line2 = new LeaderLine(
            contentRef1.current,
            contentRef2.current,
            lineStyles
        );
        const line3 = new LeaderLine(
            contentRef2.current,
            lessionEndRef.current,
            lineStyles
        );

        return () => {
            line1.remove();
            line2.remove();
            line3.remove();
        };
    });

    return (
        <div className="col-lg-4 lession-item">
            <button
                ref={lessionStartRef}
                className="button-primary lession-item__title box-shadow"
                onClick={showLessionContent}
            >
                {title}
            </button>
            <button
                ref={contentRef1}
                className="button-secondary lession-item__content box-shadow"
                onClick={showLessionContent}
            >
                Các quy tắc
            </button>
            <button
                ref={contentRef2}
                className="button-secondary lession-item__content box-shadow"
                onClick={showLessionContent}
            >
                Hướng dẫn cách đặt tay
            </button>
            <button
                ref={lessionEndRef}
                className="button-secondary lession-item__content box-shadow"
                onClick={showLessionContent}
            >
                Thực hành
            </button>
        </div>
    );
}

export default LessionItem;
