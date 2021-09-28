import React from 'react'
import './index.css'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png'



function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <Row align="middle" className="header__row">
                    <Col span={4}>
                        <Link to='/' >
                            <img alt="logo" src={logo} className="header__logo" />
                        </Link>
                    </Col>
                    <Col span={10}>
                        <div className="header__nav">
                            <Link to="/" className="xl nav__item">Home</Link>
                            <Link to="/profile" className="xl nav__item">Profile</Link>
                            <Link to="/resume" className="xl nav__item">Resume</Link>
                            <Link to="/project" className="xl nav__item">Project</Link>
                        </div>
                    </Col>
                    <Col span={10} >
                        <div className="header__contact">
                            <Link to="/contact" className="button xl">Contact me</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Header
