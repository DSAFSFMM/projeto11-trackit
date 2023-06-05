import styled from "styled-components";
import { Contexto } from "./Contexto";
import { useContext } from "react";
import axios from "axios";
import BASE_URL from "../constants/BASE_URL";
import dump from "../assets/dump.svg";

export default function CardFechado(props){

    const {user} = useContext(Contexto);
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const {task, tasks, setAtualiza, setTasks} = props;

    function removeTask(){
        if(confirm("Tem certeza que deseja remover este hábito?")){
            setTasks(tasks.filter((item)=> item.id !== task.id));
            const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            }
    
            axios.delete(`${BASE_URL}/habits/${task.id}`, config)
                .then(()=>{setAtualiza(task.id * -1)})
                .catch((erro)=>{console.log(erro.response)});
        }
    }

    return(
        <Task data-test="habit-container">
            <p data-test="habit-name">{task.name}</p>
            <Days>
                {days.map((day, index)=> <Day data-test="habit-day" key={index} selecionado={task.days.includes(index)} disabled>{day}</Day>)}
            </Days>
            <img src={dump} alt="lixeira" data-test="habit-delete-btn" onClick={removeTask}/>
        </Task>
    );
}

const Task = styled.div`
    position: relative;
    margin-bottom: 10px;
    padding: 13px 0 0 14px;
    width: 340px;
    height: 90px;
    background-color: white;
    border-radius: 5px;
    img{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    *{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
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
