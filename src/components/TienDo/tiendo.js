import React, { Component } from "react";
import "./tiendo.css";
import Bio from "./Bio";
import LearnedLessionsStatistic from "./LearnedLessionsStatistic";
import PracticeStatistic from "./PracticeStatistic";
import CompetitionsHistory from "./CompetitionsHistory";

export default class TienDo extends Component {
    render() {
        return (
            <div className="user-statistic">
                <Bio />
                <LearnedLessionsStatistic />
                <PracticeStatistic />
                <CompetitionsHistory />
            </div>
        );
    }
}
