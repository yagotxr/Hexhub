import React, {Component} from 'react'
import { ReactComponent as Share } from '../../assets/icons/share.svg'

const ShareButton = () => {
    return(
        <div>
            <a href onClick={() => ''}>
                <Share />
                <span className='engagementCounter default'>Share</span>
            </a>
        </div>
    )
}

export default ShareButton