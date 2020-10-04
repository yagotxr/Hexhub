import React, { Component } from 'react'
import balloon from '../../assets/icons/message-square.svg'
import './CommentButton.scss'

class CommentButton extends Component {
    constructor() {
        super()
        this.state = {
            commentCount: 267
        }
    }

    render() {
        let commentCount = this.state.commentCount
        return (
            <a href='#'>
                <img className='commentBalloon' alt='commentButton' src={balloon}></img>
                <div className='commentCount'>
                    <span>{commentCount}</span>
                </div>
            </a>
        )
    }
}

export default CommentButton