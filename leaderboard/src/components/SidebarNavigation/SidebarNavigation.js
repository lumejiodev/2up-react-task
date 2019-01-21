import React, { Component } from 'react'
import 'components/SidebarNavigation/SidebarNavigation.scss';
import { ReactComponent as CupSidebar} from "assets/cup_sidebar.svg";
import { ReactComponent as Star} from "assets/star.svg";
import { ReactComponent as Anchor} from "assets/anchor.svg";
import { ReactComponent as Diamond} from "assets/diamond.svg";


class SidebarNavigation extends Component {

    // state = {
    //     isActive: false
    // }

    iconsColorChangeHandler = (e) => {
        let svgs = document.querySelectorAll('.navigation-list__item .button svg');
        // console.log(svgs[1].firstChild);
        for (var i = 0; i < svgs.length; i++) {
            svgs[i].classList.remove('active');
        }
        
        // let currentState = this.state.isActive;
        console.log(e.target);
        e.target.classList.add('active')
        // this.setState({
        //     isActive: !currentState
        // })
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
                                
                                onClick={ this.iconsColorChangeHandler }/>
                            </button>
                        </li>
                        <li className="navigation-list__item">
                            <button className="button">
                                <Star 
                                 
                                 onClick={ this.iconsColorChangeHandler }/>
                            </button>
                        </li>
                        <li className="navigation-list__item">
                            <button className="button">
                                <Anchor 
                                 
                                 onClick={ this.iconsColorChangeHandler }/>
                            </button>
                        </li>
                        <li className="navigation-list__item">
                            <button className="button">
                                <Diamond 
                                 
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