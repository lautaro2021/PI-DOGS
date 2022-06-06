import styled from 'styled-components';
import hueso from '../../images/hueso.png'

export const StyledSearchBar = styled.div `
    .container_search{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .input{
        width: 180px;
        height: 30px;
        border: none;
        box-shadow: 0px 6px #999;
        border-radius: 20px;
        margin-top: 10px;
        text-align: center;
        font-family: "Helvetica";
        font-weight: bold;
        cursor: pointer;
        &:hover{
            -webkit-transform:scale(1.1);transform:scale(1.1);
        }

    }

    .button {
        margin-top: 10px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-image: url(${hueso});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: none;
        text-decoration:none;
        overflow: hidden;
        text-align: center;
        box-shadow: 2px 2px #999;
        cursor: pointer;

        &:hover{
            -webkit-transform:scale(1.1);transform:scale(1.1);

        }
    }
`