import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDia from "../components/CardDia";
import { useContext, useEffect, useState } from "react";
import { Contexto } from "../components/Contexto";
import axios from "axios";
import BASE_URL from "../constants/BASE_URL";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import updateLocale from "dayjs/plugin/updateLocale";
import { ColorRing } from "react-loader-spinner";

export default function Hoje(){

    dayjs.locale('pt-br');
    dayjs.extend(updateLocale)
    dayjs.updateLocale('pt-br', {
    weekdays: [
        "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"
    ]
    })

    const {user, progresso, setProgresso} = useContext(Contexto);
    const [cards, setCards] = useState(null);
    const [finished, setFinished] = useState([]);
    const [loading, setLoading] = useState([]);

    const config = {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/habits/today`, config)
            .then((resposta)=>{
                setCards(resposta.data);
                if(resposta.data.length > 0){
                    setProgresso(((resposta.data.filter((item)=> item.done)).length/resposta.data.length*100).toFixed(0));
                    setLoading([]);
                }
            })
            .catch((erro)=>{
                console.log(erro.response);
                setLoading([]);
            });
    }, [finished]);

    if(cards === null){
        return(
            <Tela>
                <Header/>
                <Loading>
                    <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#52B6FF', '#52B6FF', '#52B6FF', '#52B6FF', '#52B6FF']}
                    />
                </Loading>
                <Footer/>
            </Tela>
        );
    }

    return(
        <Tela>
            <Header/>
            <Body>
                <Topo progresso={progresso}>
                    <h1 data-test="today">{dayjs().format("dddd, DD/MM")}</h1>
                    {progresso === 0 || progresso === "0" ? <p data-test="today-counter">Nenhum hábito concluído ainda</p> : <p data-test="today-counter">{progresso}% dos hábitos concluídos</p>}
                </Topo>
                {cards.map((card)=><CardDia loading={loading} setLoading={setLoading} key={card.id} card={card} finished={finished} setFinished={setFinished}/>)}
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
`;

const Topo = styled.div`
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
    p{ 
        font-size: 18px;
        line-height: 22px;
        color: ${(props)=>props.progresso > 0 ? "#8FC549": "#BABABA"};
    }
`;

const Loading = styled.div`
    min-height: 100dvh; 
    display: flex;
    justify-content: center;
    align-items: center;
`;