import React, { Component } from 'react';
import { Card } from 'antd';
import './Post.scss';
class Post extends Component {

    render(){
        return(
            <div>
                <Card>
                    <div className='post-content'>
                        content
                    </div>
                </Card>
            </div>
        );
    }

}

export default Post;