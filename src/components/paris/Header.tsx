import React, { useState, ComponentProps } from "react"
import "./navi.css"

// @ts-ignore
import logo from "../../../content/images/antalpha/antalphalogo.svg"
// @ts-ignore
import logo2 from "../../../content/images/antalpha/antalphalogo2.svg"
import { siteConfig } from "../../config"

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
        <a href="/" className="inline-flex items-center gap-[0.625rem] pl-12">
          <img src={logo} alt="Antalpha logo icon" />
          <img src={logo2} alt="Antalpha logo heading" />
        </a>
        <ul className="navi-links">
          <li className="navi-links__item1">
            <a href="https://labs.antalpha.com/hackerhouse/" rel="same">
              Hacker House
            </a>
            <div className="line"></div>
          </li>
          <li className="navi-links__item2">
            <a href={siteConfig.telegram} target="_blank">
              Join Us
            </a>
            <div className="line"></div>
          </li>
        </ul>
      </div>
      {/* 移动端 */}
      <div className="mobile">
        <a href="/" className="inline-flex items-center">
          <svg
            width={167.5}
            height={30}
            viewBox="0 0 134 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3521_1868)">
              <g clip-path="url(#clip1_3521_1868)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.4634 10.7409H31.373L35.6268 1.88574H36.2558L40.5096 10.7409H39.4172L35.9434 3.5016L32.4634 10.7409ZM48.1491 9.4085V1.88574H49.136V10.7409H48.0188L41.7415 3.80988V7.07471L40.7546 8.06988V1.88574H41.336L48.1491 9.4085ZM50.2815 2.88298V1.88574H58.6712V2.88298H54.9698V9.74367L53.9829 10.7409V2.88298H50.2815ZM58.24 10.7409H57.1476L61.4035 1.88574H62.0304L66.2841 10.7409H65.1917L61.7179 3.5016L58.24 10.7409ZM67.3753 1.88574L68.3622 2.88298V9.74367H72.556L73.5408 10.7388V10.7409H67.3753V1.88574ZM74.4791 10.7409V1.88574H77.8846C79.3639 1.88574 80.5701 3.09402 80.5805 4.59195C80.5617 6.0816 79.3619 7.28367 77.8846 7.28367H77.2205L76.2396 6.29264H77.8846C78.8198 6.29264 79.577 5.52919 79.577 4.58367C79.577 3.63816 78.8198 2.87264 77.8846 2.87264H75.466V10.7409H74.4791ZM81.7002 1.88574H81.7023L82.6871 2.88298V5.80229H87.7706V1.88574L88.7595 2.88298V10.7223L87.7706 9.72505V6.8016H82.6871V10.7595L81.7002 9.76229V1.88574ZM89.733 10.7409L93.9868 1.88574H94.6157L98.8695 10.7409H97.7792L94.3013 3.5016L90.8233 10.7409H89.733Z"
                  fill="#01011A"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.3599 14.8595L31.373 13.8623V22.7175H37.5406V22.7154L36.5537 21.7202H32.3599V14.8595Z"
                fill="#01011A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.4258 22.7175H39.5079L42.9568 15.4802L46.4037 22.7175H47.4837L43.2651 13.8623H42.6423L38.4258 22.7175Z"
                fill="#01011A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M58.2926 18.5484C58.6961 18.6291 59.083 18.7512 59.4533 18.925C59.7057 19.0367 59.9167 19.2146 60.0761 19.4505C60.2209 19.7257 60.2788 20.0277 60.254 20.3257C60.1898 21.1202 59.5154 21.6933 58.7292 21.7595C58.6774 21.7657 58.6216 21.7677 58.5698 21.7677C58.5326 21.7677 58.4892 21.7677 58.4581 21.7615C58.4271 21.7677 58.4023 21.7677 58.3733 21.7677C57.9409 21.7677 57.5167 21.6415 57.1485 21.4139C56.8216 21.1905 56.5733 20.8677 56.4367 20.4953L56.4098 20.4229L55.5781 20.8305L55.6009 20.8884C55.7788 21.4181 56.1367 21.8733 56.5981 22.1733C57.1257 22.4919 57.7298 22.6595 58.3402 22.6595C58.3774 22.6595 58.4167 22.6595 58.4561 22.6574H58.5078C59.0023 22.6574 59.4967 22.5457 59.9436 22.3346C60.3512 22.1443 60.6947 21.8443 60.9388 21.4615C61.1788 21.0808 61.3009 20.6402 61.2967 20.1829C61.3278 19.5788 61.1085 18.9788 60.6967 18.5422C60.2974 18.1471 59.6292 17.8471 58.7105 17.6484C58.3443 17.5781 57.9885 17.4643 57.643 17.3133C57.4174 17.216 57.2271 17.0588 57.0761 16.8498C56.9767 16.6636 56.923 16.4588 56.9105 16.256C56.8671 15.4843 57.5043 14.8698 58.2657 14.8077C58.3154 14.8057 58.365 14.8036 58.4167 14.8036C58.4623 14.8036 58.5036 14.8057 58.545 14.8077C59.4078 14.8077 59.985 15.1595 60.2623 15.8546L60.2912 15.925L61.1188 15.5339L61.0961 15.4719C60.9347 15.0043 60.6161 14.6029 60.2002 14.3464C59.7243 14.0629 59.1823 13.916 58.6298 13.916C58.5988 13.916 58.5636 13.9181 58.5264 13.9181H58.454C57.9885 13.9181 57.5354 14.0153 57.1112 14.2057C56.7347 14.3774 56.4119 14.6546 56.1905 15.0084C55.9733 15.3684 55.8636 15.7864 55.8719 16.2146C55.8471 16.7712 56.0581 17.3153 56.445 17.7084C56.834 18.0829 57.4733 18.3726 58.2926 18.5484Z"
                fill="#01011A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.2413 16.1506C54.262 14.6506 52.9461 13.8623 51.4027 13.8623H48.6758V22.7175H52.2613C53.8296 22.7175 54.711 21.6085 54.7627 20.2637C54.8061 19.1423 54.0716 18.383 53.211 18.0602C53.8751 17.6175 54.233 16.972 54.2413 16.1506ZM49.6372 14.761V21.8183H52.1841C53.2579 21.8183 53.7752 21.0135 53.7772 20.159C53.7772 19.0624 52.7965 18.5328 51.8303 18.5307C51.7869 18.5328 50.8517 18.5079 50.8517 18.5079L49.9931 17.6059C49.9931 17.6059 51.7869 17.6079 51.8283 17.61C52.7552 17.5645 53.2662 16.9666 53.2786 16.1514C53.2972 15.1024 52.391 14.761 51.3276 14.761H49.6372Z"
                fill="#01011A"
              />
              <g clip-path="url(#clip2_3521_1868)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0637 24H4.02642C2.10372 24 0.544922 22.4415 0.544922 20.5188V3.4815C0.544922 1.5588 2.10372 0 4.02642 0H21.0637C22.9864 0 24.5449 1.5588 24.5449 3.4815V20.5188C24.5449 22.4415 22.9864 24 21.0637 24Z"
                  fill="#2222FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.86328 12.4057L11.3032 16.5007V15.0805L4.95488 11.9998L11.3032 8.91971V7.49951L2.86328 11.5945V12.4057Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7891 7.49951V8.91971L20.1371 12.0001L13.7891 15.0808V16.501L22.2287 12.4057V11.5945L13.7891 7.49951Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_3521_1868">
                <rect
                  width="132.621"
                  height="24"
                  fill="white"
                  transform="translate(0.544922)"
                />
              </clipPath>
              <clipPath id="clip1_3521_1868">
                <rect
                  width="101.589"
                  height="8.89655"
                  fill="white"
                  transform="translate(31.373 1.8623)"
                />
              </clipPath>
              <clipPath id="clip2_3521_1868">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.544922)"
                />
              </clipPath>
            </defs>
          </svg>
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
              <a href={siteConfig.telegram}>Join Us</a>
            </li>
          </ul>
        ) : (
          <></>
        )}{" "}
      </div>
    </header>
  )
}
