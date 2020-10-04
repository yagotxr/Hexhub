import React, { Component } from 'react'
import heart from '../../assets/icons/heart.svg'
import redHeart from '../../assets/icons/redHeart.svg'
import './LikeButton.scss'

class LikeButton extends Component {
    constructor(props) {
        super()
        this.state = {
            liked: props.liked,
            likeCount: props.count
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        if (!this.state.liked) {
            this.setState({ liked: true })
        } else {
            this.setState({ liked: false })
        }
    }

    setImage = (liked) => {
        if (liked) {
            return redHeart
        }
        return heart
    }

    setCount = (countColor) => {
        const count = this.state.likeCount
        console.log(count)
        return count !== 0 ?
        <div className={`likeCount ${countColor}`}>{count}</div>
        :
        <></>
    }

    render() {
        let liked = this.state.liked
        let countColor= liked ? 'red' : 'gray'

        return (
            <a href onClick={this.handleClick}>
                <img className='heart' alt='likeButton' src={this.setImage(liked)}></img>
                {this.setCount(countColor)}
            </a>
        )
    }
}

export default LikeButton