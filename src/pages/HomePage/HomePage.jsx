import React, { Component } from "react";
import { Col, Row } from "antd";
import './HomePage.scss'

import Post from '../../components/Post/Post'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        Col 1
                 </Col>
                    <Col span={8}>
                        <Post />
                 </Col>
                    <Col span={8}>
                        Col 3
                 </Col>
                </Row>
            </div>
        );
    }
}

export default HomePage