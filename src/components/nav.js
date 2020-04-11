import React from 'react'

const Nav = (props) => {
    return (
        <div className="navbar" id="navbar">
            <a href="#default" id="logo">Shawn Wright</a>
            <div id="links">
                <a className="active" href="#home">Home</a>
                <a href="#portfolio">Portfolio</a>
                {/* <a href="#about">About</a>  */}
            <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Nav;
