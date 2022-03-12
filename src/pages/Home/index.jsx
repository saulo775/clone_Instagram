import React from "react";

import { 
    Navbar,
    Content, 
    BackgroundMobile 
} from './style';

import { Story } from "../../components/Story";
import { Post } from "../../components/Post";
import { Sugestion } from "../../components/Sugestion";

export function Home() {
    const stories = [
        {
            source: "/assets/img/9gag.svg",
            value: "9gag",
        },
        {
            source: "/assets/img/meowed.svg",
            value: "meowed",
        },
        {
            source: "/assets/img/barked.svg",
            value: "barked",
        },
        {
            source: "/assets/img/wawawicomics.svg",
            value: "wawawicomics",
        },
        {
            source: "/assets/img/respondeai.svg",
            value: "respondeai",
        },
        {
            source: "/assets/img/filomoderna.svg",
            value: "filomoderna",
        },
        {
            source: "/assets/img/memeriagourmet.svg",
            value: "memeriagourmet",
        },
        {
            source: "/assets/img/9gag.svg",
            value: "9gag2",
        },
        {
            source: "/assets/img/9gag.svg",
            value: "9gag3",
        },
        {
            source: "/assets/img/9gag.svg",
            value: "9gag4",
        },


    ];

    const posts = [
        {
            sourceImageUser: 'assets/img/meowed.svg',
            user: 'meowed',
            postImage: 'assets/img/gato-telefone.svg',
            likesImage: 'assets/img/respondeai.svg',
            likeUser: 'respondeai',
            numLikes: '202.546',
        },
        {
            sourceImageUser: 'assets/img/barked.svg',
            user: 'barked',
            postImage: 'assets/img/dog.svg',
            likesImage: 'assets/img/smallcutecats.svg',
            likeUser: 'meowed',
            numLikes: '345.796',
        },
    ]

    const sugestionFollowers = [
        {
            userImage: "assets/img/bad.vibes.memes.svg",
            userName: "bad.vibes.memes",
            status: "Segue você",
        },
        {
            userImage: "assets/img/chibirdart.svg",
            userName: "chibirdart",
            status: "Segue você",
        },
        {
            userImage: "assets/img/razoesparaacreditar.svg",
            userName: "razoesparaacreditar",
            status: "Novo no Instagram",
        },
        {
            userImage: "assets/img/adorable_animals.svg",
            userName: "adorable_animals",
            status: "Segue você",
        },
        {
            userImage: "assets/img/smallcutecats.svg",
            userName: "smallcutecats",
            status: "Segue você",
        },
    ]

    return(
        <>
            <Navbar>
                <div className="container">
                    <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="/assets/img/logo.png" />
                    </div>

                    <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </div>

                    <div className="instagram-mobile">
                        <img src="/assets/img/logo.png" />
                    </div>

                    <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                    </div>

                    <div className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                </div>
            </Navbar>

            <Content>
                <div className="esquerda">
                    <div className="stories">
                        {stories.map(({source, value}) => {
                            return(
                                <Story
                                    key={value}
                                    source={source}
                                    value={value}
                                />
                            )
                        })}

                        <div className="setinha">
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                    </div>

                    <div className="posts">
                        {
                            posts.map(({
                                sourceImageUser,
                                user,
                                postImage,
                                likesImage,
                                likeUser,
                                numLikes
                            }) => {
                                return(
                                    <Post
                                        key={user}
                                        sourceImageUser={sourceImageUser}
                                        user={user}
                                        postImage={postImage}
                                        likesImage={likesImage}
                                        likeUser={likeUser}
                                        numLikes={numLikes}
                                    />
                                )
                            })
                        }

                    {/* <div className="post">
                        <div className="topo">
                        <div className="usuario">
                            <img src="assets/img/meowed.svg" />
                            meowed
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                        </div>

                        <div className="conteudo">
                        <img src="assets/img/gato-telefone.svg" />
                        </div>

                        <div className="fundo">
                        <div className="acoes">
                            <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="curtidas">
                            <img src="assets/img/respondeai.svg" />
                            <div className="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                            </div>
                        </div>
                        </div>
                    </div> */}

                    {/* <div className="post">
                        <div className="topo">
                        <div className="usuario">
                            <img src="assets/img/barked.svg" />
                            barked
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                        </div>

                        <div className="conteudo">
                        <img src="assets/img/dog.svg" />
                        </div>

                        <div className="fundo">
                        <div className="acoes">
                            <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="curtidas">
                            <img src="assets/img/adorable_animals.svg" />
                            <div className="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>

                <div className="sidebar">
                    <div className="usuario">
                        <img src="assets/img/catanacomics.svg" />
                        <div className="texto">
                            <strong>catanacomics</strong>
                            Catana
                        </div>
                    </div>

                    <div className="sugestoes">
                        <div className="titulo">
                            Sugestões para você
                            <div>Ver tudo</div>
                        </div>
                        {
                            sugestionFollowers.map(({userImage, userName, status}) => {
                                return (
                                    <Sugestion
                                        key={userName}
                                        userImage={userImage}
                                        userName={userName}
                                        status={status}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>

                    <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </Content>

            <BackgroundMobile>
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </BackgroundMobile>
        </>
    )
}