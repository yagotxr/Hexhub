import React, { Component } from 'react'
import hexagon from '../../assets/icons/hexagon.svg'
import greenHexagon from '../../assets/icons/greenHexagon.svg'
import './RepostButton.scss'

class RepostButton extends Component {
    constructor(props) {
        super()
        this.state = {
            reposted: props.reposted,
            repostCount: props.count
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        if (!this.state.reposted) {
            this.setState({ reposted: true })
        } else {
            this.setState({ reposted: false })
        }
    }

    setImage = (reposted) => {
        if (reposted) {
            return greenHexagon
        }
        return hexagon
    }

    render() {
        let reposted = this.state.reposted
        let fontColor = reposted ? 'green' : 'gray'
        return (
            <a href onClick={this.handleClick}>
                <img className='hexagon' alt='respotButton' src={this.setImage(reposted)}></img>
                <div className={`repostNumber ${fontColor}`}>
                    <span>{this.state.repostCount}</span>
                </div>
            </a>
        )
    }
}

export default RepostButton