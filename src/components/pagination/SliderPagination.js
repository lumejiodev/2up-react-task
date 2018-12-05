import React from 'react'
import 'css/pagination.sass';

export default function SliderPagination(){
    return (
        <ul className="pagination dashboard-item_pagination">
            <li>
                <button className="button button__pagination button__pagination_active" />
            </li>
            <li>
                <button className="button button__pagination" />
            </li>
            <li>
                <button className="button button__pagination" />
            </li>
        </ul>
    )
}