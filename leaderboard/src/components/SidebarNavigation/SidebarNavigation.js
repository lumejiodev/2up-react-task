import React from 'react'
import './SidebarNavigation.css';
import { ReactComponent as CupSidebar} from "../../img/cup_sidebar.svg";
import { ReactComponent as Star} from "../../img/star.svg";
import { ReactComponent as Anchor} from "../../img/anchor.svg";
import { ReactComponent as Diamond} from "../../img/diamond.svg";


export default function SidebarNavigation() {
    return (

        <aside className="sidebar">
            <div className="navigation">
                <div className="logo" />
                <ul className="navigation-list">
                    <li className="navigation-list__item navigation-list__item_active">
                        <button className="button">
                            <CupSidebar />
                        </button>
                    </li>
                    <li className="navigation-list__item">
                        <button className="button">
                            <Star />
                        </button>
                    </li>
                    <li className="navigation-list__item">
                        <button className="button">
                            <Anchor />
                        </button>
                    </li>
                    <li className="navigation-list__item">
                        <button className="button">
                            <Diamond />
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
        
    )
}