import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const RecruitmentSection = styled.div`
    display : flex;
    width : 100%; 
    height : 100px;
    padding : 20px;

`;

const RecSection = styled.div`
    
`;

const RecIcon = styled.div`
    background-color : dodgerblue;
    width : 100px;
    height : 100px;
`;
const Title = styled.div`
    font-size : 16px;
    font-weight : bold;
`;
const Price = styled.div`
    font-size : 12px;
    color : gray;
`;
const Time = styled.div`
    font-size : 12px;
    color : gray;
`;


const Recruitment = () => {
    return(
        <>
            <RecruitmentSection>
                <RecIcon/>
                <RecSection>
                    <Title>넷플릭스</Title>
                    <Time>30분 전</Time>
                    <Price>3,450원</Price>
                </RecSection>
            </RecruitmentSection>
        </>
    );
}

export default Recruitment;