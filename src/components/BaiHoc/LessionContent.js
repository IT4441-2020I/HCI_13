import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import StenoRulesTable from "./lession-materials/StenoRulesTable";
import FingerPlaceGuide from "./lession-materials/FingerPlaceGuide";

function LessionContent(props) {
    const { hideLessionContent } = props;

    return (
        <>
            <div className="close-icon" onClick={hideLessionContent}>
                <Icon icon={closeIcon} />
            </div>
            <div className="lession-wrapper">
                <section className="lession-header">
                    <h3 className="topic-header">Học gõ âm đầu</h3>
                    <h5 className="lession-title">
                        Những âm có cùng cách phát âm với phím tốc ký
                    </h5>
                </section>
                <StenoRulesTable />
                <FingerPlaceGuide />
            </div>
        </>
    );
}

export default LessionContent;
