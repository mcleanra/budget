import React from 'react';
import './AppLayout.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const AppLayout: React.FC = props => {
    return (
        <ScrollToTop>
            <div className="app-layout">
                <HeaderNav />
                <SideBar />
                <div className="main">{props.children}</div>
            </div>
        </ScrollToTop>
    );
};

export default AppLayout;