import styled from 'styled-components';


export const StyledPaginate = styled.nav`
    .conteiner_div_paginado{
        background-color: #ffb367;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: -2px -2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .conteiner_div_paginado_ON{
        background-color: #1a1c3a;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: -2px -2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .ul_paginado{
        display:flex;
        flex-direction: row;
        height: 40px;
    }

    .li_paginado{
        list-style: none;
        width: 40px;
        height: 100%;
        border-radius: 20px;
        margin-right: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #faebd7;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

        &:hover {
            background-color: #A0522D;
            color: #FFF5EE;
        }

        &:active{
            transform: scale(1.1);
        }
    }

    .li_paginado_ON{
        list-style: none;
        width: 40px;
        height: 100%;
        border-radius: 20px;
        margin-right: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #444;
        box-shadow: 2px 2px 2px 1px rgba(173, 171, 171, 0.2);
        color: white;

        &:hover {
            background-color: #A0522D;
            color: #FFF5EE;
        }
    }

    .a_paginado{
        cursor: pointer;
        font-family: "Helvetica";
        font-weight: bold;
        padding: 15px;

    }


`