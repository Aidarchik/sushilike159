import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Message } from './components/message';
import './styles/touchDevice.css'

const NodeMessage = (props) => {

    try {
        return (
            <div className="min-w-96 min-h-48 bg-slate-600 rounded-lg touchdevice-flow">
                <Handle
                    type="target"
                    position={Position.Left}
                    isValidConnection={
                        (params) => {
                            // console.log('target', params)
                            return true
                        }}
                />
                <Message data={props.id} />
                <Handle
                    type="source"
                    position={Position.Right}
                    isValidConnection={
                        (params) => {
                            // console.log('source', params)
                            return true
                        }} />
            </div>
        )

    } catch (error) {
        console.log(error.message)
    }
}

export default memo(NodeMessage)