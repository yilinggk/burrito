/* eslint-disable max-len */
import React from 'react';

const Next = ({
    fill = 'white',
    style = {},
    width = '24',
    height = '24',
    className = '',
    viewBox = '0 0 440 440',
    pathClass = '',
    pathStyle = {},
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
            className={pathClass}
            style={pathStyle}
            d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
        />
    </svg>
);

export default Next;
