import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    gap: 32px 0;
    h1,img,button, p{
        margin: 0;
        padding: 0;
    }
    img{
        width: 300px;
    }
    button{
        padding: 10px 25px;
        border: none;
        background-color: #000;
        color: #FFF;
        border-radius: 10px;
        cursor: pointer;
    }
    p{
        font-size: 20px;
    }
    .direitos{
        font-weight: bold;
        font-size: 16px;
    }

    @media screen and (max-width: 600px){
        p{
            width: 300px;
            text-align: center;
        }
    }
`