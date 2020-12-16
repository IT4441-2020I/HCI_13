import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";
import { MdHome, MdSearch } from "react-icons/md";

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
                            <li className="nav-link home">
                                <NavLink exact to="/" activeClassName="active">
                                    <MdHome size="1.5em" />
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/baihoc" activeClassName="active">
                                    Bài học
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/luyengo" activeClassName="active">
                                    Luyện gõ
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/tiendo" activeClassName="active">
                                    Tiến độ
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/thidau" activeClassName="active">
                                    Thi đấu
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink
                                    to="/soanthao"
                                    activeClassName="active"
                                >
                                    Soạn thảo
                                </NavLink>
                            </li>
                        </ul>
                        <form className="form-inline search-form">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button>
                                <MdSearch />
                            </button>
                        </form>
                        {/* {localStorage.getItem("username") ? ( */}
                        {/*     <DropdownButton */}
                        {/*         id="dropdown-basic-button" */}
                        {/*         title={localStorage.getItem("username")} */}
                        {/*         style={{ marginLeft: 8 }} */}
                        {/*     > */}
                        {/*         <Dropdown.link */}
                        {/*             href="#/action-1" */}
                        {/*             onClick={this.logout} */}
                        {/*         > */}
                        {/*             Đăng xuất */}
                        {/*         </Dropdown.link> */}
                        {/*     </DropdownButton> */}
                        {/* ) : ( */}
                        {/*     <Link to={"/login"} className="nav-link"> */}
                        {/*         Đăng nhập | Đăng ký */}
                        {/*     </Link> */}
                        {/* )} */}
                    </div>
                </nav>
            </header>
        );
    }
}
