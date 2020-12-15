import { MdRefresh } from "react-icons/md";
import { Table } from "react-bootstrap";

function Result(props) {
    const { restartGame } = props;
    return (
        <>
            <div className="result-overlay" />
            <div className="result-container">
                <h2>Kết quả đua</h2>
                <button className="restart-game" onClick={restartGame}>
                    <MdRefresh size="2em" />
                    Đua tiếp
                </button>
                <div id="my-result">
                    <div id="my-rank">
                        <span>Vị trí</span>
                        <br />
                        <span>
                            <strong>1/5</strong>
                        </span>
                    </div>
                    <div id="my-time">
                        <span>Thời gian</span>
                        <br />
                        <span>
                            <strong>1:23 min</strong>
                        </span>
                    </div>
                    <div id="my-speed">
                        <span>Tốc độ</span>
                        <br />
                        <span>
                            <strong>136WPM</strong>
                        </span>
                    </div>
                    <div id="my-accuracy">
                        <span>Chính xác</span>
                        <br />
                        <span>
                            <strong>73%</strong>
                        </span>
                    </div>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Xếp hạng</th>
                            <th>Tên người chơi</th>
                            <th>Thời gian</th>
                            <th>Từ / phút</th>
                            <th>Độ chính xác (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="main-player">
                            <td>1</td>
                            <td className="player-name">Bạn</td>
                            <td>1:23</td>
                            <td>136</td>
                            <td>73</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="player-name">Love Hust</td>
                            <td>1:34</td>
                            <td>123</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="player-name">Two Steps From Hell</td>
                            <td>1:43</td>
                            <td>116</td>
                            <td>93</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="player-name">Niar</td>
                            <td>1:52</td>
                            <td>103</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className="player-name">Nguyen Van</td>
                            <td>1:59</td>
                            <td>91</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Result;
