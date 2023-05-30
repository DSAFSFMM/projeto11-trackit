import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer(){
    return(
        <Bottom>
            <Link to={`/habitos`}>
                <p>Hábitos</p>
            </Link>
            <Link to={`/hoje`}>
                <div>Hoje</div>
            </Link>
            <Link to={`/historico`}>
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
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0 36px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        left: 142px;
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
