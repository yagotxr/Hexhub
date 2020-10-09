import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Timeline from '../../containers/Timeline/Timeline'
import Header from '../../components/Header/Header'
import './HomePage.scss'

import andressa from '../../assets/images/andressa_urach.jpg'

const HomePage = () => {
    return (
        <>
            <Header profilePicture={andressa} />
            <div className="homepage">
                <Row>
                    <Col>col1</Col>
                    <Col xs={50} lg={6}>
                        <div className="mid">
                            <Timeline />
                        </div>
                    </Col>
                    <Col>col 3</Col>
                </Row>
            </div>
        </>
    )
}

export default HomePage
