import React from 'react'
import './Header.scss'
import { Badge } from 'antd'
import { Row, Col } from 'react-bootstrap'
import { UserOutlined } from '@ant-design/icons'
import logo from '../../assets/images/hexhub-logo.png'
import Avatar from 'antd/lib/avatar/avatar'
import NotificationButton from '../../components/NotificationButton/NotificationButton'

type Props = {
    profilePicture: String,
}

const Header = ({ profilePicture }: Props) => {
    return (
        <div className="header overlay">
            <Row>
                <Col>
                    <div className="logo">
                        <a href="/home">
                            <img
                                alt="hexhub Logo"
                                className="hexhubImage"
                                src={logo}
                            ></img>
                        </a>
                    </div>
                </Col>
                <Col xs={1}>
                    <span className="location">Timeline</span>
                </Col>
                <Col>
                    <div className="menu">
                        <div className="navLink">
                            <a href onClick={() => ''}>
                                Profile
                            </a>
                        </div>
                        <div className="navLink">
                            <a href onClick={() => ''}>
                                Timeline
                            </a>
                        </div>
                        <NotificationButton />
                        <div href className="navLink">
                            <a href onClick={() => ''}>
                                <Avatar
                                    src={profilePicture}
                                    icon={<UserOutlined />}
                                />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header
