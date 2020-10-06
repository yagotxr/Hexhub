import React, { Component } from "react";
import { Col, Row, Card, Button, Input, Divider } from "antd";
import logo from "../../assets/images/hexhub.svg";
import google from "../../assets/images/google.png";
import "./LoginPage.scss";

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage">
        <Row>
          <Col span={12}>
            <div className="logo">
              <img src={logo} alt="logo" width="300px" />
            </div>
          </Col>
          <Col span={12}>
            <div className="login">
              <Card className='loginCard'>
                <div>
                  <Input size="large" placeholder="Email" type='email'/>
                  <br />
                  <br />
                  <Input size="large" placeholder="Password" type='password'/>
                  <br />
                  <br />
                  <Button shape="round" type="primary" href="/home">
                    <b>Login</b>
                  </Button>

                  <Divider>
                    <p>Or continue with</p>
                  </Divider>

                  <Button shape="round" type="default" size="large">
                    <div>
                      <img src={google} alt="googleIcon" width="20px"></img>
                      <b> Google</b>
                    </div>
                  </Button>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
