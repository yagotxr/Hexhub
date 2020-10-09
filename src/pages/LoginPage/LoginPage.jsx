import React from 'react'
import { Card, Button, Input, Divider } from 'antd'
import { Col, Row } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../assets/images/hexhub-name.svg'
import { ReactComponent as Google } from '../../assets/icons/google.svg'
import './LoginPage.scss'

const cardStyle = {
    borderRadius: '10px',
    boxShadow: '1px 1px 5px 0px rgba(208, 216, 243, 0.6)',
}

const LoginPage = () => {
    return (
        <div className="loginPage">
            <Row>
                <Col span={12}>
                    <div className="leftSide">
                        <Logo className="loginLogo" />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="login">
                        <Card style={cardStyle}>
                            <div>
                                <Input
                                    size="large"
                                    placeholder="Email"
                                    type="email"
                                />
                                <br />
                                <br />
                                <Input
                                    size="large"
                                    placeholder="Password"
                                    type="password"
                                />
                                <br />
                                <br />
                                <Button
                                    shape="round"
                                    type="primary"
                                    href="/home"
                                >
                                    <b>Login</b>
                                </Button>

                                <Divider>
                                    <p>Or continue with</p>
                                </Divider>

                                <Button
                                    shape="round"
                                    type="default"
                                    size="large"
                                >
                                    <div>
                                        <Google className="googleIcon" />
                                        <b> Google</b>
                                    </div>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage
