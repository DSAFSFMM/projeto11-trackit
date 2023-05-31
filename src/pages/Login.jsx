import styled from "styled-components";
import logo from "./../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../constants/BASE_URL";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [habilitado, setHabilitado] = useState(false);

    function login(event) {
        event.preventDefault();
        setHabilitado(true);
        const dados = {
            email: email,
            password: senha
        };
        axios.post(`${BASE_URL}/auth/login`, dados)
            .then(() => navigate("/hoje"))
            .catch(() => {
                alert("Erro no login, tente novamente");
                setEmail("");
                setSenha("");
                setHabilitado(false);
            });
    }

    return (
        <Tela>
            <img src={logo} alt="logo" />
            <Formulario onSubmit={login} habilitado={habilitado}>
                <input type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={habilitado} required />
                <input type="password" placeholder="senha" value={senha} onChange={(event) => setSenha(event.target.value)} disabled={habilitado} required />
                <button type="submit" disabled={habilitado}>{
                    !habilitado ? "Entrar" : <ThreeDots
                        height="50"
                        width="50"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />
                }
                </button>
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
        color: ${(props) => props.habilitado ? "#AFAFAF" : "#DBDBDB"};
        background-color: ${(props) => props.habilitado && "#F2F2F2"};
        padding-left: 11px;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 45px;
        font-size: 20px;
        line-height: 26px;
        color: white;
        background: #52B6FF;
        border-radius: 5px;
        margin-bottom: 25px;
        border: none;
        filter: ${(props) => props.habilitado && "opacity(0.7)"};
    }
`;