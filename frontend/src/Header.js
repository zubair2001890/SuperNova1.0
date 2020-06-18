import React from 'react'
import logo from "./images/Stellated-Dodecahedron-white.png"

export default function Header() {
    return (
        <div>
            <header id="header-container">
                <div id="menu-icon"></div>
                <div id="header-logo"><a href="http://supernova.ac/"><img src={logo} id="logo"/></a></div>
                <div id="header-links"></div>
                <div id="title">
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                </div>
            </header>
        </div>
    )
}
