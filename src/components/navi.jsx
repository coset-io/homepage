import React, {useState, useRef} from "react"
import {Link} from "gatsby"
import "./navi.css"

import smalllogo from "../../content/images/navi/logo.svg"

export default(props) => {
    const [isNavShowing, setIsNavShowing] = useState(false)
    return (
        <div className="navi"
            style={
                {
                    ...props.styles
                }
        }>
            {/* PC端 */}
            <div className="web">
                <Link to="/">
                    <div className="logo"></div>
                </Link>
                <ul className="navi-links">
                    <li className="navi-links__item1">
                        <Link to="/hackerhouse">
                            Hacker House
                        </Link>
                        <div className="line"></div>
                    </li>
                    <li className="navi-links__item2">
                    <Link to="https://t.me/AntalphaLabs">
                            Join Us
                        </Link>
                        <div className="line"></div>
                    </li>
                </ul>

            </div>
            {/* 移动端 */}
            <div className="mobile">
                <a href="/" className="mobilelogo">
                     <img src={smalllogo}></img>
                </a>
                <div className="menu"
                    onClick={
                        () => setIsNavShowing(prev => !prev)
                }></div>
                {
                isNavShowing ? <ul className="navi-links">
                    <li className="navi-links__item">
                        <Link to="https://labs.antalpha.com/hackerhouse">
                            Hacker House Event
                        </Link>
                    </li>
                    <li className="navi-links__item">
                        <Link to="https://t.me/AntalphaLabs">
                            Join Us
                        </Link>
                    </li>
                </ul> : <></>
            } </div>

        </div>


    )
}
