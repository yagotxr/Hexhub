import React, { Component } from 'react';
import './Header.scss'
import logo from '../../assets/images/foxter_write.png'

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className='logoConnect'>

                </div>
                <img className='connectImage' alt='foxterLogo' src={logo} ></img>
            </div>
        )
    }

}

export default Header