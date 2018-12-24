import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

class Icons extends Component {
    render () {
        return (

            <ul className="icons__list">

                <li className="icons__item">
                    <FontAwesomeIcon 
                    icon={faTrophy} 
                    className="icons__svg icons__svg_active" />
                </li>
                <li className="icons__item">
                    <FontAwesomeIcon 
                    icon={faStar} 
                    className="icons__svg" />
                </li>
                <li className="icons__item">
                    <FontAwesomeIcon 
                    icon={faGem} 
                    className="icons__svg" />
                </li>
                <li className="icons__item">
                    <FontAwesomeIcon 
                    icon={faAnchor} 
                    className="icons__svg" />
                </li>

            </ul>

        );
    }
}

export default Icons;
