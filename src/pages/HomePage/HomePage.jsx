import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import './HomePage.scss'

import Sider from '../../containers/Sider/Sider'
import Timeline from '../../containers/Timeline/Timeline'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={3} lg={3}>
                        <Sider />
                    </Col>
                    <Col xs={6}>
                        <Timeline />
                    </Col>
                    <Col >
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomePage