import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./App.css";
import searchIcon from "./static/images/mdi_search.svg";

export default class Nav extends Component {
    logout() {
        localStorage.removeItem("username");
        window.location.reload();
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm bg-light shadow fixed-top">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Link to={"/"} className="navbar-brand logo">
                            Gõ Tốc Ký
                        </Link>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link
                                    to={"/baihoc"}
                                    className="nav-link active"
                                >
                                    Bài học
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/luyengo"} className="nav-link">
                                    Luyện gõ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/tiendo"} className="nav-link">
                                    Tiến độ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/thidau"} className="nav-link">
                                    Thi đấu
                                </Link>
                            </li>
                        </ul>
                        <form className="form-inline search-form">
                            <input
                                class="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button type="submit">
                                <img src={searchIcon} alt="Search" />
                            </button>
                        </form>
                        {localStorage.getItem("username") ? (
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={localStorage.getItem("username")}
                                style={{ marginLeft: 8 }}
                            >
                                <Dropdown.Item
                                    href="#/action-1"
                                    onClick={this.logout}
                                >
                                    Đăng xuất
                                </Dropdown.Item>
                            </DropdownButton>
                        ) : (
                            <Link to={"/login"} className="nav-link">
                                Đăng nhập | Đăng ký
                            </Link>
                        )}
                    </div>
                </nav>
            </header>
        );
    }
}
