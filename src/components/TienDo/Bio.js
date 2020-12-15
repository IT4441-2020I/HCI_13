import avatar from "../../static/images/Avatar.svg";
import { MdKeyboard, MdSupervisorAccount } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";

function Bio() {
    return (
        <div className="bio shadow">
            <div className="avatar">
                <img src={avatar} alt="user" />
            </div>
            <ul>
                <li id="member-from">
                    <BiUserCheck color="#28A745" size="3em" />
                    <span>Thành viên từ: 01/11/2020</span>
                </li>
                <li id="average-speed">
                    <MdKeyboard color="#FFC107" size="3em" />
                    <span>Tham gia 1 cuộc thi</span>
                </li>
                <li id="average-accuracy">
                    <MdKeyboard color="#ff0000" size="3em" />
                    <span>Độ chính xác trung bình: 56%</span>
                </li>
                <li id="competitions">
                    <MdSupervisorAccount color="#17A2B8" size="3em" />
                    <span>Tham gia 1 cuộc thi</span>
                </li>
            </ul>
        </div>
    );
}

export default Bio;
