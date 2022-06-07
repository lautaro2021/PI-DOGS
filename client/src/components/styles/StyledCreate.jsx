import styled from 'styled-components';

export const StyledCreate = styled.div`
    .create_container {
        width: 100%;
        height: 100vh;
    }

    .create_header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 90px;
        background-color: #ffb367;
        width: 100%;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .create_header button {
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

    .create_header h1{
        display: inline-block;
        padding: 10px 10px;
        font-size: 20px;
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
    }

    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }

    .ok_button{
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

    .container_errors{
        background-color: #FFEFD5;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);;
        margin-left: 35px;
        color: red;
        font-family: "Helvetica", sans-serif;
        font-weight: bold;
        height: 100px;
        width: 250px;
        text-align: center;
        
    }

    .container_errors img{
        margin-top: 10px;
    }

    .full_cont{
        display: flex;
        align-items: center;
        justify-content: space-around;

    }

    .form_container{
        width: 60%;
        height: 60vh;
        display: flex;
        align-items: center;
        margin-top: 5%;
    }

    .form {
        margin-left: 200px;
        height: 55vh;
        width: 50vh;
        background-color: #faebd7;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        border-radius: 30px;

    }

    .form_2{
        width: 80%;
        margin-left: 20%;
    }

    .create_dog{
        font-family: "Helvetica Neue",Helvetica;
        background-color: #fff;
        text-align: center;
        width: 80%;
        margin-left: 10%;
        height: 50px;
        line-height: 50px;
        border-radius: 15px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .name{
        display: flex;
        align-items: center;
        gap: 30%;
        margin-bottom: 15px;
    }

    .input{
        width: 150px;
        height: 20px;
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

    .name label{
        margin-top: 5%;
        font-family: "Helvetica";
        font-weight: bold;
    }

    .height {
        display: flex;
        align-items: center;
        gap: 20%;
        margin-bottom: 5px;
    }

    .input2{
        width: 100px;
        height: 20px;
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

    .height label{
        margin-top: 5%;
        font-family: "Helvetica";
        font-weight: bold;
    }

    .weight{
        display: flex;
        align-items: center;
        gap: 20%;
        margin-bottom: 5px;
    }


    .weight label{
        margin-top: 5%;
        font-family: "Helvetica";
        font-weight: bold;
    }

    .lifes{
        display: flex;
        align-items: center;
        gap: 17%;
        margin-bottom: 5px;
    }

    .lifes label{
        margin-top: 5%;
        font-family: "Helvetica";
        font-weight: bold;
    }

    .img {
        display: flex;
        align-items: center;
        gap: 20%;
        margin-bottom: 5px;
    }

    .img label {
        margin-top: 5%;
        font-family: "Helvetica";
        font-weight: bold;
    }

    .temperament {
        display: flex;
        align-items: center;
        gap: 15%;
        margin-bottom: 5px;
    }

    .temperament select{
        width: 150px;
        height: 20px;
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

    .temperament label{
        margin-top: 5%;
        font-family: "Helvetica";
        font-weight: bold;
    }

    .ul_container{
        width: 50%;
        height: 60vh;
        margin-top: 5%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    
    .ul{
        height: 55vh;
        width: 50vh;
        background-color: #faebd7;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .li_container{
        height: 450px;
        width: 400px;
        margin-right: 40px;
        margin-bottom: 20px;
    }


    .li{
        list-style: none;
        width: 100%;
        height: 30px;
        font-family: "Helvetica";
        line-height: 30px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0;
        gap: 10%;
        position: relative;
    }

    .li_img{
        margin-top: 45px;
        margin-left: 15px;
        list-style: none;
        width: 42.5vh;
        height: 30vh; 
    }

    .li p{
        width: 50%;
        height: 100%;
        border-radius:15px;
        background-color: #fff;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .p_temp{
        font-size: 12px;
        overflow-y: scroll;
    }

    .img2{
        margin: auto;
        height: 100%; 
        width: 100%;
        border-radius: 30px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .info_li_container{
        text-align: center;
        width: 100%;
        height: 150px;
    }


`