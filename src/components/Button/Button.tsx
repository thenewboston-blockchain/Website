import React, { FC } from 'react';

import { AppIcon } from '../Icon';

import './Button.scss';

interface ComponentProps {
    children?: any;
    icon?: string;
    outline?: boolean,
    [key: string]: any;
}

const AppButton: FC<ComponentProps> = ({ children, icon, outline, primary, className, ...rest }: ComponentProps) => {
    return (
        <button 
            className={`app-button 
                ${className ? className : ''} 
                ${ primary ? 'app-button--primary' : '' }
                ${ outline ? 'app-button--outline' : ''}`}
                {...rest}>
            <div className={`app-button__content`}>
                {icon ? <AppIcon className="app-button__icon" icon={icon} /> : ''}
                {children}
            </div>
        </button>
    );
};

export default AppButton;