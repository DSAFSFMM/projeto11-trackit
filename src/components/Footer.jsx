import styled from "styled-components";

export default function Footer(){
    return(
        <Bottom>
            <p>Hábitos</p>
            <p>Histórico</p>
        </Bottom>
    );
}

const Bottom = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0 36px;
    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`;
