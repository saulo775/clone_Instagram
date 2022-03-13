import React from "react";
import { Container } from "./style";

export function Sugestion({userImage, userName, status}) {
    return(
        <Container>
            <div className="usuario">
                <img src={userImage} />
                <div className="texto">
                    <div className="nome">{userName}</div>
                    <div className="razao">{status}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </Container>
    )
}