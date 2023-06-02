import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDia from "../components/CardDia";


export default function Hoje(){

    return(
        <Tela>
            <Header/>
            <Body>
                <Topo>
                    Segunda, 17/05
                    <p>Nenhum hábito concluído ainda</p>
                </Topo>
                <CardDia/>
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
        color: #BABABA;
    }
`;