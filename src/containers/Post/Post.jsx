import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card } from 'antd';
import { Col, Row } from 'react-bootstrap'
import { UserOutlined } from '@ant-design/icons';
import LikeButton from '../../components/LikeButton/LikeButton'
import RepostButton from '../../components/RepostButton/RepostButton'
import CommentButton from '../../components/CommentButton/CommentButton'
import './Post.scss';
import ShareButton from '../../components/ShareButton/ShareButton';

class Post extends Component {
    render() {
        return (
                <Card style={{
                    borderRadius: "10px",
                    boxShadow: "1px 1px 5px 0px rgba(208, 216, 243, 0.6)"
                }}>
                    <Row>
                        <Col xs={1}>
                                <Avatar
                                icon={<UserOutlined />}
                                src={this.props.profilePicture}
                                size={40} />
                        </Col>
                        <Col>
                            <div className='postBody'>
                                <div className='postContent'>
                                    <span className='profileName'>{this.props.profileName}</span>
                                    <span className='username'> @{this.props.username} </span>
                                    <span className='postDate'>- 1m</span>
                                    <div>
                                        {this.props.content}
                                    </div>
                                </div>
                                <div className='postActions'>
                                    <Row>
                                        <Col className='action'>
                                            <LikeButton
                                                liked={this.props.liked}
                                                count={this.props.likeCount} />
                                        </Col>
                                        <Col className='action'>
                                            <RepostButton
                                                reposted={this.props.reposted}
                                                count={this.props.repostCount} />
                                        </Col>
                                        <Col className='action'>
                                            <CommentButton />
                                        </Col>
                                        <Col className='action'>
                                            <ShareButton />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
        );
    }
}

Post.propTypes = {
    profileName: PropTypes.string
}

export default Post;