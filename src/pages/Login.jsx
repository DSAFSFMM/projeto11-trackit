import styled from "styled-components";
import logo from "./../assets/logo.png"
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <Tela>
            <img src={logo} alt="logo" />
            <Formulario>
                <input type="email" placeholder="email"/>
                <input type="text" placeholder="senha"/>
                <button type="submit">Entrar</button>
            </Formulario>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Tela>
    );
}

const Tela = styled.div`
    *{
        font-family: 'Lexend Deca';
        font-weight: 400;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin-top: 68px;
        width: 180px;
        height: 180px;
    }
    p{
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;

const Formulario = styled.form`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 6px 0;
    input{
        width: 300px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
    }
    button{
        width: 300px;
        height: 45px;
        font-size: 20px;
        line-height: 26px;
        color: white;
        background: #52B6FF;
        border-radius: 5px;
        margin-bottom: 25px;
        border: none;
    }
`;