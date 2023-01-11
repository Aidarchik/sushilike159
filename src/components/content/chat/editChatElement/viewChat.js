import React, { useCallback, useState } from 'react'
import { URL_POSTS_REMOTE } from '../../../../const'
import Card from './card'
import useFetch from '../../../../hooks/useFetch';
import { useEffect } from 'react';
import EditChat from './editChat';

const ViewChat = () => {

    const [data, setData] = useState([])
    const { request, loading, error } = useFetch()

    const getPosts = useCallback(async () => {
        try {
            const data = await request(URL_POSTS_REMOTE, 'GET')
            setData(data.message)
        } catch (e) { }
    }, [request])

    useEffect(() => {
        getPosts()
    }, [getPosts])

    const onRemove = async (id) => {
        try {
            await request(URL_POSTS_REMOTE + '/' + id, 'DELETE')
            getPosts()
        } catch (e) { }
    }

    const onAdd = async () => {
        try {
            await request(
                URL_POSTS_REMOTE,
                'POST',
                JSON.stringify({
                    "author": "Aidar",
                    "title": "Title",
                    "content": "Content"
                }),
                {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            )
            getPosts()
        } catch (e) { }
    }



    if (loading) return 'Loading...'
    if (error) {
        console.log('error', error)
        return null
    }

    return (
        <>
            {data.map(elem => (
                <Card post={elem} key={elem._id} remove={onRemove} />
            ))}
            <EditChat add={onAdd} />
        </>
    )
}

export default ViewChat