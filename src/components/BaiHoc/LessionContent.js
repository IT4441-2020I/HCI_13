import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import bxRightArrowAlt from "@iconify/icons-bx/bx-right-arrow-alt";
import StenoRulesTable from "./lession-materials/StenoRulesTable";
import FingerPlaceGuide from "./lession-materials/FingerPlaceGuide";
import { useState, useRef } from "react";
import LessionPracticeContent from "./LessionPracticeContent";

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
                <Icon icon={closeIcon} />
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
                    <Icon icon={bxRightArrowAlt} />
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
