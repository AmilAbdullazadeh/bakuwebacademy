import React from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function Navbar() {
    return (
        <header className="bg-header">
            <div className="container mx-auto d-flex">
                <nav className="col-md-6" >
                    <NavLink activeClassName="active" to="/" exact>Baku Web Academy</NavLink>
                    <NavLink activeClassName="active" to="/post">Blog Posts</NavLink>
                    <NavLink activeClassName="active" to="/project">Projects</NavLink>
                    <NavLink activeClassName="active" to="/about">About us</NavLink>
                </nav>
                <div className="col-md-1 social-icons">
                    <SocialIcon fgColor="#fff" url="https://instagram.com/b_w_academy" target="_blank" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://facebook.com/b_w_academy" target="_blank" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}