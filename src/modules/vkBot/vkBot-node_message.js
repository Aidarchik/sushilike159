import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Message } from './components/message';
import './styles/touchDevice.css'

const NodeMessage = (props) => {

    try {
        return (
            <div className="touchdevice-flow">
                <Handle
                    type="target"
                    position={Position.Left}
                    isValidConnection={
                        (params) => {
                            if (params.source === params.target) { return false }
                            return true
                        }}
                />
                <Message data={props} />
                <Handle
                    type="source"
                    position={Position.Right}
                    isValidConnection={
                        (params) => {
                            if (params.source === params.target) { return false }
                            return true
                        }}
                />
            </div>
        )

    } catch (error) {
        console.log(error.message)
    }
}

export default memo(NodeMessage)