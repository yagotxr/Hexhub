import React, { useState } from 'react'
import { ReactComponent as Heart } from '../../assets/icons/heart.svg'
import './LikeButton.scss'


type Props = {
    liked: boolean,
    count: number
}

const LikeButton = ({liked, count} : Props) => {

    const [isLiked, setIsLiked] = useState(true)
    const amount = useState(count)
    const isSelected =  isLiked ? 'liked' : 'default'
    const toggleLike = () => {isLiked ? setIsLiked(false) : setIsLiked(true)}

    return(
        <div className= {isSelected}>
            <a href onClick={toggleLike}>
                <Heart className={`heart ${isSelected}`}/>
                <span className={`engagementCounter`}>{amount}</span>
            </a>
        </div>
    )
}

export default LikeButton