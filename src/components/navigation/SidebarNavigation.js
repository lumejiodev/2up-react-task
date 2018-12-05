import React from 'react'
import { FontAwesomeIcon }   from "@fortawesome/react-fontawesome";
import { faTrophy, faStar, faGem, faAnchor } from "@fortawesome/free-solid-svg-icons";
import 'css/navigation.sass';


export default function SidebarNavigation(){
    return (
        <ul className="navigation-list navigation-list_mt">
            <li className="navigation-item navigation-item_active">
                <button className="button">
                    <FontAwesomeIcon icon={faTrophy} />
                </button>
            </li>
            <li className="navigation-item">
                <button className="button">
                    <FontAwesomeIcon icon={faStar} />
                </button>
            </li>
            <li className="navigation-item">
                <button className="button">
                    <FontAwesomeIcon icon={faGem} />
                </button>
            </li>
            <li className="navigation-item">
                <button className="button">
                    <FontAwesomeIcon icon={faAnchor} />
                </button>
            </li>
        </ul>
    )
}