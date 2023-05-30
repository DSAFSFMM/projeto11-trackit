import styled from "styled-components";
import check from "../assets/check.png";

export default function CardDia(){
    return(
        <Task>
            <div>
                Ler 1 capítulo de livro
                <Sequencia>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </Sequencia>
            </div>
            <button>
                <img src={check} alt="check"/>
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