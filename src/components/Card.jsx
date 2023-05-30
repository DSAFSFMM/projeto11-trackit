import styled from "styled-components";

export default function Card(){

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];

    return(
        <Task>
            <input type="text" placeholder="nome do hábito" />
            <Days>
                {days.map((day, index)=> <button key={index}>{day}</button>)}
            </Days>
            <Save>
                <p>Cancelar</p>
                <button>Salvar</button>
            </Save>
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

const Save = styled.div`
    gap: 23px;
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p{
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
    }
    button{
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        font-size: 16px;
        line-height: 20px;
        color: white;
        border: none;
    }
`;
