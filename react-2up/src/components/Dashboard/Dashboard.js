import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Trophy} from 'styled-icons/fa-solid/Trophy';
import {Star} from 'styled-icons/fa-solid/Star';
import {Gem} from 'styled-icons/fa-regular/Gem';
import {Anchor} from 'styled-icons/fa-solid/Anchor';

const Dashboard = styled.div`
    width: 114px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoButton = styled.div`
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background-color: #F7527C;
    border: 5px solid #cecece;
    margin-top: 10px;
    margin-bottom: 115px;
`;

const IconContainer = styled.ul`
    width: 59px;
    min-height: 369px;
`;

const IconContainerItem = styled.li`
    list-style: none;
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const IconContainerLink = styled.a`
    cursor: pointer;
`;

export const Cup = styled(Trophy)`
    color: #EFEEF8;
    &:hover {
        color: #F7527C
    }
`;

export const Stars = styled(Star)`
    color: #EFEEF8;
    &:hover {
        color: #F7527C
    }
`;

export const Diamond = styled(Gem)`
    color: #EFEEF8;
    &:hover {
        color: #F7527C
    }
`;

export const Anchors = styled(Anchor)`
    color: #EFEEF8;
    &:hover {
        color: #F7527C
    }
`;

const dashboard = () => {
    return (
        <Dashboard>
            <LogoButton/>
            <IconContainer>
                <IconContainerItem>
                    <IconContainerLink>
                        <Cup size="24"/>
                    </IconContainerLink>
                </IconContainerItem>
                <IconContainerItem>
                    <IconContainerLink>
                        <Stars size="24" />
                    </IconContainerLink>
                </IconContainerItem>
                <IconContainerItem>
                    <IconContainerLink>
                        <Diamond size="24" />
                    </IconContainerLink>
                </IconContainerItem>
                <IconContainerItem>
                    <IconContainerLink>
                        <Anchors size="24" />
                    </IconContainerLink>
                </IconContainerItem>
            </IconContainer>
        </Dashboard>
    )
};

export default dashboard