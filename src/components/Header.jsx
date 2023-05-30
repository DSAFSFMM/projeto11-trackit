import styled from "styled-components";
import profile from "../assets/profile.png";
import logo from "../assets/trackIt.png";

export default function Header(){
    return(
        <Top>
            <img src={logo} alt="logo" />
            <img src={profile} alt="profilePicture" />
        </Top>
    );
}

const Top = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
