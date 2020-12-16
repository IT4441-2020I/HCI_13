import rankingHelp from "../../static/images/ranking-help.svg";
import avatar from "../../static/images/Avatar.svg";
import { MdKeyboard, MdSupervisorAccount } from "react-icons/md";
import { BiUserCheck, BiAward, BiHelpCircle } from "react-icons/bi";
import { useRef } from "react";

function Bio() {
    const rankingHelpRef = useRef();

    const toggleRankingHelp = () => {
        // console.log(rankingHelpRef.current.style);
        rankingHelpRef.current.classList.toggle("hidden");
    };

    return (
        <div className="bio shadow">
            <div className="avatar">
                <img src={avatar} alt="user" />
            </div>
            <ul>
                <li id="member-from">
                    <BiUserCheck color="#28A745" size="2.5em" />
                    <span>Thành viên từ: 01/11/2020</span>
                </li>
                <li id="average-speed">
                    <MdKeyboard color="#FFC107" size="2.5em" />
                    <span>Tốc độ gõ trung bình: 31 WPM</span>
                </li>
                <li id="average-accuracy">
                    <MdKeyboard color="#ff0000" size="2.5em" />
                    <span>Độ chính xác trung bình: 56%</span>
                </li>
                <li id="competitions">
                    <MdSupervisorAccount color="#17A2B8" size="2.5em" />
                    <span>Tham gia 5 cuộc thi</span>
                </li>
                <hr />
                <li id="ranking">
                    <BiAward color="#FFC107" size="2.5em" />
                    <span>Ký sĩ nghiệp dư</span>
                    <BiHelpCircle
                        size="1.5rem"
                        style={{ marginLeft: "1rem" }}
                        onClick={toggleRankingHelp}
                        id="help-icon"
                    />
                    <div
                        ref={rankingHelpRef}
                        className="ranking-help shadow hidden"
                    >
                        <img src={rankingHelp} alt="help" />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Bio;
