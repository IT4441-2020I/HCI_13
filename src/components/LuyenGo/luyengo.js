import React, { Component } from "react";
import "./luyengo.css";
import QwertyStenoKeyboard from "../keyboard/qwerty-steno-keyboard/QwertyStenoKeyboard";
import StenoKeyboard from "../keyboard/steno-keyboard/StenoKeyboard";
import StenoInput from "../keyboard/StenoInput";
import { Tabs, Tab } from "react-bootstrap";

export default class LuyenGo extends Component {
    constructor() {
        super();
        this.state = {
            time: {},
            seconds: 0,
            text: null,
            typedWord: 0,
            tocky: "",
            speed: 0,
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.count = this.count.bind(this);
        this.onchangeText = this.onchangeText.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(event) {
        const { keyCode } = event;
        const letterElement = document.querySelector(
            `.steno-keyboard #key${keyCode}`
        );
        if (letterElement !== null) {
            const letter = letterElement.innerText;
            this.setState({ tocky: letter });
        }
    }

    onchangeText(e) {
        if (this.state.typedWord === 0) {
            this.timer = setInterval(this.count, 1000);
        }
        let length = 0;
        let array = e.target.value;
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== " ") {
                length++;
            }
        }
        this.setState({ typedWord: length });
        let v = parseInt((length / this.state.seconds) * 60);
        this.setState({ speed: v });
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = String(Math.floor(divisor_for_minutes / 60));
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = String(Math.ceil(divisor_for_seconds));
        let m = 0 + minutes;
        let s = 0 + seconds;

        let obj = {
            h: hours,
            m: m.slice(-2),
            s: s.slice(-2),
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTimer() {
        this.timer = setInterval(this.count, 1000);
        // if (this.timer == 0 && this.state.seconds > 0) {
        //   this.timer = setInterval(this.count, 1000);
        // }
    }

    count() {
        let seconds = this.state.seconds + 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        // Check if we're at zero.
        if (this.state.typedWord === 11) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <>
                <Tabs defaultActiveKey="luyen-go-am">
                    <Tab eventKey="luyen-go-phim" title="Luyện gõ phím">
                        <div className="tab-item-wrapper">
                            <h5>Luyện gõ phím</h5>
                        </div>
                    </Tab>

                    <Tab eventKey="luyen-go-am" title="Luyện gõ âm">
                        <div className="tab-item-wrapper">
                            <div className="center">
                                <div className="leftLG">
                                    <div class="btn-group">
                                        <div className="tabbar2 activeLG">
                                            Gõ âm đầu
                                        </div>
                                        <div className="tabbar2">
                                            Gõ âm chính
                                        </div>
                                        <div className="tabbar2">
                                            Gõ âm cuối
                                        </div>
                                    </div>
                                    <div className="box">
                                        <h4>
                                            C &ensp; CH &ensp; S &ensp; T &ensp;
                                            TH &ensp; K &ensp; L &ensp; M &ensp;
                                            Q
                                        </h4>
                                        <StenoInput
                                            onKeyDownHook={this.onKeyDown}
                                            onChangeHook={this.onchangeText}
                                        />
                                    </div>
                                </div>
                                <div className="rightLG">
                                    <div>
                                        <div className="time">
                                            {this.state.time.m} :{" "}
                                            {this.state.time.s}
                                            <div style={{ fontSize: 20 }}>
                                                <span>
                                                    Số từ đã gõ:
                                                    {" " + this.state.typedWord}
                                                </span>
                                                <br />
                                                <span>
                                                    Số từ đúng:
                                                    {" " + this.state.typedWord}
                                                </span>
                                                <br />
                                                <span>
                                                    Tốc độ:{" "}
                                                    {" " +
                                                        this.state.speed +
                                                        " "}{" "}
                                                    VPM
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="luyen-go-tu" title="Luyện gõ từ">
                        <div className="tab-item-wrapper">
                            <h5>Luyện gõ từ</h5>
                        </div>
                    </Tab>

                    <Tab eventKey="luyen-go-cau" title="Luyện gõ câu">
                        <div className="tab-item-wrapper">
                            <h5>Luyện gõ câu</h5>
                        </div>
                    </Tab>

                    {/* <Tab eventKey="luyen-go-doan" title="Luyện gõ đoạn"> */}
                    {/*     <div className="tab-item-wrapper"> */}
                    {/*         <h5>Luyện gõ đoạn</h5> */}
                    {/*     </div> */}
                    {/* </Tab> */}
                </Tabs>
                <div className="keyboards">
                    <QwertyStenoKeyboard style={{ fontSize: 14 }} />
                    <StenoKeyboard style={{ fontSize: 20 }} />
                </div>
            </>
        );
    }
}
