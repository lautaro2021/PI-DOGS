import styled from 'styled-components';

export const StyledCard = styled.div`
    .container_card {
        border-radius: 30px;
        width: 300px;
        height: 350px;
        background-color: #faebd7;
        margin: 10%;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    }

    #ON .container_card {
        border-radius: 30px;
        width: 300px;
        height: 350px;
        background-color: black;
        margin: 10%;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    }

    .hijo_card {
        display: flex;
        justify-content: center;
    }

    .img_card {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%; 
        transition: 0.2s;

        &:hover{
            -webkit-transform:scale(1.1);transform:scale(1.1);
        }
    }

    .img_card img{
        width: 250px;
        height: 180px;
        border-radius: 30px;
        margin-top: 20px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .info_card {
        text-align: center;
        font-family: "Helvetica";
        width: 100%;
        height: 150px;
    }

    .info_card .name_card{
        margin-top: 0px;
        font-size: 20px;
        width: 100%;
        height: 25px;
        overflow: hidden
    }

    .weight_container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -20px;
    }

    .bascula{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    .info_card .weight_container img{
        margin-left: 50%;
        height: 35px;
        width: 35px;
        
    }

    .weight{
        width: 70%;
    }


    .info_card .weight_container .weight_card{
        margin-right: 25%;
        font-size: 15px;
    }

    .Temperaments_container{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 65px;
    }

    .dog{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    .Temperaments_container img{
        height: 40px;
        width: 40px;
        margin-left: 45%;
    }

    .temperaments {
        width: 70%;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 15px;
        position: relative;
    }

    .p_card{
        margin-right: 25%;
        font-size: 12px;
        margin-bottom: 5px;
        text-align: center;
    }

`