import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CardFechado from "../components/CardFechado";
import { useEffect } from "react";
import { useContext } from "react";
import { Contexto } from "../components/Contexto";
import axios from "axios";
import BASE_URL from "../constants/BASE_URL";
import { useState } from "react";


export default function Habitos(){

    const {user} = useContext(Contexto);
    const [tasks, setTasks] = useState(null);
    const [novoCard, setNovoCard] = useState(false);
    const [atualiza, setAtualiza] = useState(0);
    const [habito, setHabito] = useState("");
    const [dias, setDias] = useState([]);

    const config = {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    }
    useEffect(()=>{
        axios.get(`${BASE_URL}/habits`, config)
            .then((resposta)=>{setTasks(resposta.data)})
            .catch((erro)=>{console.log(erro.response)});
    }, [atualiza]); 

    if(tasks === null){
        return(
            <Tela>
                <Header/>
                <Body>
                    <Topo>
                        Meus hábitos
                        <button data-test="habit-create-btn" onClick={()=>setNovoCard(true)}>
                            <p>+</p>
                        </button>
                    </Topo>
                    {novoCard && <Card habito={habito} setHabito={setHabito} dias={dias} setDias={setDias} setAtualiza={setAtualiza} setNovoCard={setNovoCard}/>}
                    <p>Carregando habitos...</p>
                </Body>
                <Footer/>
            </Tela>
        )
    }

    return(
        <Tela>
            <Header/>
            <Body>
                <Topo>
                    Meus hábitos
                    <button data-test="habit-create-btn" onClick={()=>setNovoCard(true)}>
                        <p>+</p>
                    </button>
                </Topo>
                {tasks.map((task)=><CardFechado key={task.id} task={task} tasks={tasks} setTasks={setTasks} setAtualiza={setAtualiza}/>)}
                {novoCard && <Card habito={habito} setHabito={setHabito} dias={dias} setDias={setDias} setAtualiza={setAtualiza} setNovoCard={setNovoCard}/>}
                {tasks.length === 0 && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </Body>
            <Footer/>
        </Tela>
    );
}

const Tela = styled.div`
    background-color: #F2F2F2;
    min-height: 100dvh;
    padding-top: 22px;
    padding-bottom: 92px;
`;

const Body = styled.div`
    padding: 0 18px 0 18px;
    *{
        font-family: 'Lexend Deca';
        font-weight: 400;
    }
    margin-top: 70px;
    p{
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;

const Topo = styled.div`
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    button{
        display:flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        p{
            color: white;
            font-size: 27px;
        }
    }
`;