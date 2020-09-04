import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    width : 100%;
    overflow-x : hidden;
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


function Detail(props){
    return(
        <Wrapper>
            <Title>넷플릭스 메이트 구해요</Title>
            <Content>가격 : 3,450원</Content>
            <Content>공유 기간 : 2020.09.01 - 2020.10.01</Content>
            <Link to = '/pay'>
                <Button>참여하기</Button>
            </Link>
        </Wrapper>
    );
}
export default Detail;