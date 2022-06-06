import styled from 'styled-components';


export const StyledDetail = styled.div `
    .header_detail {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90px;
        background-color: #ffb367;
        width: 100%;
        gap: 20%;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .header_button {
        display: inline-block;
        padding: 10px 10px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: black;
        background-color: #faebd7;
        border: none;
        border-radius: 15px;
        box-shadow: 0 9px #999;
        font-family: 'Helvetica';
        font-weight: bold;
        transition: 0.1s;

        &:hover{
            background-color: #A0522D;
            color: white;
        }

        &:active{
            background-color: #A0522D;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }
    }

    .header_iso {
        width: 80px;
        height: 80px;
    }

    .details_h1 {
        display: inline-block;
        padding: 10px 10px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: black;
        background-color: #faebd7;
        border: none;
        border-radius: 15px;
        box-shadow: 0 9px #999;
        font-family: 'Helvetica';
        font-weight: bold;
        transition: 0.1s;

        &:hover{
            background-color: #A0522D;
            color: white;
        }

        &:active{
            background-color: #A0522D;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }
        
    }

    .body_detail{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3%;
        height: 700px;
    }

    .body_card{
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 85%;
        background-color: #faebd7;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        gap: 30px;
    }

    .img_container{
        height: 100%;
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 40px;
    }

    .img_container img{
        height: 85%;
        width: 100%;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        margin:auto;
    }

    .info_container{
        height: 100%;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .info{
        text-align: center;
        font-family: "Helvetica";
        margin-top: 10%;
    }

    .info h2{
        padding: 5px;
        margin-top: -15%;
        font-size: 40px;
    }

    .containers_info{
        display: flex;
        align-items: center;
        font-size: 20px;
        margin: 6% 0 0;
        height: 75px;
        width: 100%;
    }

    .containers_info h3{
        margin-left: 10%;
        font-weight: normal;
    }

    .containers_info p {
        font-size: 18px;
    }
    
    .temperaments_container{
        margin-left: 6%;
    }
`