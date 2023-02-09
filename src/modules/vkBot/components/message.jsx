import React from 'react';
export const Message = (props) => {
    return (
        <>
            <pre></pre>
            <pre>{JSON.stringify(props, null, 1)}</pre>
        </>
    )
}