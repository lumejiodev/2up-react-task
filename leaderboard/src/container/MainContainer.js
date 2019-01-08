import React, { Component } from 'react';
import SidebarNavigation from '../components/SidebarNavigation/SidebarNavigation';
import LeaderBoard from '../components/LeaderBoard/LeaderBoard';
import './MainContainer.css';

class MainContainer extends Component {
    render() {
        return (
            <div className='Main-container'>
                <SidebarNavigation />
                <LeaderBoard />
            </div>
        )
    }
}

export default MainContainer;