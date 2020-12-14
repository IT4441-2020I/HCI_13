import React, { Component } from "react";
import "./baihoc.css";
import TopicItem from "./TopicItem";
import { TOPICS } from "../../constants";

export default class BaiHoc extends Component {
    render() {
        return (
            <ul className="topics-list shadow">
                {TOPICS.map((topic, index) => {
                    return <TopicItem topic={topic} key={index} />;
                })}
            </ul>
        );
    }
}
