import styled from 'styled-components';
import pe from '../../images/pe.png';

export const StyledLanding = styled.div`
    background: url(${pe});
    height: 100vh;

    .logo{
        margin-left: 60%;
        margin-top: 10%;
    }

    .Landing_button {
        margin-left: 71.5%;
        margin-top: 5;
    }

    div button {
        display: inline-block;
        padding: 15px 25px;
        font-size: 24px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: black;
        background-color: #ffb367;
        border: none;
        border-radius: 15px;
        box-shadow: 0 9px #999;
        font-family: 'Helvetica';
        font-weight: bold;
        transition: 0.4s;

        &:hover{
            background-color: #D2691E;
            color: white;
        }

        &:active{
            background-color: #D2691E;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }
}
    
`