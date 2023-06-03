import styled from "styled-components";
import check from "../assets/check.png";
import { useContext } from "react";
import { Contexto } from "./Contexto";
import BASE_URL from "../constants/BASE_URL";
import axios from "axios";

export default function CardDia(props){

    const {user, setProgresso, progresso} = useContext(Contexto);
    const {card, setFinished, finished} = props;

    const config = {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    }

    function selecionaCard(){
        if(card.done){
            axios.post(`${BASE_URL}/habits/${card.id}/uncheck`, {}, config)
                .then(()=>{setFinished(finished.filter((id)=> id !== card.id))})
                .catch((erro)=>console.log(erro.response));
        }else{
            axios.post(`${BASE_URL}/habits/${card.id}/check`, {}, config)
                .then(()=>setFinished([...finished, card.id]))
                .catch((erro)=>console.log(erro.response));
        }
    }
    
    return(
        <Task card={card}>
            <div data-test="today-habit-name" >
                {card.name}
                <Sequencia>
                    <Atual card={card} data-test="today-habit-sequence">Sequência atual: <span>{card.currentSequence} dias</span></Atual>
                    <Recorde card={card} data-test="today-habit-record">Seu recorde: <span>{card.highestSequence} dias</span></Recorde>
                </Sequencia>
            </div>
            <button onClick={selecionaCard}>
                <img data-test="today-habit-check-btn" src={check} alt="check"/>
            </button>
        </Task>
    );
}

const Task = styled.div`
    display:flex;
    justify-content: space-between;
    width: 340px;
    height: 95px;
    background-color: white;  
    border-radius: 5px;
    padding: 13px 13px 0 15px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
    button{
        width: 69px;
        height: 69px;
        background: ${(props)=>props.card.done?"#8FC549":"#EBEBEB"};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        ion-icon{
            color: white;
            font-size: 36px
        }
    }
    
`;

const Sequencia = styled.div`
    margin-top: 7px;
    *{ 
        font-size: 13px;
        line-height: 16px;
    }
`;

const Atual = styled.p`
    span{
        color: ${(props)=>props.card.done && "#8FC549"};
    }
`;

const Recorde = styled.p`
    span{
        color: ${(props)=>(props.card.currentSequence === props.card.highestSequence && props.card.currentSequence > 0) && "#8FC549"};
    }
`;