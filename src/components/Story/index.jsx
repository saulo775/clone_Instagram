import React from "react";
import { Container } from "./style";

export function Story({ source, value}) {
    return (
        <Container>
            <div className="imagem">
                <img src={source}/>
            </div>
            <div className="usuario">
                {value}
            </div>
        </Container>
    )
}