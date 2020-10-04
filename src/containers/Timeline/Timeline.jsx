import React, { Component } from "react";
import Post from "../Post/Post";
import './Timeline.scss'
import andressa from '../../assets/images/andressa_urach.jpg'

class Timeline extends Component {

    render() {
        return (
            <div>
                <div>
                    <div className='location'>
                        <h1 >Timeline</h1>
                    </div>
                </div>
                <Post
                    profilePicture={andressa}
                    profileName='Andressa Urach'
                    username='andressa.urach'
                    content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                    liked={true}
                    likeCount={14}
                    reposted={true}
                    repostCount={15} />
                <Post
                    profilePicture={andressa}
                    profileName='Andressa Urach'
                    username='andressa.urach'
                    content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                    liked={true}
                    likeCount={14}
                    reposted={true}
                    repostCount={15} />
                <Post
                    profilePicture={andressa}
                    profileName='Andressa Urach'
                    username='andressa.urach'
                    content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                    liked={true}
                    likeCount={14}
                    reposted={true}
                    repostCount={15} />
                    <Post
                    profilePicture={andressa}
                    profileName='Andressa Urach'
                    username='andressa.urach'
                    content='A colega de trabalho não fechou o WhatsApp no computador que ela usa para as atividades laborais, tinha só mudado de aba. Quando fomos desligar, deparamos com essa mensagem Flushed face Eu sempre a defendi, tratei bem e dava boas referências. Sujeita ingrata rs'
                    liked={true}
                    likeCount={14}
                    reposted={true}
                    repostCount={15} />
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
        );
    }

}

export default Timeline