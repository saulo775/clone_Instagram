import styled from 'styled-components';


export const Container = styled.div`
    
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    

    .topo {
        display: flex;
        justify-content: space-between;
        padding: 13px 16px;
        font-size: 14px;
        font-weight: 500;
        
        .usuario,
        .acoes {
            display: flex;
            align-items: center;
        }
        
        img {
            width: 32px;
            height: 32px;
            margin-right: 10px;
        }
    }


    .usuario,  .topo img,  .fundo img,  ion-icon,  strong {
        display: flex;
        align-items: center;
    }

    .conteudo img {
        width: 100%;
    }

    .fundo .acoes {
        display: flex;
        justify-content: space-between;
        padding: 13px 16px;
        font-size: 24px;

        div {
            display: flex;
        }
    }

    .fundo .acoes div:first-child ion-icon {
        margin-right: 6px;    
    }

    .fundo .curtidas {
        display: flex;
        align-items: center;
        padding: 0 16px 13px;
        font-weight: 300;
    }

    .curtidas .texto {
        flex: 1;
        display: flex !important;
        flex-direction: row;
        text-indent: 3px;
        word-break: keep-all;
    }

    .fundo .curtidas img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    :last-child {
        margin-bottom: 18px;
    }

    @media (max-width: 614px) {
        margin-top: 0;
        border-radius: 0;
        border-left: none;
        border-right: none;
        width: 100%;
    
        :last-child {
            margin-bottom: 72px;
        }

        :first-child {
            margin-top: 0;
        }
    }
`;