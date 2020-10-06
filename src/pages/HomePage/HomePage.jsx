import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import './HomePage.scss'

import Timeline from '../../containers/Timeline/Timeline'
import Header from "../../components/Header/Header";
import SideMenu from '../../containers/SideMenu/SideMenu'

import andressa from '../../assets/images/andressa_urach.jpg'


class HomePage extends Component {
    render() {
        return (
            <>
                <Header profilePicture={andressa}/>
                <div className='homepage'>
                    <Row>
                        <Col>
                            <SideMenu/>
                        </Col>
                        <Col xs={6}>
                            <div className='mid'>
                                <Timeline />
                            </div>
                        </Col>
                        <Col >
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default HomePage