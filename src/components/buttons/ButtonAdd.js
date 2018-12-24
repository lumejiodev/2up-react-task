import React from 'react'
import { ReactComponent as ButtonArrow} from "img/button_arrow.svg";
import 'css/buttons.sass';

export default function ButtonAdd(){
    return (
        <button className="button button_add dashboard-item_add-btn">
            <span>Добавить</span>
            <ButtonArrow />
        </button>
    )
}