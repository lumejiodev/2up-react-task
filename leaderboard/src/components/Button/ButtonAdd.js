import React from 'react'
import { ReactComponent as ButtonArrow} from "../../img/button_arrow.svg";
import './ButtonAdd.scss';

export default function ButtonAdd() {
    return (
        <button className='button button_add'>
            <span>Добавить</span>
            <ButtonArrow />
        </button>
    )
}