import React from 'react'
import 'components/Pagination/Pagination.scss';

export default function Pagination() {
    return (
        <ul className="pagination leaderboard__pagination">
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