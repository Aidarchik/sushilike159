import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { URL_POSTS_REMOTE } from '../const';
import useCRUD from './../hooks/useCRUD';
import Card from './content/chat/editChatElement/card';

const handleStyle = { left: 10 };

const TextUpdaterNode = ({ data }) => {

    try {
        const Posts = useCRUD(URL_POSTS_REMOTE)

        if (Posts.error) {
            console.log('error', Posts.error)
            return null
        }
        return (
            <div className="w-96 h-48 bg-slate-600 rounded-lg">
                <Handle type="target" position={Position.Top} />
                {Posts.loading.isRead || Posts.data === null ?
                    ('Loading...') :
                    (
                        <Card
                            post={Posts.data[0]}
                            remove={Posts.onDelete}
                            update={Posts.onUpdate}
                            loading={Posts.loading}
                        />
                    )}
                <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
                <Handle type="source" position={Position.Bottom} id="b" />
            </div>
        )

    } catch (error) {
        console.log(error.message)
    }
}

export default memo(TextUpdaterNode)