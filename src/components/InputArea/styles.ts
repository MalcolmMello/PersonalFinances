import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    input, select, button {
        flex:1;
        min-width:150px;
        padding: 10px;
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top:20px;
        outline:0;
    };
    button {
        cursor: pointer
    }
`

export const InputArea = styled.div``

export const Title = styled.div`
    min-height: 21px;
    font-weight: bold;
`

export const errorMessage = styled.div`
    display:flex;
    align-items:center;
    background-color: #FF6347;
    box-shadow: 0px 0px 5px #FF0000;
    border: 1px solid #b22222;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
`

export const InputContainer = styled.form`
    display flex;
`