import React from 'react'
import { ReactComponent as Share } from '../../assets/icons/share.svg'
import './ShareButton.scss'

const ShareButton = () => {
    return (
        <div>
            <a href onClick={() => ''}>
                <Share className="shareIcon"/>
                <span className="engagementCounter default">Share</span>
            </a>
        </div>
    )
}

export default ShareButton
