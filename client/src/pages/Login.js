import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const LoginForm = styled.div`
    border-radius : 30px 30px 0px 0px;
    background-color : white;
    margin : 10px;

    & > label {
        color : black;
        font-size : 14px;
        font-weight : bold;
        display : block;
    }

    & > input {
        border : none;
        border-bottom : solid 1px black;
        width : 90%;
    }
`;
const FindId = styled.div`


`;
const LoginButton = styled.div`
    border-radius : 20px;

`;
const JoinButton = styled.div`

`;



export default () => {
    return(
        <LoginForm>
            <label>아이디</label>
            <input type ="text" name = "id"/>
            <label>비밀번호</label>
            <input type ="password" name = "password"/>
            <FindId>아이디 찾기 / 비밀번호 찾기</FindId>
            <LoginButton>로그인</LoginButton>
            <Link to ='/join'><JoinButton>회원가입</JoinButton></Link>

        </LoginForm>
    );
}