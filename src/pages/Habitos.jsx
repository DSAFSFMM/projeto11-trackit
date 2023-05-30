import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Habitos(){
    return(
        <Tela>
            <Header/>
            <Body>
                <Topo>
                    Meus hábitos
                    <button>
                        <p>+</p>
                    </button>
                </Topo>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Body>
            <Footer/>
        </Tela>
    );
}

const Tela = styled.div`
    background-color: #F2F2F2;
    min-height: 100dvh;
    padding-top: 22px;
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