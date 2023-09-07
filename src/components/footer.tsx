import React, {Component} from "react"
import axios from "axios"
import "./footer.css"
import footerlogo from "../../content/images/footer/antalphalogo.svg"
import notion from "../../content/images/footer/notion.svg"
import youtube from "../../content/images/footer/youtube.svg"
import twitter from "../../content/images/footer/twitter.svg"
import mirror from "../../content/images/footer/mirror.svg"

class Footer extends Component {
    input = React.createRef();
    button = React.createRef();
    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    submitSubscribe = () => {
        const email = this.input.current.value;
        if (!this.validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        this.button.current.disabled = true;

        const formData = {
            "first_url": "https://woshizhengqiuwan.substack.com/publish/dashboard",
            "first_referrer": "https://substack.com/",
            "current_url": "https://woshizhengqiuwan.substack.com/embed",
            "current_referrer": window.location.protocol + '//' + window.location.host,
            "referral_code": "",
            "source": "embed",
            "referring_pub_id": "",
            "additional_referring_pub_ids": "",
            "email": email
        }
        axios.post("/api/substack/v1/free", formData).then((res) => {
            console.log(res);
            this.input.current.value = "";
        }).catch((error) => {
            console.log(error);
        }). finally(() => {
            this.button.current.disabled = false;
        });
    }

    render() {
        return (
            <div className="footer">
                <div className="container mx-auto flex justify-between flex-wrap">
                  <div className="footer-left">
                      <div className="footer-logo">
                          <img src={footerlogo}
                              alt=" "></img>
                      </div>
                      <div className="footer-text">
                          Sign up to get the latest news and updates on Antalpha labs
                      </div>
                      <div className="input-box">
                          {/* <input type="email"
                              ref={
                                  this.input
                              }
                              name="email"
                              placeholder="Your email address"/> */}

                  {/*
                  <iframe src="https://woshizhengqiuwan.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe> */}
                          <iframe src="https://antalphalabs.substack.com/embed" width="380" className="newsletter"
                              style={
                                  {
                                      border: "1px solid transparent",
                                      background: "transparent"
                                  }
                              }/>
                               {/* <button type="button" className="white-box"
                              ref={
                                  this.button
                              }
                              onClick={
                                  this.submitSubscribe
                          }></button> */} </div>
                      <div className="footer-claim">© 2023 Antalphalabs. All Rights Reserved.</div>
                  </div>
                  <div className="footer-right">
                      <a href="https://mirror.xyz/0xeA68d8B403FE1891ae4F309ABeE6D3C9D1089b25">
                          <img src={mirror}
                              alt=" "></img>
                      </a>
                      <a href="https://antalpha.notion.site/Antalpha-HackerHouse-13884d3f3d214ed59d430bb472ce523c">
                          <img src={notion}
                              alt=" "></img>
                      </a>
                      <a href="https://www.youtube.com/channel/UCNFowsoGM9OI2NcEP2EFgrw">
                          <img src={youtube}
                              alt=" "></img>
                      </a>
                      <a href="https://twitter.com/Antalpha_Labs">
                          <img src={twitter}
                              alt=" "></img>
                      </a>
                      <a href="mailto:hello.labs@antalpha.com">
                          <div className="footer-mail">hello.labs@antalpha.com</div>
                      </a>
                  </div>
                </div>
            </div>
        )
    }
}


export default Footer;
