import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    min-height: 66px;
    min-width: 66px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 14px 0;
    font-size: 12px;
    cursor: pointer;
    margin-right: 10px;


    .imagem {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 66px;
        width: 66px;
        background-image: url('../assets/img/story-circle.svg');
    }

    .imagem img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    .usuario {
        width: 66px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        height: 14px;
    }
`