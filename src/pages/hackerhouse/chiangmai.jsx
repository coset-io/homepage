import React from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"
import "./chiangmai.css"

import chiangmaitwitter from "../../../content/images/og/chiangmaitwitter.png"

import ahh from "../../../content/images/hackerhouse/chiangmai/support/ahh.png"
import mantle from "../../../content/images/hackerhouse/chiangmai/support/mantle.png"
import secbit from "../../../content/images/hackerhouse/chiangmai/support/secbit.png"
import scroll from "../../../content/images/hackerhouse/chiangmai/support/scroll.png"

import blockbeats from "../../../content/images/hackerhouse/chiangmai/support/blockbeats.png"
import chain from "../../../content/images/hackerhouse/chiangmai/support/chain.png"
import panews from "../../../content/images/hackerhouse/chiangmai/support/panews.png"
import foresight from "../../../content/images/hackerhouse/chiangmai/support/foresight.png"
import marsbit from "../../../content/images/hackerhouse/chiangmai/support/marsbit.png"

import ethereum from "../../../content/images/hackerhouse/chiangmai/support/ethereum.png"
import mze from "../../../content/images/hackerhouse/chiangmai/support/mze.png"
import buidler from "../../../content/images/hackerhouse/chiangmai/support/buidler.png"
import social from "../../../content/images/hackerhouse/chiangmai/support/social.png"
import oldfashion from "../../../content/images/hackerhouse/chiangmai/support/oldfashion.png"
import starknet from "../../../content/images/hackerhouse/chiangmai/support/starknet.png"
import rebase from "../../../content/images/hackerhouse/chiangmai/support/rebase.png"
import planker from "../../../content/images/hackerhouse/chiangmai/support/plancker.png"
import kucoin from "../../../content/images/hackerhouse/chiangmai/support/kucoin.png"
import movefuns from "../../../content/images/hackerhouse/chiangmai/support/movefuns.png"
import csdn from "../../../content/images/hackerhouse/chiangmai/support/csdn.png"
import ethplanet from "../../../content/images/hackerhouse/chiangmai/support/ethplanet.png"
import ethstorage from "../../../content/images/hackerhouse/chiangmai/support/ethstorage.png"
import logo706 from "../../../content/images/hackerhouse/chiangmai/support/706.png"
import hyper from "../../../content/images/hackerhouse/chiangmai/support/hyper.png"
import aspecta from "../../../content/images/hackerhouse/chiangmai/support/aspecta.png"

import SEO from "../../components/seo"

export default function chiangmai() {
  return (
    <>
      {/* 1、这里是logo */}
      <Navi styles={{}}></Navi>

      {/* 2、报名页面 */}
      <div className="chiangmai">
        <div className="chiangmai_bgleft">{/* <img src={left}></img> */} </div>
        <div className="chiangmai_activity">
          {/* <img src={hh_chiangmai} className="chiangmai_activity_pic"></img>               */}
          <div className="chiangmai_timelink">
            <span className="chiangmai_time">
              08th Apr 2023 - 29th Apr 2023
            </span>

            <a href="https://tally.so/r/nG6RDZ">
              <button
                className="chiangmai_button"
                onclick="changeColor('green')"
              >
                Apply to Hack
              </button>
            </a>
            <div className="chiangmai_contact">
              <span className="chiangmai_add">Interesting in partnering?</span>
              <a href="mailto:hello.labs@antalpha.com">
                <span className="chiangmai_email">hello.labs@antalpha.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="chiangmai_bgright">
          {/* <img src={right}></img> */}{" "}
        </div>
      </div>

      {/* 3、参加我们 */}
      <div className="participate">
        <div className="participate_wrap">
          <div className="participate_title">
            <div className="participate_img"></div>
          </div>
          <div className="participate_content">
            <div className="contentbox4">
              <h2>Call for Participants🔥</h2>
              <p>
                We are excited to announce an upcoming event focused on
                zero-knowledge proof (ZKP) technology. The event aims to&nbsp;
                <span>
                  deepen participants' knowledge and understanding of ZKP and
                  explore its potential applications
                </span>
                .
              </p>
            </div>

            <div className="contentbox1">
              <h2>Who can Participate?</h2>
              <p>
                We welcome participants who meet one or more of the following
                criteria:
              </p>
              <ul>
                <li>
                  Have&nbsp;
                  <span>programming skills</span>, and preferably have
                  participated in the development of Web3 or ZKP-related
                  open-source projects.
                </li>
                <li>
                  Are&nbsp;
                  <span>ZKP engineers or enthusiasts</span>, with a strong
                  mathematical background and published ZKP-related research
                  results.
                </li>
              </ul>
              <p>
                If you are interested in participating, please submit your
                application outlining your experience, qualifications, and
                interest in ZKP technology.
              </p>
              <p>We look forward to reviewing your application.</p>
            </div>
            <div className="contentbox2">
              <h2>Main Focus</h2>
              <p>Our event will focus on the following areas:</p>
              <ul>
                <li>
                  Applications that incorporate&nbsp;
                  <span>ZKP technology</span>, such as games, social
                  applications, NFT, Defi, and other related areas.
                </li>
                <li>
                  Developer&nbsp;
                  <span>tools and infrastructure</span>, such as web-based
                  integrated development environments (IDEs) or command-line
                  tools.
                </li>
                <li>
                  Other&nbsp;
                  <span>ZKP-related areas</span>.
                </li>
              </ul>
            </div>
            <div className="contentbox3">
              <h2>Schedule of Events</h2>
              <p>
                To enhance your knowledge and understanding of ZKP, we will
                provide you with ZKP learning materials prior to the event.
                During the event, we will organize a variety of&nbsp;
                <span>
                  activities, such as lectures, discussions, and brainstorming
                  sessions
                </span>
                &nbsp; to help participants develop project ideas. Additionally,
                we will have mentors available to offer&nbsp;
                <span>technical and strategic guidance</span>.
              </p>
              <p>
                Finally, we will host&nbsp;
                <span>a Demo Day</span>
                to showcase the outcomes of the event. We will invite VCs and
                industry experts to attend and review the projects.
              </p>
              <p>
                If you have any questions or concerns about the event, please do
                not hesitate to contact us. We look forward to working with you!
              </p>
              <p>Thank you for considering this opportunity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4、赞助支持 */}
      <div className="chiangmai_support">
        {/* <div className="support_box"></div>  */}
        <div className="cohost">
          <div className="titleimg1"></div>
          <div className="contentsupport">
            <div className="bg1">
              <img src={ahh} loading="lazy"></img>
            </div>
            <div className="bg1">
              <img src={mantle} loading="lazy"></img>
            </div>
          </div>
        </div>

        <div className="techsupport">
          <div className="titleimg2"></div>
          <div className="contentsupport">
            <div className="bg1">
              <img src={secbit} loading="lazy"></img>
            </div>
            <div className="bg1">
              <img src={scroll} loading="lazy"></img>
            </div>
          </div>
        </div>

        {/* <div className="talentsupport">
                    <div className="titleimg3"></div>
                    <div className="contentsupport">
                        <div className="bg1">
                            <img src={atcapital} loading="lazy"></img>
                        </div>
                    </div>
                </div> */}

        <div className="hackerid">
          <div className="titleimg6"></div>
          <div className="contentsupport">
            <div className="bg1">
              <img src={aspecta} loading="lazy"></img>
            </div>
          </div>
        </div>

        <div className="communitysupport">
          <div className="titleimg4"></div>
          <div className="contentsupport">
            <div className="bg2">
              <img src={buidler} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={csdn} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={ethereum} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={ethplanet} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={ethstorage} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={hyper} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={kucoin} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={movefuns} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={mze} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={planker} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={rebase} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={starknet} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={social} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={oldfashion} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={logo706} loading="lazy"></img>
            </div>
          </div>
        </div>

        <div className="media">
          <div className="titleimg5"></div>
          <div className="contentsupport">
            <div className="bg2">
              <img src={blockbeats} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={chain} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={marsbit} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={panews} loading="lazy"></img>
            </div>
            <div className="bg2">
              <img src={foresight} loading="lazy"></img>
            </div>
          </div>
        </div>
      </div>
      {/* 5、脚注 */}
      <Footer></Footer>
    </>
  )
}

export const Head = () => (
  <SEO
    title="Antalpha Labs-Web3 developers community"
    description="The primary goal of residents is to ship an applied ZK project, in one of the areas listed above. Our co-working space will serve as a “hub” for residents over the program."
    image={chiangmaitwitter}
  ></SEO>
)
