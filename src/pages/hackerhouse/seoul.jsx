import React from "react"
import { useState } from "react"
import "../../styles/seoul.css"
import { Link } from "gatsby"
import smalllogo from "../../../content/images/navi/logo.svg"
import SEO from "../../components/seo"
import { siteConfig } from '../../config'

import schedule1 from "../../../content/images/hackerhouse/seoul/schedule1.png"
import schedule2 from "../../../content/images/hackerhouse/seoul/schedule2.png"
import schedule3 from "../../../content/images/hackerhouse/seoul/schedule3.png"
import apply from "../../../content/images/hackerhouse/seoul/apply.png"
import detailicon from "../../../content/images/hackerhouse/seoul/detailicon.png"
import seoulog from "../../../content/images/og/seoul.png"

export const Head = () => (
  <SEO
    title="Web3+AI"
    description="The primary goal of residents is to ship an applied ZK project, in one of the areas listed above. Our co-working space will serve as a “hub” for residents over the program."
    image={seoulog}
  ></SEO>
)

export default function Seoul() {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <>
      {/* 1、这里是导航栏 */}
      {/* PC端 */}
      <div className="seoul-web seoul">
        <Link to="/">
          <div className="seoul-logo"></div>
        </Link>
        <ul className="seoul-navi-links">
          <li className="seoul-navi-links__item1">
            <Link to="/hackerhouse">Hacker House</Link>
            <div className="seoul-line"></div>
          </li>
          <li className="seoul-navi-links__item2">
            <Link to={siteConfig.telegram}>Join Us</Link>
            <div className="seoul-line"></div>
          </li>
        </ul>
      </div>
      {/* 移动端 */}
      <div className="seoul-mobile">
        <a href="/" className="seoul-mobilelogo">
          <img src={smalllogo}></img>
        </a>
        <div
          className="seoul-menu"
          onClick={() => setIsNavShowing((prev) => !prev)}
        ></div>
        {isNavShowing ? (
          <ul className="seoul-navi-links">
            <li className="seoul-navi-links__item">
              <Link to="https://labs.antalpha.com/hackerhouse">
                Hacker House Event
              </Link>
            </li>
            <li className="seoul-navi-links__item">
              <Link to={siteConfig.telegram}>Join Us</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>

      {/* 2、活动页面 */}
      <div className="seoul2">
        <div className="seoul-video-bg">
          <video
            className="seoul-video"
            prelod="auto"
            loop
            playsInline
            autoPlay
            muted
            src="https://qiuqiu-1314770506.cos.ap-singapore.myqcloud.com/WeChat_20230509113754.mp4 "
          ></video>
          <div className="seoul-detail">
            <div className="seoul-detail_title">
              <p>
                <span className="blod">AI +</span> WEB
                <span className="blod">3</span>
              </p>
              <p>HACKERHOUSE</p>
            </div>
            <div className="detail-box-wrap">
              <div className="detail-box detail-box1">
                <img src={detailicon} className="detail-icon"></img>
                <p className="detail-box-inline">
                  31st May 2023 - 5th June 2023
                </p>
                <p>&nbsp;&nbsp;6 Days Co living</p>
              </div>
              <div className="detail-box detail-box2">
                <p className="detail-box-inline">Seoul</p>
                <p>&nbsp;&nbsp;South Korea</p>
              </div>
              <div className="detail-box detail-box3">
                <p className="detail-box-inline">AI+Web3</p>
                <p>&nbsp;Hackerhouse</p>
              </div>
            </div>
            <div className="seoul-hackerhouse-text">
              <a
                href="https://tally.so/r/3XL664"
                className="seoul-hackerhouse-detail"
              >
                <button className="seoul_button seoul_button2">
                  APPLY NOW
                </button>
              </a>

              {/* <a href="https://tally.so/r/3XL664"  className="seoul-hackerhouse-detail" id="slide-button">
                <div className="slide-backgroud"><img src={whitearrow} ></img></div>
                <div className="seoul_button seoul_button2 defdiv">APPLY NOW</div>
                </a> */}

              {/* <div className="seoul-hackerhouse-detail">
                Antalpha HackerHouse is a&nbsp;
                <span className="blod">X week co-living community</span>&nbsp;
                providing Quality Free Accommodations for developers who is or
                will be working on&nbsp;
                <span className="blod">open-source</span> projects Theme, time
                and location varies from one event to another but our excitement
                to meet free-spirited hackers doesn’t !
              </div> */}
            </div>
          </div>
        </div>

        {/* 3、报名详情页面 */}
        <div className="seoul-item-text--web">
          <div className="seoul-title-box">
            <div className="seoul-title-arrow"></div>
            <div className="seoul-title">OUR SCHEDULE</div>
          </div>
          <div className="schedule">
            <div className="schedule-left">
              <div>
                <ul className="schedule schdule-leftbox">
                  <li>
                    <div className="circle">S/1</div>
                    <div className="schedule-title">Prior to EthSeoul</div>
                    <div className="schedule-detail">
                      We will organize brainstorming, tech sharing sessions and
                      events. Experienced devs from different projects that
                      relates to the theme will share their experience and
                      knowledge.
                    </div>
                    <img src={schedule1}></img>
                  </li>
                  <li>
                    <div className="circle">S/2</div>
                    <div className="schedule-title">DURING THE ETHSEOUL</div>
                    <div className="schedule-detail">
                      HACK all day long! You will have the opportunity to
                      participate in a wide range of activities that will keep
                      you busy throughout the day. From early morning until late
                      at night, you can HACK to your heart's content, working on
                      a range of exciting projects and challenges to push your
                      skills to the limit.
                    </div>
                    <img src={schedule2}></img>
                  </li>
                </ul>
              </div>
              <div>
                <div className="participate-title">WHO CAN PARTICIPATE</div>
                <div>
                  <ul className="participate-ppl">
                    <li>Web3 or AI Devs.</li>
                    <li>Have a project idea.</li>
                    <li>Participating EthSeoul Hackathon.</li>
                  </ul>
                </div>
                <div className="participate-attention">
                  <div className="flower">*</div>
                  <span className="quetion">
                    Any questions or concerns about the event,&nbsp; feel free
                    to contact us.&nbsp; Looking forward to meet you!
                  </span>
                </div>
              </div>
            </div>
            <div className="schedule-right">
              <div className="schdule-rightbox">
                <div className="circle">S/3</div>
                <div className="schedule-title">AFTER THE ETHSEOUL</div>
                <div className="schedule-detail">
                  There will be a Demo Day to showcase the outcomes of our
                  hackers. We will invite VCs and industry experts to attend and
                  review the projects.
                </div>
                <img src={schedule3}></img>
              </div>
              <div className="applynow">
                <span className="applynow-title">
                  ARE YOU READY TO LAUNCH YOUR WEB3 PROJECT?
                </span>
                <img src={apply}></img>
                <a href="https://tally.so/r/3XL664">
                  <button className="seoul_button">APPLY NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="seoul-item-text--mobile">
          <div className="seoul-title-box">
            <div className="seoul-title-arrow"></div>
            <div className="seoul-title">OUR SCHEDULE</div>
          </div>

          <div className="schedule">
            <div className="">
              <div>
                <ul className="schedule schdule-leftbox">
                  <li>
                    <div className="circle">S/1</div>
                    <div className="schedule-title">Prior to EthSeoul</div>
                    <div className="schedule-detail">
                      We will organize brainstorming, tech sharing sessions and
                      events. Experienced devs from different projects that
                      relates to the theme will share their experience and
                      knowledge.
                    </div>
                    <img src={schedule1}></img>
                  </li>
                  <li>
                    <div className="circle">S/2</div>
                    <div className="schedule-title">DURING THE ETHSEOUL</div>
                    <div className="schedule-detail schedule-detail2">
                      HACK all day long! You will have the opportunity to
                      participate in a wide range of activities that will keep
                      you busy throughout the day. From early morning until late
                      at night, you can HACK to your heart's content, working on
                      a range of exciting projects and challenges to push your
                      skills to the limit.
                    </div>
                    <img src={schedule2}></img>
                  </li>

                  <li>
                    <div className="circle">S/3</div>
                    <div className="schedule-title">AFTER THE ETHSEOUL</div>
                    <div className="schedule-detail">
                      There will be a Demo Day to showcase the outcomes of our
                      hackers. We will invite VCs and industry experts to attend
                      and review the projects.
                    </div>
                    <img src={schedule3}></img>
                  </li>
                </ul>
              </div>
              <div className="participate-gap">
                <div className="participate-title">WHO CAN PARTICIPATE</div>
                <div>
                  <ul className="participate-ppl">
                    <li>Web3 or AI Devs.</li>
                    <li>Have a project idea.</li>
                    <li>Participating EthSeoul Hackathon.</li>
                  </ul>
                </div>
                <div className="participate-attention">
                  <span className="flower">*</span>
                  <span className="quetion">
                    Any questions or concerns about the event,&nbsp; feel free
                    to contact us.&nbsp; Looking forward to meet you!
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <div className="applynow">
                <span className="applynow-title">
                  ARE YOU READY TO LAUNCH YOUR WEB3 PROJECT?
                </span>
                <img src={apply}></img>

                <a href="https://tally.so/r/3XL664">
                  <button className="seoul_button">APPLY NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4、尾栏 */}
      {/* <Footer></Footer> */}
    </>
  )
}
