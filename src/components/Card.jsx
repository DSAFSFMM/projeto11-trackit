import { useState } from "react";
import styled from "styled-components";
import { Contexto } from "./Contexto";
import { useContext } from "react";
import axios from "axios";
import BASE_URL from "../constants/BASE_URL";
import { ThreeDots } from "react-loader-spinner";


export default function Card(props){

    const {setAtualiza, setNovoCard} = props;
    const {user} = useContext(Contexto);

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [habito, setHabito] = useState("");
    const [dias, setDias] = useState([]);
    const [habilitado, setHabilitado] = useState(false);

    function criaHabito(event){
        event.preventDefault();
        setHabilitado(true);
        
        const novoHabito = {
            name: habito,
            days: dias
        }

        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.post(`${BASE_URL}/habits`, novoHabito, config)
            .then((resposta)=>{
                setNovoCard(false);
                setAtualiza(resposta.data.id);
            })
            .catch((erro)=>{console.log(erro.response)});
    }

    function selecionaDia(index){
        if(dias.includes(index)){
            setDias(dias.filter((item)=>item !== index));
        }else{
            setDias([...dias, index]);
        }
    }

    return(
        <Task>
            <form onSubmit={criaHabito}>
                <input type="text" placeholder="nome do hábito" value={habito} onChange={(event)=>setHabito(event.target.value)} required/>
                <Days>
                    {days.map((day, index)=> <Day type="button" onClick={()=>selecionaDia(index)} key={index} selecionado={dias.includes(index)} >{day}</Day>)}
                </Days>
                <Save>
                    <Cancel type="button" disabled={habilitado} onClick={()=>{setNovoCard(false);setAtualiza("cancela");}}>
                        <p>Cancelar</p>
                    </Cancel>
                  
                    <Confirm type="submit" disabled={habilitado}>{
                    !habilitado ? "Salvar" : <ThreeDots
                        height="30"
                        width="30"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />
                     }
                    </Confirm>
                </Save>
            </form>
        </Task>
    );
}

const Task = styled.div`
    margin-bottom: 30px;
    padding: 18px 16px 0 19px;
    width: 340px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    *{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
    }
    input{
        padding-left: 11px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 300px;
        height: 45px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;

const Days = styled.div`
    margin-top: 10px;
`;

const Day = styled.button`
    margin-right:4px;
    width: 30px;
    height: 30px;
    background: ${(props)=>props.selecionado? " #CFCFCF": "white"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: ${(props)=>props.selecionado? "white": "#DBDBDB"};
`;

const Save = styled.div`
    gap: 23px;
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button:disabled{
        filter: opacity(0.7);
    }
`;

const Cancel = styled.button`
    background: transparent;
    border: none;
    color:#52B6FF;
    p{
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }
`;

const Confirm = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-size: 16px;
    line-height: 20px;
    color: white;
    border: none;
`;