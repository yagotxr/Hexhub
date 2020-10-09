import React from 'react'
import { Avatar, Card } from 'antd'
import { Col, Row } from 'react-bootstrap'
import { UserOutlined } from '@ant-design/icons'
import LikeButton from '../../components/LikeButton/LikeButton'
import RepostButton from '../../components/RepostButton/RepostButton'
import CommentButton from '../../components/CommentButton/CommentButton'
import ShareButton from '../../components/ShareButton/ShareButton'
import './Post.scss'

type Props = {
    profilePicture: string,
    profileName: string,
    username: string,
    content: string,
    liked: boolean,
    likeCount: number,
    reposted: boolean,
    repostCount: number,
}

const cardStyle = {
    borderRadius: '10px',
    boxShadow: '1px 1px 5px 0px rgba(208, 216, 243, 0.6)',
}

const Post = ({
    profilePicture,
    profileName,
    username,
    content,
    liked,
    likeCount,
    reposted,
    repostCount,
}: Props) => {
    return (
        <Card style={cardStyle}>
                <Avatar
                    className="post-profile-pic"
                    icon={<UserOutlined />}
                    src={profilePicture}
                    size={60}
                />
            <div className="postBody">
                <div className="postContent">
                    <span className="profileName">{profileName}</span>
                    <span className="username"> @{username} </span>
                    <span className="postDate">- 1m</span>
                    <div>{content}</div>
                    <div className="postActions">
                    <Row>
                        <Col className="action">
                            <LikeButton liked={liked} count={likeCount} />
                        </Col>
                        <Col className="action">
                            <RepostButton
                                reposted={reposted}
                                count={repostCount}
                            />
                        </Col>
                        <Col className="action">
                            <CommentButton />
                        </Col>
                        <Col className="action">
                            <ShareButton />
                        </Col>
                    </Row>
                </div>
                </div>
            </div>
        </Card>
    )
}

export default Post
