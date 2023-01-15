import React from 'react'
import Card from './card'
import EditChat from './editChat';
import useCRUD from './../../../../hooks/useCRUD';
import { URL_POSTS_REMOTE } from './../../../../const';

const ViewChat = () => {

    // const { data, onCreate, onRead, onUpdate, onDelete, loading, error } = useCRUD(URL_POSTS_REMOTE);
    const POSTS = useCRUD(URL_POSTS_REMOTE);

    if (POSTS.error) {
        console.log('error', POSTS.error)
        return null
    }
    return (
        <div className='pt-3 w-1/2 text-justify bg-white bg-opacity-70 rounded-tl-lg rounded-tr-lg py-1 px-2 mt-5 mx-1 shadow-sm'>
            {
                POSTS.loading ?
                    ('Loading...') :
                    (
                        <>
                            <EditChat add={POSTS.onCreate} />
                            {POSTS.data.map(elem => (
                                <Card
                                    post={elem}
                                    key={elem._id}
                                    remove={POSTS.onDelete}
                                    update={POSTS.onUpdate}
                                />
                            ))}
                        </>
                    )
            }
        </div>
    )
}

export default ViewChat