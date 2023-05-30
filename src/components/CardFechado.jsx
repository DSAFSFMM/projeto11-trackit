import styled from "styled-components";

export default function CardFechado(){

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    return(
        <Task>
            <p>Ler um capítulo de livro</p>
            <Days>
                {days.map((day, index)=> <button key={index} disabled>{day}</button>)}
            </Days>
            <ion-icon name="trash-outline"></ion-icon>
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
    ion-icon{
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
    button{
        margin-right:4px;
        width: 30px;
        height: 30px;
        background: white;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;
