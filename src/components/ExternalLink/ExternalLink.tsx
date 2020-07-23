import React from 'react';

const AppExternalLink = ({ href, children, ...rest }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest} >{children}</a>
    )
}

export default AppExternalLink;
