import React, {Component} from 'react'
import shareButton from '../../assets/icons/share.svg'

class ShareButton extends Component {

    render(){
        return(
            <a>
                <img alt='shareButton' src={shareButton}></img>
            </a>
        )
    }
}

export default ShareButton