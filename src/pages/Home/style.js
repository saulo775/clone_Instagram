import styled from 'styled-components';

export const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 54px;
    border-bottom: 1px solid #DBDBDB;
    font-size: 22px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    ion-icon, img {
        cursor: pointer;
    }

    .container {
        width: 100%;
        max-width: 935px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .container > * {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .logo img {
        position: relative;
        top: 3px;
    }

    .logo .separador {
        width: 1px;
        height: 22px;
        background-color: #DBDBDB;
        margin: 0 10px;
    }

    .pesquisa input {
        width: 215px;
        height: 28px;
        border-radius: 3px;
        background-color: #FAFAFA;
        border: 1px solid #DBDBDB;
        color: #979797;
        text-align: center;
    }

    .icones ion-icon {
        margin: 0 5px;
    }

    .icones-mobile {
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 935px;
    margin: 0 auto;
    margin-top: 88px;

    .esquerda {
        width: 100%;
        max-width: 614px;
    }

    .sidebar {
        width: 293px;
    }

    .stories {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        height: 118px;
        border-radius: 3px;
        border: 1px solid #DBDBDB;
        padding: 0 18px;
        position: relative;
    }
    
    .stories .setinha {
        position: absolute;
        right: 10px;
        top: 45px;
        height: 32px;
        width: 32px;
        color: #FFF;
        font-size: 28px;
        cursor: pointer;
        overflow: hidden;

    }

    /* .post {
        border-radius: 3px;
        border: 1px solid #DBDBDB;
        display: flex;
        flex-direction: column;
        margin-top: 18px;
    }

    .post .topo {
        display: flex;
        justify-content: space-between;
        padding: 13px 16px;
        font-size: 14px;
        font-weight: 500;
    }

    .post .topo .usuario, .post .topo .acoes {
        display: flex;
        align-items: center;
    }

    .post .topo img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }

    .post .usuario, .post .topo img, .post .fundo img, .post ion-icon, .post strong {
        
    }

    .post .conteudo img {
        
    }

    .post .fundo .acoes {
        display: flex;
        justify-content: space-between;
        padding: 13px 16px;
        font-size: 24px;
    }

    .post .fundo .acoes div:first-child ion-icon {
        margin-right: 6px;    
    }

    .post .fundo .curtidas {
        display: flex;
        align-items: center;
        padding: 0 16px 13px;
        font-weight: 300;
    }

    .post .fundo .curtidas img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .post:last-child {
        margin-bottom: 18px;
    } */

    .sidebar {
        padding-top: 24px;
        position: sticky;
        top: 88px;
    }

    .sidebar > .usuario {
        display: flex;
        align-items: center;
    }

    .sidebar > .usuario img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    .sidebar > .usuario .texto {
        display: flex;
        flex-direction: column;
        margin-left: 14px;
        font-weight: 300;
        color: #8E8E8E;
    }

    .sidebar > .usuario .texto strong {
        font-weight: 500;
        color: #262626;
    }

    .sidebar .sugestoes .titulo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0 14px;
    }

    .sidebar .sugestoes .sugestao {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        height: 31px;
        margin-bottom: 16px;
    }

    .sidebar .sugestoes .sugestao .usuario {
        display: flex;
    }

    .sidebar .sugestoes img {
        width: 32px;
        height: 32px;
    }

    .sidebar .sugestoes .seguir {
        color: #139EF2;
        font-weight: 600;
    }

    .sidebar .sugestoes .sugestao .usuario .texto {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .sidebar .sugestoes .sugestao .usuario .texto :last-child {
        color: #8E8E8E;
        font-weight: 400;
    }

    .links, .copyright {
        font-size: 11px;
        color: #C7C7C7;
    } 

    .links {
        margin-top: 40px;
        cursor: pointer;
    }

    .copyright {
        margin-top: 18px;
    }
`;

export const BackgroundMobile = styled.div`
    display: none;

    ion-icon {
        cursor: pointer;
    }

    .logo-mobile, .instagram-mobile {
        display: none !important;
    }
`;