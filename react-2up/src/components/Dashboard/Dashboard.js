import React from 'react';
import styled from 'styled-components';
import bag from '../../assets/images/baggage.svg';
import car from '../../assets/images/rent-a-car.svg';
import train from '../../assets/images/train.svg';
import world from '../../assets/images/world.svg';

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
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const IconContainerLink = styled.a`
    cursor: pointer;
`;

const IconContainerImage = styled.img`
    width: 30px;
    height: 30px;
`;

const dashboard = () => {
    return (
        <Dashboard>
            <LogoButton/>
            <IconContainer>
                <IconContainerItem>
                    <IconContainerLink>
                       <IconContainerImage src={bag} />
                    </IconContainerLink>
                </IconContainerItem>
                <IconContainerItem>
                    <IconContainerLink>
                        <IconContainerImage src={car} />
                    </IconContainerLink>
                </IconContainerItem>
                <IconContainerItem>
                    <IconContainerLink>
                        <IconContainerImage src={train} />
                    </IconContainerLink>
                </IconContainerItem>
                <IconContainerItem>
                    <IconContainerLink>
                        <IconContainerImage src={world} />
                    </IconContainerLink>
                </IconContainerItem>
            </IconContainer>
        </Dashboard>
    )
};

export default dashboard