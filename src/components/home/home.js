import React, { Component } from "react";
import { Link } from "react-router-dom";
import StenoKeyboard from "../keyboard/steno-keyboard/StenoKeyboard";
import "./home.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home1">
                    <div className="right">
                        <span className="tieude">
                            "Tốc ký là một nghệ thuật,
                        </span>
                        <br />
                        <span className="tieude">
                            và người gõ tốc ký là một “Ký sĩ”
                        </span>
                        <br />
                        <br />
                        <Link to="/baihoc" className="start">
                            Bắt đầu ngay
                        </Link>
                    </div>
                    <div className="left">
                        <StenoKeyboard style={{ fontSize: 20 }} />
                    </div>
                </div>
                <div className="home2">
                    <span className="tieude1">
                        Làm thế nào để thuộc được các chữ cái trên bàn phím
                        steno
                    </span>
                    <br />
                    <span>
                        Chào mừng bạn đã đến với game tốc ký tiếng Việt. Chúng
                        tôi tin rằng việc học gõ tốc ký tiếng Việt có thể dễ
                        dàng hơn nếu coi đó là một trò chơi. Game tốc ký hỗ trợ
                        người học cải thiện các kỹ năng bàn phím, tốc độ gõ và
                        độ chính xác bấm phím. Các bạn sẽ học cả cách phối hợp
                        tư duy – hành động theo chu trình thực hiện – đánh giá:
                        kết hợp mắt với tay, kết hợp trí nhớ và phản xạ cơ tay.
                        Đây là yếu tố quyết định để dành chiến thắng trong trò
                        chơi, cũng là để bạn luyện gõ tốc ký thuần thục.
                    </span>
                </div>
                <div className="home3">
                    <span className="tieude1">
                        Làm thế nào để việc học tốc ký trở nên vui vẻ?
                    </span>
                    <br />
                    <span>
                        Người chơi sẽ trải qua các thử thách có độ khó tăng dần
                        và nhận được điểm số, khen thưởng khi hoàn thành vòng
                        chơi. Một cách tuyệt vời để làm cho các bài học trên bàn
                        phím trở nên thú vị và tạo động lực hơn là biến mỗi bài
                        học bàn phím thành VideoGame WPM bằng cách khuyến khích
                        người chơi gõ nhanh nhất có thể. Game tốc ký giúp người
                        chơi thực hành các kỹ năng gõ bàn phím steno của họ bằng
                        cách thách thức họ luyện tập chăm chỉ hơn để đạt được
                        từng mục tiêu. Chìa khóa để khuyến khích người chơi tham
                        gia là đưa ra phản hồi tích cực và cho họ một vài cơ hội
                        để cố gắng đánh bại wpm cao nhất của chính họ.
                    </span>
                </div>
                <div className="home4">
                    <span className="tieude1">
                        Làm thế nào để thu hút người học gõ tốc ký?
                    </span>
                    <br />
                    <span>
                        Trong phạm vi Game tốc ký của chúng tôi, người chơi được
                        học vị trí đặt ngón tay, thuộc được các âm cấu tạo nên
                        từ, cách viết. Ngoài những kỹ năng cốt lõi này, trang
                        web của chúng tôi cũng chú ý đến việc học các kỹ năng
                        chính tả cần thiết. Học gõ tốc ký sẽ giảm sự thú vị nếu
                        người chơi chỉ tự chơi một mình. Vì vậy chúng tôi đã
                        nghĩ: Tại sao không để người chơi vui vẻ gõ cùng nhau?
                        Đây là ý tưởng cho sự phát triển của trang web học gõ
                        tốc ký này.
                    </span>
                </div>
            </div>
        );
    }
}
