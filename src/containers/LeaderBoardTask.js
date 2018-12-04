import React from 'react'
import { FontAwesomeIcon }   from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default class Todo extends React.Component {
    render() {
        return <div>
            <FontAwesomeIcon icon={faTrophy} />
            <h1>Hello</h1>
          </div>;
    }
}