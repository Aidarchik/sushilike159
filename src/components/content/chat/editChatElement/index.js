import React, { useEffect, useState } from 'react'
import { URL_POSTS, URL_POSTS_REMOTE } from '../../../../consts'
import Card from './card'

const EditChatElement = () => {

    const [posts, setPosts] = useState([
        {
            _id: null,
            author: '',
            title: '',
            content: '',
            picture: ''
        }
    ])

    useEffect(() => {
        fetch(URL_POSTS)
            .then(res => res.json())
            .then(json => setPosts(json.message))
    }, [])

    return (
        <div className='pt-3 w-1/2 text-justify bg-white bg-opacity-70 rounded-tl-lg rounded-tr-lg py-1 px-2 mt-5 mx-1 shadow-sm'>
            {posts.map(elem => (
                <Card post={elem} key={elem._id} />
            ))}
        </div>
    )
}

export default EditChatElement