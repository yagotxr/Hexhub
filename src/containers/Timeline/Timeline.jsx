import React, { Component } from "react";
import Post from "../Post/Post";
import './Timeline.scss'
import PostModal from '../../components/PostModal/PostModal'
import andressa from '../../assets/images/andressa_urach.jpg'

class Timeline extends Component {

    render() {
        return (
            <div>
                <div className='timelineActions'>
                    <PostModal/>
                </div>
                <div className='post'>
                    <Post
                        profilePicture={andressa}
                        profileName='Andressa Urach'
                        username='andressa.urach'
                        content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                        liked={true}
                        likeCount={14}
                        reposted={true}
                        repostCount={15} />
                </div>
                <div className='post'>
                    <Post
                        profilePicture={andressa}
                        profileName='Andressa Urach'
                        username='andressa.urach'
                        content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                        liked={false}
                        likeCount={0}
                        reposted={false}
                        repostCount={0} />
                </div>
                <div className='post'>
                    <Post
                        profilePicture={andressa}
                        profileName='Andressa Urach'
                        username='andressa.urach'
                        content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                        liked={true}
                        likeCount={14}
                        reposted={true}
                        repostCount={15} />
                </div>
                <div className='post'>
                    <Post
                        profilePicture={andressa}
                        profileName='Andressa Urach'
                        username='andressa.urach'
                        content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                        liked={true}
                        likeCount={14}
                        reposted={true}
                        repostCount={15} />
                </div>
            </div>

        );
    }

}

export default Timeline