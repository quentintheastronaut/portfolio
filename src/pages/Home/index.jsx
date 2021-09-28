import React from 'react'
import './index.css'
import portrait from 'assets/img/portrait.png'
import { Col, Row } from 'antd'
import "animate.css"
import { Link } from 'react-router-dom'
import '../../index.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <Row className="home__row">
                    <Col span={13} className="home__col">
                        <div className="home__intro">
                            <div className="intro"></div>
                            Introducing
                        </div>

                        <div className="home__3dtext">
                            <div className="live_preview">
                                <div className="previw_obj">
                                    <h3 className="text_pop" id="text_show">
                                        <span>H</span>
                                        <span>e</span>
                                        <span>l</span>
                                        <span>l</span>
                                        <span>o</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="live_preview">
                                <div className="previw_obj">
                                    <h3 className="text_pop" id="text_show">
                                        <span>I</span>
                                        <span>&apos;</span>
                                        <span>m</span>
                                        <span>&nbsp;</span>
                                        <span>Q</span>
                                        <span>u</span>
                                        <span>e</span>
                                        <span>n</span>
                                        <span>t</span>
                                        <span>i</span>
                                        <span>n</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="live_preview">
                                <div className="previw_obj">
                                    <h3 className="text_pop" id="text_show">
                                        <span>D</span>
                                        <span>a</span>
                                        <span>n</span>
                                        <span>g</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="home__introducing xl">
                            {/* As a senior year and a software engineer based in Ho Chi Minh City, I'm always searching for chances to upgrade myself through real experiences and self-study. */}
                            I'm passionate on crafting software as well as system architecture. I'm on my journey to become a full-stack engineer. Let's check it out !
                        </div>
                        <div className="home__contact">
                            <Link to='/profile' className="button xl" >
                                View profile
                            </Link>
                        </div>
                    </Col>
                    <Col span={11}>

                        <div className="portrait">
                            <div className="circle-big animate__animated animate__bounceIn">

                            </div>
                            <div className="circle-small animate__animated animate__bounceIn">

                            </div>
                            <div>
                                <img src={portrait} alt="postrait-img" className="postrait-img animate__animated animate__fadeIn animate__delay-1s" />
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home
