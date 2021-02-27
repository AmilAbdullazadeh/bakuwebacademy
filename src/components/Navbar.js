import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
import logo from "../assets/logo.svg"

export default function Navbar() {

    return (
        <header className="bg-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink
                        to="/"
                        exact
                        rel="noreferrer"
                        className="navbar-brand"
                    >
                        <span className="logo-img" style={{
                            backgroundImage: `url(${logo})`
                        }} >
                        </span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    aria-current="page"
                                    className="nav-link"
                                    activeClassName="active"
                                    rel="noreferrer"
                                    to="/post"
                                    exact
                                >
                                    Blog
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink
                                    aria-current="page"
                                    className="nav-link"
                                    rel="noreferrer"
                                    activeClassName="active"
                                    to="/project"
                                    exact
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    aria-current="page"
                                    className="nav-link"
                                    rel="noreferrer"
                                    activeClassName="active"
                                    to="/about"
                                    exact
                                >
                                    About us
                                </NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink
                                    aria-current="page"
                                    className="nav-link contact-btn"
                                    rel="noreferrer"
                                    activeClassName="active"
                                    to="/contact"
                                    exact
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        </header>
    )
}