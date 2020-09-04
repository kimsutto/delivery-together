import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    width : 100%;
    overflow-x : hidden;
    display : flex;
`;

const Title = styled.div`
    font-size : 20px;
    font-weight : bold;
`;

const Content = styled.div`
    font-size : 17px;
`;

const Button = styled.div`
    width : 100px; 
    height : 40px; 
    background-color : black;
    font-size : 15px;
    color : white;
    text-align : center;
    float : center;
    align-items : center;
    justify-content : center;
`;


function Pay(props){
    return(
        <Wrapper>
            <Link to ="/detail">
                <Title> 결제 금액은 3,450원입니다 </Title>
                <Content>공유 기간 : 2020.09.01 - 2020.10.01</Content>
                /* smartcontract start */
                <Button>결제하기</Button>
            </Link>
        </Wrapper>
    );
}

export default Pay;