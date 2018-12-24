import React, { Component } from 'react';
import Logo from './logo';
import Icons from './icons';

class Panel extends Component {
    render () {
        return (
            <aside className="left-panel bg_white">

                <div className="logo__wrapper">
                    <Logo />
                </div>
            
                <Icons />

            </aside>
        );
    }
}

export default Panel;