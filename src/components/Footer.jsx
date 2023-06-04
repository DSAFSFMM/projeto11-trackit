import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { Contexto } from "./Contexto";

export default function Footer(){

    const {progresso} = useContext(Contexto);

    return(
        <Bottom data-test="menu">
            <Link data-test="habit-link" to={`/habitos`}>
                <p>Hábitos</p>
            </Link>
            <Link data-test="today-link" to={`/hoje`}>
                <div>
                    <Container>
                        <CircularProgressbar background={true} value={progresso} text={`Hoje`} styles={{
                            trail: {
                            stroke: 'transparent',
                            },
                            path: {
                                stroke: `white`,
                            },
                            text: {
                            fill: 'white',
                            fontSize: '18px',
                            },
                            background: {
                            fill: 'transparent',
                            },
                        }}/>
                    </Container>
                </div>
            </Link>
            <Link data-test="history-link" to={`/historico`}>
                <p>Histórico</p>
            </Link>
        </Bottom>
    );
}

const Bottom = styled.div`
    *{
        font-family: 'Lexend Deca';
        font-weight: 400;
    }
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0 36px;
    div{
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 50px;
        font-size: 18px;
        line-height: 22px;
        color: white;
    }
    p{
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    a{
        text-decoration: none;
    }
`;

const Container = styled.span`
    width: 79px;
    height: 79px;
`;
