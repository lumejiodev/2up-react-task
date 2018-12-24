import React from 'react'
import SidebarWrapper from 'components/sidebar/SidebarWrapper'
import MainBlockWrapper from 'components/mainBlock/MainBlockWrapper'
import 'css/wrapper.sass';

export default class LeaderBoardTask extends React.Component {
    render() {
        return (
          <div className="wrapper">              
            <SidebarWrapper />
            <MainBlockWrapper />
          </div>
        )            
    }
}