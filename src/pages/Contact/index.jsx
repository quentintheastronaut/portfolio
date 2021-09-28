import { Col, Row } from 'antd'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faHackerrank, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './index.css'
import "animate.css"
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';

function Contact() {
    return (
        <div className="contact">
            <div className="contact__container">
                <Row align="middle">
                    <Col span={9}>
                        <div className="contact__info animate__animated animate__fadeInUp">
                            <div className="contact__content">
                                <div className="contact__title xxl">
                                    Contact Information
                                </div>

                                <div className="info__block">
                                    <div className="xl">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="contact__icon" size="1x" />
                                        (+84)77 881 2024
                                    </div>
                                    <div className="xl">
                                        <FontAwesomeIcon icon={faEnvelope} className="contact__icon" size="1x" />
                                        quan260402@gmail.com
                                    </div>
                                    <div className="xl">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} className="contact__icon" size="1x" />
                                        114/40 Eight Street, Binh Hung Hoa, Binh Tan, Ho Chi Minh City
                                    </div>
                                </div>
                                <div className="contact__social">
                                    <Link to="" className="social__button facebook"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></Link>
                                    <Link to="" className="social__button instagram"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></Link>
                                    <Link to="" className="social__button hackerrank"><FontAwesomeIcon icon={faHackerrank} size="2x" /></Link>
                                    <Link to="" className="social__button github"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></Link>
                                </div>
                            </div>
                            <div className="contact-circle-big"></div>
                            <div className="contact-circle-small"></div>
                        </div>

                    </Col>
                    <Col span={15}>
                        <div className="contact__form animate__animated animate__fadeIn animate__delay-1s">
                            <div className="name">
                                <div className="xxl contact__form__title">Get in touch</div>
                                <Form
                                    initialValues={{ remember: true }}
                                    autoComplete="off"
                                >
                                    <Row gutter={[30, 30]} className="form__row">
                                        <Col span={12}>
                                            <div className="form__title">
                                                Firstname
                                            </div>
                                            <Form.Item >
                                                <Input placeholder="example: Johnny" size="large" className="form__input" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <div className="form__title">
                                                Lastname
                                            </div>
                                            <Form.Item >
                                                <Input placeholder="example: Wayne" size="large" className="form__input" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item >
                                        <div className="form__title">
                                            Corporate email
                                        </div>
                                        <Input placeholder="example: example123@mail.com" size="large" className="form__input" />
                                    </Form.Item>
                                    <Row gutter={[30, 30]} className="form__row">
                                        <Col span={12}>
                                            <div className="form__title">
                                                Phone Number
                                            </div>
                                            <Form.Item >
                                                <Input placeholder="example: 0123456789" size="large" className="form__input" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <div className="form__title">
                                                Company Name
                                                <span>&nbsp;</span>
                                                <span className="optional">
                                                    (Optional)
                                                </span>
                                            </div>
                                            <Form.Item >
                                                <Input size="large" className="form__input" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Form.Item >
                                        <div className="form__title">
                                            Questions or Messages
                                        </div>
                                        <Input.TextArea size="large" placeholder="Write here your messages" className="form__textarea" />
                                    </Form.Item>

                                    <Form.Item>
                                        <div className="form__submit">
                                            <button type="primary" htmlType="submit" className="button">
                                                Submit
                                            </button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact
