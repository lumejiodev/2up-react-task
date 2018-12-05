import React from 'react'

export default function DashboardHeader({ headerTitle, color }){
    return (
        <div className={`dashboard-item__header dashboard-item__header_${color}`}>
            <p>{ headerTitle }</p>
        </div>
    )
}