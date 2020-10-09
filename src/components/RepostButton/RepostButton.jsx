import React, { useState } from 'react'
import { ReactComponent as Hexagon } from '../../assets/icons/hexagon.svg'
import './RepostButton.scss'

type Props = {
    reposted: boolean,
    count: number,
}

const RepostButton = ({ reposted, count }: Props) => {
    const [isReposted, setReposted] = useState(reposted)
    const repostCount = useState(count)
    const toggleRepost = () => {
        isReposted ? setReposted(false) : setReposted(true)
    }
    const isSelected = isReposted ? 'reposted' : 'default'

    return (
        <div className={isSelected}>
            <a href onClick={toggleRepost}>
                <Hexagon className={`hexagon ${isSelected}`} />
                <span className={`engagementCounter`}>{repostCount}</span>
            </a>
        </div>
    )
}

export default RepostButton
