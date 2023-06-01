import React from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"
import "./move.css"

import movebg from "../../../content/images/hackerhouse/movebg.png"
import SEO from '../../components/seo'

export const Head = () => (
  <SEO title="Antalpha Labs-Web3 developers community" />
)

export default function move() {
  return (
    <>
      {/* 1、这里是导航栏 */}
      <Navi></Navi>

      {/* 2、报名页面 */}

      <div className="move">
        <img className="move_bg" src={movebg}></img>
        <div className="move_activity ">
          <div className="move_title">Antalpha HackerHouse</div>
          <span className="move_theme">#Build on Move</span>
          <span className="move_timeloca">13th Feb 2023 - 05th Mar 2023</span>
          <span className="move_timeloca">Yunnan, Dali</span>
          <a href="https://antalpha.notion.site/AHH-Move-Dali-x-NonceGeek-6d02538abd2e452ab361aecb8ff83277">
            <button className="move_button" onclick="changeColor('green')">
              Final Demo
            </button>
          </a>
          <div className="move_contact">
            <span className="move_add">Interesting in partnering?</span>
            <a href="mailto:hello.labs@antalpha.com">
              <span className="move_email">hello.labs@antalpha.com</span>
            </a>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}
