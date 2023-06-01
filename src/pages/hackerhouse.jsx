import React, { useState } from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import "../styles/hackerhouse.css"
import Navi from "../components/navi"
import SEO from "../components/seo"
import lens from "../../content/images/hackerhouse/lens.svg"
import comingsoon from "../../content/images/hackerhouse/comingsoon.svg"
import timearrow from "../../content/images/hackerhouse/timearrow.svg"
import rightarrow from "../../content/images/hackerhouse/rightarrow.svg"

import events from "../../content/images/og/events.png"

export default function HackerHouse() {
  const cardlist = [
    {
      signuplink: "/hackerhouse/paris",
      theme: "# Pari",
      name: "x Pari",
      startDate: "15th July, 2023",
      endDate: "24th July, 2023",
      location: "@Paris",
      belong: "UPCOMING",
    },

    {
      signuplink: "/hackerhouse/montenegro",
      theme: "# Account Abstraction",
      name: "",
      startDate: "19th May, 2023",
      endDate: "24th May, 2023",
      location: "@Podgorica",
      belong: "ONGOING",
    },

    {
      signuplink: "/hackerhouse/seoul",
      theme: "# AI + Web3",
      name: "",
      startDate: "31st May, 2023",
      endDate: "5th June, 2023",
      location: "@Seoul",
      belong: "ONGOING",
    },

    {
      signuplink: "/hackerhouse/chiangmai",
      theme: "# Zkp",
      name: "",
      startDate: "08th Apr, 2023",
      endDate: "29th Apr, 2023",
      location: "@Chiang Mai",
      belong: "PAST",
    },

    {
      signuplink: "/hackerhouse/tokyo",
      theme: "# On-Chain Gaming",
      name: "",
      startDate: "09th Apr, 2023",
      endDate: "17th, Apr 2023",
      location: "@Tokyo",
      belong: "PAST",
    },

    {
      signuplink: "/hackerhouse/zkp",
      theme: "# Zkp",
      name: "x ETHDenver",
      startDate: "21st Feb, 2023",
      endDate: "06th, Mar 2023",
      location: "@Denver",
      belong: "PAST",
    },
    {
      signuplink: "/hackerhouse/move",
      theme: "# Move",
      name: "x NonceGeek",
      startDate: "13th Feb, 2023",
      endDate: "05th, Mar 2023",
      location: "@Dali",
      belong: "PAST",
    },
    {
      signuplink:
        "https://www.notion.so/antalpha/1a7771e12a444d1b96dd8cfc3f72ed4d?v=b373397745164802ad82571141dd5fcc", // 跳转到notion项目页面
      theme: "# Infra and open source tools",
      name: "",
      startDate: "1st Dec, 2022",
      endDate: "21st Dec, 2022",
      location: "@Dali",
      belong: "PAST",
    },
  ]
  const [filteredList, setFilteredList] = useState(cardlist)
  const [menuType, setMenuType] = useState(0)
  const navList = ["All", "Upcoming", "Ongoing", "Past"]
  const onNavClick = (value, idx) => {
    if (value === "All") {
      return setFilteredList(() => cardlist)
    }
    setMenuType(idx)
    const target = cardlist.filter(
      (item) => item.belong.toUpperCase() === value.toUpperCase(),
    )
    setFilteredList(() => target)
    console.log(filteredList)
  }
  return (
    <>
      <Navi></Navi>
      {/* 1、这里是标题和活动介绍 */}
      <div className="hackerhouse_container">
        <div className="hackerhouse_navi">
          <div className="hackerhouse_navi_left">
            <div className="hackerhouse_navi_title">HackerHouse Events</div>

            <div className="hackerhous_detail">
              <span>
                Antalpha HackerHouse is a X week co-living community that
                provides quality free living space for developers who is or will
                be working on open-source projects.
              </span>
              <span>
                Theme, time and location varies from one event to another, but
                our excitement to meet free-spirited hackers doesn’t!!
              </span>
            </div>
          </div>
          <div className="hackerhouse_navi_right">
            <img src={lens} alt=""></img>
          </div>
        </div>
        <div className="hackerhouse_events">
          <div className="hackerhouse_navi_eventslist">
            <ul className="eventslist">
              {navList.map((item, idx) => (
                <li
                  key={`event-${item.name}-${signuplink}`}
                  style={{
                    color: menuType == idx ? "blue" : "",
                  }}
                  onClick={() => onNavClick(item, idx)}
                >
                  {item}
                  <div className="line"></div>
                </li>
              ))}{" "}
            </ul>
          </div>
          <div className="event_container">
            {filteredList.length !== 0 ? (
              filteredList.map((item, idx) => (
                <div key={`event-${item.name}-${signuplink}`}>
                  {/* <a href={item.signuplink}> */}
                  <Link to={item.signuplink}>
                    <div className="event_card">
                      <div className="event_tag">
                        <button className={item.belong}>{item.belong}</button>

                        <div className="event_theme">{item.theme}</div>
                      </div>
                      <div className="event_name">
                        <div>Antalpha HackerHouse</div>
                        {item.name}
                      </div>

                      <div className="event_timeandlocation">
                        <div className="time">
                          <span>{item.startDate}</span>
                          <img src={timearrow} alt=""></img>
                          <span>{item.endDate}</span>
                        </div>
                        <div className="location">{item.location}</div>
                      </div>
                      <div className="event_footer">
                        <span>Learn More</span>

                        <img src={rightarrow} loading="lazy" alt=""></img>
                      </div>
                    </div>
                  </Link>
                  {/* </a> */}{" "}
                </div>
              ))
            ) : (
              <img src={comingsoon} loading="lazy" className="coming_img" />
            )}{" "}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export const Head = () => (
  <SEO
    title="HackerHouse Events"
    description="Antalpha HackerHouse is a X week co-living community that provides quality free living space for developers who is or will be working on open-source projects."
    image={events}
  />
)
