import React, { FC } from 'react';

import Icons from '../../assets/icons';

import './Icon.scss';

interface ComponentProps {
    icon: string;
    [key: string]: any;
}

const AppIcon: FC<ComponentProps> = ({ icon, className }) => {
    if (icon)
        return (
            <svg className={`app-icon ${className ? className : ''}`} viewBox="0 0 24 24">
                <path fill="currentColor" d={(Icons[icon])} />
            </svg>
        );
    
    return (
        <svg className={`app-icon ${className ? className : ''}`} viewBox="0 0 24 24">
            <path fill="currentColor" d={Icons[icon]} />
        </svg>
    )
}

export default AppIcon;