import StenoRulesTable from "./lession-materials/StenoRulesTable";
import FingerPlaceGuide from "./lession-materials/FingerPlaceGuide";
import { useState, useRef } from "react";
import LessionPracticeContent from "./LessionPracticeContent";
import { MdClose, MdArrowForward } from "react-icons/md";

function LessionContent(props) {
    const lessionContentWrapperRef = useRef();
    const { hideLessionContent } = props;
    const [lessionPracticeContent, setLessionPracticeContent] = useState(null);

    const showLessionPracticeContent = () => {
        setLessionPracticeContent({});
        lessionContentWrapperRef.current.style.overflow = "hidden";
    };

    const hidePracticeContent = () => {
        document.querySelector(".lession-practice-wrapper").style.transform =
            "translateY(100%)";
        const timer = setTimeout(() => {
            setLessionPracticeContent(null);
            lessionContentWrapperRef.current.style.overflow = "auto";
            clearTimeout(timer);
        }, 300);
    };

    return (
        <div className="lession-wrapper">
            <div className="close-icon" onClick={hideLessionContent}>
                <MdClose />
            </div>
            <div
                ref={lessionContentWrapperRef}
                className="lession-content-wrapper"
            >
                <section className="lession-header">
                    <h3 className="topic-header">Học gõ âm đầu</h3>
                    <h5 className="lession-title">
                        Những âm có cùng cách phát âm với phím tốc ký
                    </h5>
                </section>
                <StenoRulesTable />
                <FingerPlaceGuide />
                <button
                    id="practice-button"
                    onClick={showLessionPracticeContent}
                >
                    Luyện tập
                    <MdArrowForward size="1.5em" />
                </button>
            </div>
            {lessionPracticeContent !== null && (
                <LessionPracticeContent
                    hidePracticeContent={hidePracticeContent}
                />
            )}
        </div>
    );
}

export default LessionContent;
