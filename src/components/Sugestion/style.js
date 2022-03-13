import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 16px;
    
    .usuario {
        display: flex;

        .texto {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            :last-child {
                color: #8E8E8E;
                font-weight: 400;
            }
        }
    }
`;