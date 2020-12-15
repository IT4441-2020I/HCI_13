import { TOPICS } from "../../constants";
import { ProgressBar } from "react-bootstrap";

function LearnedLessionsStatistic() {
    return (
        <div className="lessions-statistic shadow">
            <h3>Bài học đã học</h3>
            <ul className="lession-progresses-list">
                <li className="lession-progress-item">
                    <div className="topic-title">Số quy tắc đã học</div>
                    <div className="lession-progress">
                        <ProgressBar now={50} />
                        <span>101/213</span>
                    </div>
                </li>
                {TOPICS.map((topic, index) => {
                    const {
                        title,
                        lessions,
                        numberOfCompletedLessions,
                    } = topic;
                    const progress = parseInt(
                        (numberOfCompletedLessions / lessions.length) * 100
                    );
                    return (
                        <li className="lession-progress-item" key={index}>
                            <div className="topic-title">{title}</div>
                            <div className="lession-progress">
                                <ProgressBar now={progress} />
                                <span>{`${numberOfCompletedLessions}/${lessions.length}`}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default LearnedLessionsStatistic;
