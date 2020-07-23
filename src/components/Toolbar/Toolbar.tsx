import React from 'react';

import './Toolbar.scss';

interface ComponentProps {
    children?: any;
    [key: string]: any;
}

const AppToolbar = ({ children, className }: ComponentProps) => {
    return (
        <nav className={`app-toolbar ${className}`}>
            {children}
        </nav>
    );
}

export default AppToolbar;