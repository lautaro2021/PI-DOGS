import styled from 'styled-components';
import hueso from '../../images/hueso.png'

export const StyledSearchBar = styled.div `
    .container_search{
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .button {
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


import styled from 'styled-components';
import hueso from '../../images/hueso.png'

export const StyledSearchBar = styled.div `
    .container_search{
        border: 2px solid black;
        display: flex;
        position: absolute;
        transform: translate(-50%, -50%);
        background: #00FFFF;
        height: 40px;
        border-radius: 40px;
        padding: 10px;

        &:hover > .input{
            width: 100px;
            padding: 0 6px;
        }

        &:hover > .button{
            background: white;
            color: black;
        }
    }

    .button{
        color: aqua;
        float: right;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #0000FF;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
        color: white;
        cursor: pointer;
    }

    .input{
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: white;
        font-size: 16px;
        transition: 0.4s;
        line-height: 40px;
        width: 0px;
        font-weight: bold;
    }

`