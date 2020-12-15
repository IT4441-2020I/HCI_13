import goPhim from "../../static/images/go-phim.svg";
import goAm from "../../static/images/go-am.svg";
import goTu from "../../static/images/go-tu.svg";
import goCau from "../../static/images/go-cau.svg";

function PracticeStatistic() {
    return (
        <div className="practice-statistic">
            <h3>Thống kê luyện gõ</h3>
            <div className="graph-caption">
                <span>Chú thích: &nbsp;</span>
                <span id="speed-caption">Tốc độ</span>
                <span id="accuracy-caption">Độ chính xác</span>
            </div>
            <ul className="graphs-list">
                <li id="go-phim">
                    <img src={goPhim} alt="graph" />
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="week-evaluation">Yếu</span>
                        </div>
                        <div className="accuracy-evaluation">
                            Độ chính xác:{" "}
                            <span className="good-evaluation">Tốt</span>
                        </div>
                    </div>
                </li>
                <li id="go-am">
                    <img src={goAm} alt="graph" />
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="week-evaluation">Yếu</span>
                        </div>
                        <div className="accuracy-evaluation">
                            Độ chính xác:{" "}
                            <span className="good-evaluation">Tốt</span>
                        </div>
                    </div>
                </li>
                <li id="go-tu">
                    <img src={goTu} alt="graph" />
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="week-evaluation">Yếu</span>
                        </div>
                        <div className="accuracy-evaluation">
                            Độ chính xác:{" "}
                            <span className="week-evaluation">Yếu</span>
                        </div>
                    </div>
                </li>
                <li id="go-cau">
                    <img src={goCau} alt="graph" />
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="week-evaluation">Yếu</span>
                        </div>
                        <div className="accuracy-evaluation">
                            Độ chính xác:{" "}
                            <span className="normal-evaluation">
                                Trung bình
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="suggestions">
                <h4>Đề xuất cải thiện (theo thứ tự ưu tiên):</h4>
                <ol>
                    <li>Gõ câu</li>
                    <li>Gõ từ</li>
                    <li>Gõ âm</li>
                    <li>Gõ phím</li>
                </ol>
            </div>
        </div>
    );
}

export default PracticeStatistic;
