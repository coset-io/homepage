import React, { useState } from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"

import "./tokyo.css"
import toykoog from "../../../content/images/og/toyko.png"
import toykotitle from "../../../content/images/hackerhouse/toyko/title.png"
import toykobutton from "../../../content/images/hackerhouse/toyko/button.png"
import SEO from "../../components/seo"

export const Head = () => (
  <SEO
    title="On-Chain Gaming"
    description="The primary goal of residents is to ship an applied ZK project, in one of the areas listed above. Our co-working space will serve as a “hub” for residents over the program."
    image={toykoog}
  ></SEO>
)

export default function Toyko() {
  // 选项列表
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemList = [
    "How to apply?",
    "Who can Participate?",
    "Main Focus",
    "Schedule of Event",
    "Cantact",
  ]
  const handlerClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <>
      {/* 1、这里是logo */}
      <Navi></Navi>

      {/* 2、报名页面 */}
      <div className="tokyo">
        <div className="tokyo_activity ">
          <div className="tokyo_detail">
            <img src={toykotitle}></img>
            <span className="tokyo_timeloca"># On-Chain Gaming @ Tokyo</span>
            <span className="tokyo_timeloca">
              09th April 2023 - 17th April 2023 (1 Week)
            </span>
            <a href="https://antalpha.notion.site/AHH-On-Chain-Gaming-Tokyo-April-2023-ae1e8da8b4e940499cc5bbb19898a457">
              <img src={toykobutton} className="tokyo_button"></img>
            </a>
          </div>
        </div>
      </div>

      {/* 3、问答 */}
      <div className="tokyoFAQsbg">
        <div className="tokyoFAQs">
          <div className="tokyofbox tokyofaqsbox">
            <div className="tokyoboxtitle">FAQs.</div>
            <div className="tokyofaqsbox_list">
              <ul>
                {" "}
                {itemList.map((item, index) => {
                  return (
                    <li
                      className={currentIndex === index ? "tokyohighlight" : ""}
                      key={index.toString()}
                      onClick={() => handlerClick(index)}
                    >
                      {item}
                    </li>
                  )
                })}{" "}
              </ul>
            </div>
          </div>
          <div className="tokyofbox tokyoansbox">
            <div className="tokyoboxtitle">Ans.</div>
            <div className="tokyoansbox_list">
              {currentIndex === 0 ? (
                <div lassName="tokyocontent">
                  <ol>
                    <li>Fill the form 👉</li>
                    <li>
                      Book a time slot for an online interview and be on time.
                    </li>
                    <li>
                      The result will be notified through Email or Telegram.
                    </li>
                  </ol>
                </div>
              ) : currentIndex === 1 ? (
                <div className="tokyocontent tokyocontent2">
                  <ol>
                    <li>Smart Contract Programmers.</li>
                    <li>Web2 Game Designers.</li>
                    <li>Experienced On-Chain Game Developer.</li>
                    <li>Participating EthTokyo Hackathon.</li>
                  </ol>
                </div>
              ) : currentIndex === 2 ? (
                <div className="tokyocontent">
                  <div>
                    Our event will focus on the following areas:
                    <ol>
                      <li>Fun to play and smooth On-Chain Games.</li>
                      <li>Game Developer Tools.</li>
                      <li>
                        Integrate other innovations into On-Chain Gaming, such
                        as ZKP, AA or others. Other On-Chain Game related areas.
                      </li>
                    </ol>
                  </div>
                </div>
              ) : currentIndex === 3 ? (
                <div className="tokyocontent tokyocontent2">
                  <ol>
                    <li>
                      Prior to the EthTokyo, we will organize brainstorming,
                      tech sharing sessions and events between Hackerhouses in
                      Tokyo. Experienced game designers or tech leads from
                      on-chain gaming will help participants develop their
                      projects.
                    </li>

                    <li className="contactgap">
                      During the EthTokyo, HACK all day long. After the
                      EthTokyo, there will be a Virtual Demo Day to showcase the
                      outcomes of our hackers. We will invite VCs and industry
                      experts to attend and review the projects.
                    </li>
                  </ol>
                </div>
              ) : currentIndex === 4 ? (
                <div className="tokyocontent">
                  <div>
                    Host of the house:{" "}
                    <a
                      className="suncontact"
                      href="https://twitter.com/sunbh_eth"
                    >
                      {" "}
                      @Sun
                    </a>
                  </div>

                  <div className="contactgap">
                    Feel free to reach out for anything Hackerhouse related. (Or
                    just to say Hi!)
                  </div>
                </div>
              ) : (
                ""
              )}{" "}
            </div>
          </div>
        </div>
      </div>

      {/* 4、脚注 */}
      <Footer></Footer>
    </>
  )
}
