import React, { useState } from 'react'
import { ReactComponent as Balloon } from '../../assets/icons/message-square.svg'
import './CommentButton.scss'

const CommentButton = () => {
  const commentCount = useState(267)

  return (
    <div >
      <a href onClick={()=> window.alert("Comment Modal")}>
        <Balloon className="commentBalloon" />
        <div className="engagementCounter default">
          <span>{commentCount}</span>
        </div>
      </a>
    </div>
  )
}

export default CommentButton
