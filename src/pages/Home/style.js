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
        margin: 0 20px;
            > * {
            display: flex;
            align-items: center;
            height: 100%;
        }
    }
    
    .logo img {
        position: relative;
        top: 3px;

        .separador {
            width: 1px;
            height: 22px;
            background-color: #DBDBDB;
            margin: 0 10px;
        }
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

    .instagram-mobile {
        display: none;
    }

    .logo-mobile {
        display: none;
    }

    @media (max-width: 614px) {
        .container {
            margin: 0 1rem;
            overflow-y: hidden;
        }

        .pesquisa {
            display: none;
        }

        .icones {
            display: none;
        }

        .logo {
            display: none;
        }

        .icones-mobile, .logo-mobile, .instagram-mobile {
            display: flex !important;
        }

        .instagram-mobile {
            position: relative;
            top: 4px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 935px;
    margin: 0 auto;
    margin-top: 35px;

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

        .setinha {
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
    }
    
    .sidebar {
        padding-top: 24px;
        position: sticky;
        top: 88px;

        > .usuario {
            display: flex;
            align-items: center;
        }

        > .usuario img {
            width: 56px;
            height: 56px;
            border-radius: 50%;
        }

        > .usuario .texto {
            display: flex;
            flex-direction: column;
            margin-left: 14px;
            font-weight: 300;
            color: #8E8E8E;
        }

        > .usuario .texto strong {
            font-weight: 500;
            color: #262626;
        }

        .sugestoes .titulo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0 14px;
        }

        .sugestoes img {
            min-width: 32px;
            min-height: 32px;
        }

        .sugestoes .seguir {
            color: #139EF2;
            font-weight: 600;
        }
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

    @media (max-width: 935px) {
        justify-content: center;
        width: 100%;

        .sidebar {
            display: none;
        }

        .navbar .container {
            padding: 0 20px;
        }
    }

    @media (max-width: 614px) {
        margin-top: 0;

        .stories {
            background-color: transparent;
            border: none;
            width: 100%;
        }

        .navbar .pesquisa {
            display: none;
        }

        .navbar .icones {
            display: none;
        }

        .navbar .icones-mobile {
            display: flex;
        }

        .fundo-mobile {
            display: flex;
            padding: 0 20px;
            justify-content: space-between;
            align-items: center;
            font-size: 24px;
            background-color: #FFF;
            border-top: 1px solid #DBDBDB;
            height: 54px;
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
        }

        .navbar .logo {
            display: none;
        }

        .logo-mobile, .instagram-mobile {
            display: flex !important;
        }

        .instagram-mobile {
            position: relative;
            top: 4px;
        }
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