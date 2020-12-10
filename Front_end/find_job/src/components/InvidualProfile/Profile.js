import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./blue.css"
import axiosInstance from "../../utils/axios"
export const Profile = (props) => {

    const [data, setData] = useState()

    const convertLevel = (g) => {
        if (g === "1") return "★ ☆ ☆ ☆ ☆"
        if (g === "2") return "★ ★ ☆ ☆ ☆"
        if (g === "3") return "★ ★ ★ ☆ ☆"
        if (g === "4") return "★ ★ ★ ★ ☆"
        if (g === "5") return "★ ★ ★ ★ ★"
        if (g === "0") return ""
    }


    const a = {
        email: "mt766157@gmail.com"
    }

    useEffect(() => {
        axiosInstance.get(`/profile?email=${a.email}`).then(res => {
            console.log(res.data)
            setData(res.data);
            console.log(data)
        })

    }, [])

    return (
        <div> {data ? <div><div class="Profile" style={{
            backgroundImage: "url(" + "./images/bg.jpg" + ")",
            fontSize: 13
        }}>
            <div id="wrapper">
                <div className="wrapper-top" style={{
                    backgroundImage: "url(" + "./images/btop.jpg" + ")"
                }}
                ></div>
                <div className="wrapper-mid" style={{
                    backgroundImage: "url(" + "./images/bmid.jpg" + ")"
                }}>
                    <div id="paper">
                        <div className="paper-top" style={{
                            backgroundImage: "url(" + "./images/ptop.jpg" + ")"
                        }}></div>
                        <div id="paper-mid" style={{
                            backgroundImage: "url(" + "./images/pmid.jpg" + ")"
                        }}>
                            <div className="entry">

                                <img className="portrait" style={{
                                    backgroundImage: "url(" + "./images/frame.jpg" + ")"
                                }} src="./images/image.jpg" alt="John Smith" />


                                <div className="self">
                                    <h1 className="name" >{data.fisrtName + " " + data.lastName}<br />
                                        <span style={{ marginTop: "5px" }}>{data.major}</span></h1>
                                    <ul>
                                        <li className="ad" style={{
                                            backgroundImage: "url(" + "./images/icn-ad.gif" + ")"
                                        }}>{data.addrress}</li>
                                        <li className="mail" style={{
                                            backgroundImage: "url(" + "./images/icn-mail.gif" + ")"
                                        }}>{data.email}</li>
                                        <li className="tel" style={{
                                            backgroundImage: "url(" + "./images/icn-tel.gif" + ")"
                                        }}>{data.phoneNumber}</li>

                                    </ul>
                                </div>


                                <div className="social">
                                    <ul>
                                        <li><a className='north' href="#" title="Download .pdf"><img src="images/icn-save.jpg" alt="Download the pdf version" /></a></li>
                                        <li><a className='north' href="javascript:window.print()" title="Print"><img src="images/icn-print.jpg" alt="" /></a></li>
                                        <li><a className='north' id="contact" href="contact/index.html" title="Contact Me"><img src="images/icn-contact.jpg" alt="" /></a></li>
                                        <li><a className='north' href="#" title="Follow me on Twitter"><img src="images/icn-twitter.jpg" alt="" /></a></li>
                                        <li><a className='north' href="#" title="My Facebook Profile"><img src="images/icn-facebook.jpg" alt="" /></a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="entry">
                                <h2>OBJECTIVE</h2>
                                <p>{data.objective}</p>
                            </div>

                            <div className="entry">
                                <h2>EDUCATION</h2>
                                <div className="content">
                                    <h3>{data.education.start} - {data.education.graduated}</h3>
                                    <p>{data.education.school} <br />
                                        <em>{data.education.majors}</em></p>
                                </div>
                                {data.education1.school === "" ? <div></div> : <div className="content">
                                    <h3>{data.education1.start} - {data.education1.graduated}</h3>
                                    <p>{data.education1.school} <br />
                                        <em>{data.education1.majors}</em></p>
                                </div>}

                            </div>

                            <div className="entry">
                                <h2>EXPERIENCE</h2>
                                <div className="content">
                                    <h3>{data.experience.start} - {data.experience.end}</h3>
                                    <p>{data.experience.text.map((item) => {
                                        return <div style={{ marginBottom: 5 }}> {item}</div>
                                    })}<br /></p>
                                </div>
                                {data.experience1.text === "" ? <div></div> : <div className="content">
                                    <h3>{data.experience1.start} - {data.experience1.end}</h3>
                                    <p>{data.experience1.text.map((item) => {
                                        return <div style={{ marginBottom: 5 }}>{item}</div>
                                    })}<br /></p>
                                </div>}

                            </div>

                            <div className="entry">
                                <h2>CERTIFICATE</h2>
                                <div className="content">
                                    <h3>Specialized certificate</h3>
                                    <ul className="skills">
                                        {data.certificate.specialized.map((item) => {
                                            return <li style={{
                                                backgroundImage: "url(" + "./images/bullet.gif" + ")"
                                            }}>{item}</li>
                                        })}

                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>Languages certificate</h3>
                                    <ul className="skills">
                                        {data.certificate.language.map((item) => {
                                            return <li style={{
                                                backgroundImage: "url(" + "./images/bullet.gif" + ")"
                                            }}>{item}</li>
                                        })}

                                    </ul>
                                </div>
                            </div>

                            <div className="entry">
                                <h2>SKILLS</h2>
                                <div className="content">
                                    <ul className="skills" style={{ marginBottom: 10 }}>
                                        {data.skill1.type === "" ? null : <li style={{
                                            backgroundImage: "url(" + "./images/bullet.gif" + ")"
                                        }}>{data.skill1.type + "\t" + convertLevel(data.skill1.level)}</li>}
                                    </ul>
                                    <ul className="skills" style={{ marginBottom: 10 }}>
                                        {data.skill2.type === "" ? null : <li style={{
                                            backgroundImage: "url(" + "./images/bullet.gif" + ")"
                                        }}>{data.skill2.type + "     " + convertLevel(data.skill2.level)}</li>}
                                    </ul>
                                    <ul className="skills" style={{ marginBottom: 10 }}>
                                        {data.skill3.type === "" ? null : <li style={{
                                            backgroundImage: "url(" + "./images/bullet.gif" + ")"
                                        }}>{data.skill3.type + "         " + convertLevel(data.skill3.level)}</li>}
                                    </ul>

                                </div>


                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="paper-bottom"
                            style={{
                                backgroundImage: "url(" + "./images/pbottom.jpg" + ")"
                            }}></div>
                    </div>

                </div>
                <div className="wrapper-bottom" style={{
                    backgroundImage: "url(" + "./images/bbottom.jpg" + ")"
                }}></div>
            </div>

        </div></div> : <div>Loading...</div>}</div>
    )
}