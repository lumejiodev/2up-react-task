import React, { Component } from 'react'
import 'components/SidebarNavigation/SidebarNavigation.scss';
import { ReactComponent as CupSidebar} from "assets/cup_sidebar.svg";
import { ReactComponent as Star} from "assets/star.svg";
import { ReactComponent as Anchor} from "assets/anchor.svg";
import { ReactComponent as Diamond} from "assets/diamond.svg";


class SidebarNavigation extends Component {

    iconsColorChangeHandler = (e) => {
        let svgs = document.querySelectorAll('.navigation-list__item .button svg');
        let target = e.target;

        for (var i = 0; i < svgs.length; i++) {
            svgs[i].classList.remove('active');
        }

        while(!(target.classList.contains('sidebarIcon'))) {
            target = target.parentNode;

            if (target.classList.contains('sidebarIcon')) {
                target.classList.add('active')
            }
        }
        // console.log(target);
    }

    render() {
        return (

            <aside className="sidebar">
                <div className="navigation">
                    <div className="logo" />
                    <ul className="navigation-list">
                        <li className="navigation-list__item navigation-list__item_active">
                            <button className="button">
                                <CupSidebar 
                                className='sidebarIcon'
                                onClick={ this.iconsColorChangeHandler }/>
                            </button>
                        </li>
                        <li className="navigation-list__item">
                            <button className="button">
                                <Star 
                                className='sidebarIcon' 
                                onClick={ this.iconsColorChangeHandler }/>
                            </button>
                        </li>
                        <li className="navigation-list__item">
                            <button className="button">
                                <Anchor 
                                className='sidebarIcon' 
                                onClick={ this.iconsColorChangeHandler }/>
                            </button>
                        </li>
                        <li className="navigation-list__item">
                            <button className="button">
                                <Diamond 
                                className='sidebarIcon' 
                                onClick={ this.iconsColorChangeHandler }/>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
            
        )
    }
}

export default SidebarNavigation;