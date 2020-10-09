import React, { useState } from 'react'
import { ReactComponent as Balloon } from '../../assets/icons/message-square.svg'
import { Button } from 'antd'
import { Modal, FormControl } from 'react-bootstrap'
import './CommentButton.scss'

type Props = {
    post: Post
}

const CommentButton = ({ show }: Props) => {
    const [visible, setVisible] = useState(false)
    const commentCount = useState(267)
    const handleClose = () => {
        setVisible(false)
    }
    const openModal = () => {
        setVisible(true)
    }
    return (
        <div>
            <a href onClick={openModal}>
                <Balloon className="commentBalloon" />
                <div className="engagementCounter default">
                    <span>{commentCount}</span>
                </div>
            </a>
            <Modal show={visible} onHide={handleClose}>
                
            </Modal>
        </div>
    )
}

export default CommentButton
