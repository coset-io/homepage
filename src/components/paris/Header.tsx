import React, { useState, ComponentProps } from "react"
import "./navi.css"

export default function Header(props: ComponentProps<"div">) {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <header
      // className={`navi ${montserrat.className}`}
      style={{
        ...props.style,
      }}
    >
      {/* PC端 */}
      <div className="web">
        <a href="/">
          <div className="logo" />
        </a>
        <ul className="navi-links">
          <li className="navi-links__item1">
            <a href="https://labs.antalpha.com/hackerhouse/" rel="same">
              Hacker House
            </a>
            <div className="line"></div>
          </li>
          <li className="navi-links__item2">
            <a href="https://t.me/AntalphaLabs" target="_blank">
              Join Us
            </a>
            <div className="line"></div>
          </li>
        </ul>
      </div>
      {/* 移动端 */}
      <div className="mobile">
        <a href="/" className="mobilelogo">
          <img src="/images/logo.png"></img>
        </a>
        <div
          className="menu"
          onClick={() => setIsNavShowing((prev) => !prev)}
        />
        {isNavShowing ? (
          <ul className="navi-links">
            <li className="navi-links__item">
              <a href="https://labs.antalpha.com/hackerhouse" target="_blank">
                Hacker House Event
              </a>
            </li>
            <li className="navi-links__item">
              <a href="https://t.me/AntalphaLabs">Join Us</a>
            </li>
          </ul>
        ) : (
          <></>
        )}{" "}
      </div>
    </header>
  )
}
