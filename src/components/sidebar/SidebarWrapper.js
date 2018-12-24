import React from 'react'
import SidebarNavigation from 'components/navigation/SidebarNavigation'
import 'css/sidebar.sass';

export default function SidebarWrapper() {
    return (
        <aside className="sidebar">
            <div className="navigation-block">
                <div className="logo" />
                <SidebarNavigation />
            </div>
        </aside>
    )
}