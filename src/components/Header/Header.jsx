import React from 'react'
import './Header.scss'
import { Row, Col } from 'react-bootstrap'
import { UserOutlined } from '@ant-design/icons';
import logo from '../../assets/images/hexhub-logo.png'
import bell from '../../assets/icons/bell.svg'
import Avatar from 'antd/lib/avatar/avatar'

type Props = {
    profilePicture: String
}

const Header = ({profilePicture} : Props) => {
    return (
        <div className='header overlay'>
            <Row xs={24}>
                <Col>
                    <div className='logo'>
                        <a href='/home'><img
                            alt='hexhub Logo'
                            className='hexhubImage'
                            src={logo}>
                        </img>
                        </a>
                    </div>
                </Col>
                <Col>
                    <span className='location'>Timeline</span>
                </Col>
                <Col>
                    <div className='menu'>
                        <div className='navLink'>
                            <a>Profile</a>
                        </div>
                        <div className='navLink'>
                            <a>Timeline</a>
                        </div>
                        <div className='navLink'>
                            <a><img src={bell}></img></a>
                        </div>
                        <div className='navLink'>
                            <a><Avatar src={profilePicture} icon={<UserOutlined />} /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header