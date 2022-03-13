import React from "react";
import { Container } from "./style";

export function Post({
    sourceImageUser,
    user,
    postImage,
    likesImage,
    likeUser,
    numLikes
}) {
    return (
        <Container>
            <div className="topo">
                <div className="usuario">
                    <img src={sourceImageUser} />
                    {user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={postImage} />
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
                    <img src={likesImage} />
                    <div className="texto">Curtido por<strong>{likeUser}</strong>e<strong>outras {numLikes} pessoas</strong></div>
                </div>
            </div>
        </Container>
    )
}