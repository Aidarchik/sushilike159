import React from 'react';
import { useState } from 'react';

const Blog = () => {

    const [command, setCommand] = useState('');

    const commandOn = (event) => {
        setCommand(event.target.value)
    }

    return (
        <div className='m-4 flex-shrink-2'>
            <input type="text" placeholder='что хотели?' onChange={commandOn} />
            <p>{command}</p>
        </div>
    )
}

export default Blog;