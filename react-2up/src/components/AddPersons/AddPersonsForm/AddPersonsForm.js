import React from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/images/arrow-point-to-right.png'

const AddPersonsForm = styled.form`
    padding: 0 30px 0 29px;
    margin-top: 167px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const AddPersonsFormTitle = styled.p`
    font-size: 21px;
    margin: 0;
    color: #779181;
    margin-bottom: 20px;
    align-self: flex-start;
`;

const AddPersonsFormInput = styled.input`
    width: 100%;
    border: 2px solid #EFEEF8;
    height: 58px;
    box-sizing: border-box;
    font-size: 21px;
    padding-left: 10px;
    text-overflow: ellipsis;
    margin-bottom: 62px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const AddPersonsFormButton = styled.button`
    width: 34px;
    height: 34px;
    background: linear-gradient(0deg, #7AD18A, #7AD18A), #FFFFFF;
    border: 3px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 12px;
        height: 12px;
        background-image: url(${arrow});
        background-size: cover;
        background-repeat: no-repeat;
        transform: translate(-50%, -50%);
    }
    &:before {
        position: absolute;
        left: -110px;
        top: 0;
        content:'Добавить';
        color: #7AD18A;
        font-size: 21px;
    }
`;


const addPersonsForm = () => {
    return (
        <AddPersonsForm>
            <AddPersonsFormTitle>Имя и Фамилия</AddPersonsFormTitle>
            <AddPersonsFormInput />
            <AddPersonsFormTitle>Количество очков</AddPersonsFormTitle>
            <AddPersonsFormInput />
            <AddPersonsFormButton />
        </AddPersonsForm>
    )
};

export default addPersonsForm