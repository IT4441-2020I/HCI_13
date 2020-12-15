import LeaderLine from "react-leader-line";
import LessionItem from "./LessionItem";
import { useRef, useEffect, useState } from "react";
import LessionContent from "./LessionContent";

function LessionsList() {
    const lession1StartRef = useRef();
    const lession2StartRef = useRef();
    const lession3StartRef = useRef();
    const lession4StartRef = useRef();
    const lession1EndRef = useRef();
    const lession2EndRef = useRef();
    const lession3EndRef = useRef();
    const lession4EndRef = useRef();

    const [lessionContent, setLessionContent] = useState(null);

    const lessions = [
        {
            title: "Âm có cùng cách phát âm với phím tốc ký",
            lessionStartRef: lession1StartRef,
            lessionEndRef: lession1EndRef,
        },
        {
            title: "Những âm phát âm giống nhau",
            lessionStartRef: lession2StartRef,
            lessionEndRef: lession2EndRef,
        },
        {
            title: "Những âm viết gần giống nhau",
            lessionStartRef: lession3StartRef,
            lessionEndRef: lession3EndRef,
        },
        {
            title: "Những âm ngoại lệ",
            lessionStartRef: lession4StartRef,
            lessionEndRef: lession4EndRef,
        },
    ];

    useEffect(() => {
        const lineStyles = {
            dash: {
                len: 5,
                gap: 5,
            },
            color: "grey",
            size: 2,
            path: "grid",
            startPlug: "behind",
            endPlug: "behind",
        };
        const line1 = new LeaderLine(
            lession1EndRef.current,
            lession2StartRef.current,
            lineStyles
        );
        const line2 = new LeaderLine(
            lession2EndRef.current,
            lession3StartRef.current,
            lineStyles
        );
        const line3 = new LeaderLine(
            lession3EndRef.current,
            lession4StartRef.current,
            {
                ...lineStyles,
                startSocket: "bottom",
                endSocket: "top",
            }
        );

        return () => {
            line1.remove();
            line2.remove();
            line3.remove();
            document.body.style.overflow = "auto";
        };
    }, []);

    const showLessionContent = () => {
        setLessionContent({});
        document.body.style.overflow = "hidden";
    };

    const hideLessionContent = () => {
        document.querySelector(".lession-wrapper").style.transform =
            "translateY(100%)";
        const timer = setTimeout(() => {
            setLessionContent(null);
            document.body.style.overflow = "auto";
            clearTimeout(timer);
        }, 300);
    };

    return (
        <>
            <h3 className="topic-header">Học gõ âm đầu</h3>
            <div className="lessions-list row">
                {lessions.map(
                    ({ title, lessionStartRef, lessionEndRef }, index) => (
                        <LessionItem
                            key={index}
                            title={title}
                            lessionStartRef={lessionStartRef}
                            lessionEndRef={lessionEndRef}
                            showLessionContent={showLessionContent}
                        />
                    )
                )}
            </div>
            {lessionContent && (
                <>
                    <div className="lession-overlay" />
                    <LessionContent hideLessionContent={hideLessionContent} />
                </>
            )}
        </>
    );
}

export default LessionsList;
