import React, { useState } from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"

import "../../styles/zkp.css"
import star from "../../../content/images/hackerhouse/star.png"
import denverbg from "../../../content/images/hackerhouse/denverbg2.jpg"
import denverhouse from "../../../content/images/hackerhouse/denverhouse.png"
import twitter from "../../../content/images/hackerhouse/twitter.png"

import photo_right_arrow from "../../../content/images/hackerhouse/photo_right_arrow.png"
import house1 from "../../../content/images/hackerhouse/house1.png"
import house2 from "../../../content/images/hackerhouse/house2.png"
import house3 from "../../../content/images/hackerhouse/house3.png"
import house4 from "../../../content/images/hackerhouse/house4.png"
import house5 from "../../../content/images/hackerhouse/house5.png"
import house6 from "../../../content/images/hackerhouse/house6.png"
import Swipper from "../../components/swipper/index.js"

import SEO from "../../components/seo"

export const Head = () => (
  <SEO title="Antalpha Labs-Web3 developers community" />
)

export default function Zkp() {
  // 选项列表
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemList = [
    "Who can Participate？",
    "What to expect？",
    "Who are WE?",
    "About the HackerHouse",
    "How to apply?",
  ]
  const handlerClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <>
      <Navi></Navi>
      <div className="zkp-container">
        {/* 1、这里是logo */}

        {/* 2、报名页面 */}
        <div className="denver">
          <img className="denver_bg" src={denverbg}></img>
          <div className="denver_activity ">
            <div className="denver_box">
              <span className="denver_title">Antalpha HackerHouse</span>
              <span className="denver_theme"># ZKP</span>
            </div>

            <div className="denver_detail">
              <span className="denver_timeloca">
                21st Feb 2023 - 06th Mar 2023
              </span>

              <span className="denver_timeloca">Denver, Colorado</span>
              <a href="https://antalpha.notion.site/AHH-ZKP-Denver-Feb2023-f91b2c5cf7c54e0895d1a7dba473228a">
                <button className="denver_button">Final Demo</button>
              </a>
              <div className="denver_contact">
                <span className="denver_add">Interesting in partnering?</span>
                <a href="mailto:hello.labs@antalpha.com">
                  <span className="denver_email">hello.labs@antalpha.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3、问答 */}
        <div className="FAQsbg">
          <div className="FAQs">
            <div className="fbox faqsbox">
              <div className="boxtitle">FAQs.</div>
              <div className="faqsbox_list">
                <ul>
                  {" "}
                  {itemList.map((item, index) => {
                    return (
                      <li
                        className={currentIndex === index ? "highlight" : ""}
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
            <div className="fbox ansbox">
              <div className="boxtitle">Ans.</div>
              <div className="ansbox_list">
                <div>
                  <img src={star}></img>
                </div>
                {currentIndex === 0 ? (
                  <div>
                    <div className="ans">
                      Mandatory requirements (for ETH Denver AHH only):
                    </div>
                    <ul>
                      <li>
                        ZKProof-Engineers or ZKProof-Enthusiasts (who’s willing
                        to combine ZKP with their field of expertise, such as AI
                        engineer or game developer).{" "}
                      </li>
                      <li>Participating Buidlathon during ETHDenver.</li>
                      <li>Excited to make new friends!</li>
                    </ul>
                  </div>
                ) : currentIndex === 1 ? (
                  <div className="content">
                    <ol>
                      <li>
                        A quiet and comfy place to stay for two weeks, free of
                        charge.
                      </li>
                      <li>Potential team members to hack together.</li>
                      <li>Other bright minds who are working on ZKP.</li>
                      <li>
                        Advice and support from leading developers in ZKP.
                      </li>
                      <li>
                        Planned (or sometimes random) workshops and technical
                        discussions.
                      </li>
                    </ol>
                  </div>
                ) : currentIndex === 2 ? (
                  <div>
                    <div>
                      Antalpha Labs is a Web3 developer community dedicated to
                      push the boundaries of crypto space by supporting the
                      innovation and success of open-source projects.
                    </div>
                  </div>
                ) : currentIndex === 3 ? (
                  <div>
                    <div>
                      Antalpha HackerHouse is a X week co-living community,
                      providing quality free living space for developers who is
                      or will be working on open-source projects. Theme, time
                      and location varies from one event to another, but our
                      excitement to meet free-spirited hackers doesn’t!
                    </div>
                  </div>
                ) : currentIndex === 4 ? (
                  <div className="content">
                    <div>
                      <ol>
                        <li>
                          Fill this form and book a time slot for an online
                          interview.
                        </li>
                        <li>Be on time for the interview.</li>
                        <li>
                          The result will be notified through Email or Phone.
                        </li>
                      </ol>
                    </div>
                  </div>
                ) : (
                  ""
                )}{" "}
              </div>
            </div>
          </div>

          {/* 4、住宿条件 */}
          <div className="denver_photos">
            <div className="denver_photos_leftbox">
              <div className="denver_house_title">
                <div className="photos_title">HackerHouse Denver Photos</div>
                <div className="photos_right_arrow">
                  <img src={photo_right_arrow}></img>
                </div>
              </div>
              <a href="https://twitter.com/Antalpha_Labs">
                <button className="twitterbutton">
                  <img src={twitter}></img>Join our community
                </button>
              </a>
              <div className="denverhousimg">
                <img src={denverhouse} alt=""></img>
              </div>
            </div>
            <div className="denver_photos_rightbox">
              <div className="swipper">
                <Swipper>
                  <div className="box">
                    {" "}
                    <img src={house1}></img>
                  </div>
                  <div className="box">
                    {" "}
                    <img src={house2}></img>
                  </div>
                  <div className="box">
                    {" "}
                    <img src={house3}></img>
                  </div>
                  <div className="box">
                    {" "}
                    <img src={house4}></img>
                  </div>
                  <div className="box">
                    {" "}
                    <img src={house5}></img>
                  </div>
                  <div className="box">
                    {" "}
                    <img src={house6}></img>
                  </div>
                </Swipper>
              </div>
            </div>
          </div>
        </div>

        {/* 5、脚注 */}
        <Footer></Footer>
      </div>
    </>
  )
}
