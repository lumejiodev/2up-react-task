import React from 'react';
import styled from 'styled-components';

const PagintionButtonsContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
`;

const PaginationButtonsList = styled.ul`
    display: inline-block;
`;

const PaginationListItem = styled.li`
    display: inline-block;
    margin-right: 15px;
    &:last-child {
        margin-right: 0;
    }
`;

const PagginationButton = styled.button`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(132, 122, 209, 0.3);
    border: 0;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        width: 13px;
        height: 13px;
        background-color: #847AD1;
    }
`;


const paginationButtons = () => {
    return (
        <PagintionButtonsContainer>
            <PaginationButtonsList>
                <PaginationListItem>
                    <PagginationButton/>
                </PaginationListItem>
                <PaginationListItem>
                    <PagginationButton/>
                </PaginationListItem>
                <PaginationListItem>
                    <PagginationButton/>
                </PaginationListItem>
            </PaginationButtonsList>
        </PagintionButtonsContainer>
    )
};

export default paginationButtons