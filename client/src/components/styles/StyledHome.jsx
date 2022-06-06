import styled from 'styled-components';
import fondo2 from '../../images/App/fondo2.png'


export const StyledHome = styled.div `
    #ON.home_container{
        background-image: url(${fondo2});
        transition: 0.4s
    }

    .container{
        position: relative;
        display: block;
        width: 60px;
        height: 30px;
        border-radius: 30px;
        background-color: #fff;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        transition: 0.5s;

    }

    #ON .container{
        position: relative;
        display: block;
        width: 60px;
        height: 30px;
        border-radius: 30px;
        background-color: #444;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
    }

    #OFF .indicator{
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        background-color: #999;
        transform: scale(0.8);
        cursor: pointer;
        transition: 0.1s;

        &:hover{
            transform: scale(1.3)
        }
    }

    #ON .indicator{
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        background-color: #fff;
        transform: scale(0.8);
        cursor: pointer;
        transition: 0.1s;

        &:hover{
            transform: scale(1.3)
        }
    }

    .div2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .masterDiv{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 80%;
    }

    .div_hijo_home {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        height: 800px;
        width: 100%;
        margin-bottom: 5%;
        gap: 5%;
    }

    .container_header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 90px;
        background-color: #ffb367;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        transition: 0.4s
    }

    #ON .container_header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 90px;
        background-color: #1a1c3a;
        box-shadow: 2px 2px 2px 1px rgba(255, 255, 255, 0.075);
        transition: 0.4s
    }

    .header_createButton{
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

    #ON .header_createButton{
        display: inline-block;
        padding: 10px 10px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: white;
        background-color: #444;
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

    .container_order{
        height: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    
    .header_orderButtons{
        display: inline-block;
        padding: 10px 5px;
        font-size: 15px;
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

    #ON .header_orderButtons{
        display: inline-block;
        padding: 10px 5px;
        font-size: 15px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: white;
        background-color: #444;
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

    .header_orderButtons option{
        font-family: 'Helvetica';
    }

    .h1{
        font-family: 'Helvetica';
        text-align: center;
        margin-right: 5%;
    }

    #ON .h1{
        font-family: 'Helvetica';
        text-align: center;
        color: #fff;
    }
`

