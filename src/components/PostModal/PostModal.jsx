import React, { useState } from 'react'
import './PostModal.scss'
import { Button } from 'antd'
import { Modal, FormControl } from 'react-bootstrap'
import Avatar from 'antd/lib/avatar/avatar'
import andressa from '../../assets/images/andressa_urach.jpg'

const PostModal = () => {
    const [visible, setVisible] = useState(false)
    const handleClose = () => {
        setVisible(false)
    }
    const openModal = () => {
        setVisible(true)
    }

    return (
        <div>
            <Button type="primary" shape="round" onClick={openModal}>
                <b>Create Post</b>
            </Button>
            <Modal show={visible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Avatar src={andressa} size={50} />
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        as="textarea"
                        aria-label="Post area"
                        rows={5}
                        placeholder={`What is going on, ${'Andressa'}?`}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <div className="modalFooter">
                        <Button type="info" shape="round" onClick={handleClose}>
                            <b>Draft</b>
                        </Button>
                    </div>
                    <div>
                        <Button
                            type="primary"
                            shape="round"
                            onClick={handleClose}
                        >
                            <b>Post</b>
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PostModal
