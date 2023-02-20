import Card from './card'
import EditChat from './editChat';
import useCRUD from './../../../hooks/useCRUD';
import { URL_POSTS_REMOTE } from './../../../consts/const';


const ViewChat = () => {

    // const { data, onCreate, onRead, onUpdate, onDelete, loading, error } = useCRUD(URL_POSTS_REMOTE);
    const Posts = useCRUD(URL_POSTS_REMOTE);

    if (Posts.error) {
        console.log('error', Posts.error)
        return null
    }
    return (
        <div className='text-justify bg-white bg-opacity-70 rounded-tl-lg rounded-tr-lg mx-60 py-1 px-2 mt-5 mx-1 shadow-lg flex justify-around flex-col'>

            {Posts.isRead ?
                ('Loading...')
                :
                ((Posts.data === null) ?
                    (
                        <EditChat
                            add={Posts.onCreate}
                            loading={Posts.loading}

                        />
                    ) :
                    (
                        <>
                            <EditChat
                                add={Posts.onCreate}
                                loading={Posts.loading}

                            />
                            {Posts.data.map(elem => (
                                <Card
                                    key={elem._id}
                                    post={elem}
                                    remove={Posts.onDelete}
                                    update={Posts.onUpdate}
                                    loading={Posts.loading}
                                />
                            ))}
                        </>
                    )
                )
            }

        </div>
    )
}

export default ViewChat
