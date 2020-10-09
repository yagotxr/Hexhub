import React, { useState } from 'react'
import { ReactComponent as Bell } from '../../assets/icons/bell.svg'
import { ReactComponent as Close } from '../../assets/icons/x.svg'
import { Button, Badge } from 'antd'
import { Avatar } from 'antd'
import denise from '../../assets/images/denise_rocha.jpg'
import './NotificationButton.scss'

type Props = {
    giverPic: string,
    userName: string,
    action: string,
}

const NotificationButton = () => {
    const [visible, setVisible] = useState(false)
    const getDisplayClass = () => {
        return !visible ? ' hidden' : ''
    }
    const closeCard = () => {
        setVisible(false)
    }
    const toggleNotifications = () => {
        return visible ? setVisible(false) : setVisible(true)
    }

    return (
        <div className="navLink">
            <a href onClick={toggleNotifications}>
                <Badge count={3}>
                    <Bell />
                </Badge>
            </a>
            <div
                onClickAway={closeCard}
                className={`n-card${getDisplayClass()}`}
            >
                <div className="n-card-header">
                    <span className="n-card-title-name">Notifications</span>
                    <a href onClick={closeCard}>
                        <Close className="n-card-close-button" />
                    </a>
                </div>
                <div className='n-card-notifications-area'>
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                    <Notification
                        giverPic={denise}
                        userName="Denise Rocha"
                        action="photo like"
                    />
                </div>
            </div>
        </div>
    )
}

const Notification = ({ giverPic, userName, action }: Props) => {
    const getAction = (action) => {
        if (action === 'photo like') {
            return ' liked your picture.'
        }
    }
    return (
        <a>
            <div className="n-content">
                <Avatar className="n-giver" src={giverPic} size={50} />
                <span className="n-giver-action">
                    <a>
                        <b>{userName}</b>
                    </a>
                    {getAction(action)}
                </span>
            </div>
        </a>
    )
}

export default NotificationButton
