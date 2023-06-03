import styled from "styled-components";
import check from "../assets/check.png";

export default function CardDia(props){

    const {card} = props;
    
    return(
        <Task>
            <div data-test="today-habit-name" >
                {card.name}
                <Sequencia>
                    <p data-test="today-habit-sequence">Sequência atual: {card.currentSequence}</p>
                    <p data-test="today-habit-record">Seu recorde: {card.highestSequence}</p>
                </Sequencia>
            </div>
            <button>
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
        background: #EBEBEB;
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
    p{ 
        font-size: 13px;
        line-height: 16px;
    }
`;