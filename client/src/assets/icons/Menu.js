/* eslint-disable max-len */
import React from 'react';

const Menu = ({
    fill = 'white',
    style = {},
    width = '24',
    height = '24',
    className = '',
    viewBox = '0 0 24 24',
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        className={className}
        style={style}
    >
        <path
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
        />
    </svg>
);

export default Menu;
