import { Link } from "react-router-dom";

function TopicItem(props) {
    const { title, lessions, numberOfCompletedLessions } = props.topic;
    const progress = parseInt(
        (numberOfCompletedLessions / lessions.length) * 100
    );

    return (
        <li className="topic-item">
            <Link to="/baihoc/1">
                <h3 className="title">{title}</h3>
                <div className="topic-content">
                    <ul className="topic-content__lessions">
                        {lessions.map((lessionTitle, index) => (
                            <li className="topic-content__lession" key={index}>
                                {lessionTitle}
                            </li>
                        ))}
                    </ul>
                    <div className="progress-wrapper">
                        <p>
                            Hoàn thành: {numberOfCompletedLessions}/
                            {lessions.length}
                        </p>
                        <div className="progress">
                            <div
                                className="progress-bar active"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default TopicItem;
