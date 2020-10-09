import React from 'react'
import Post from '../Post/Post'
import './Timeline.scss'
import PostModal from '../../components/PostModal/PostModal'

import andressa from '../../assets/images/andressa_urach.jpg'
import denise from '../../assets/images/denise_rocha.jpg'

const Timeline = () => {
    return (
        <div>
            <div className="timelineActions">
                <PostModal />
            </div>
            <div className="post">
                <Post
                    profilePicture={andressa}
                    profileName="Andressa Urach"
                    username="hTinha_MissBumbum"
                    content="A bit more of my chat with Prince William about the @EarthshotPrize

-inspired by his passion and commitment towards combating climate change and repairing our planet, not to mention his contagious enthusiasm-and so humbled and happy to be a part of this Prize Council. 
(1/2)"
                    liked={true}
                    likeCount={14}
                    reposted={true}
                    repostCount={15}
                />
            </div>
            <div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div><div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div><div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div><div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div><div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div><div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div><div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div><div className="post">
                <Post
                    profilePicture={denise}
                    profileName="Denise Rocha"
                    username="furacaocpi"
                    content="Na pesquisa divulgada nesta tarde de quinta-feira (8), mostra uma briga acirrada pela Prefeitura da capital pernambucana. Levantamento ouviu 800 eleitores entre os dias 5 e 6 de outubro."
                    liked={false}
                    likeCount={14}
                    reposted={false}
                    repostCount={15}
                />
            </div>
        </div>
    )
}

export default Timeline
