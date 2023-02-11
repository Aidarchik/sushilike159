import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Message } from './components/message';
// import './styles/touchDevice.css'

const NodeMessage = (props) => {

    try {
        return (
            <div className="touchdevice-flow">
                <Handle
                    type="target"
                    style={{ width: 10, height: 10, backgroundColor: 'brown', left: -5 }}
                    position={Position.Left}
                    isValidConnection={
                        (params) => {
                            if (params.source === params.target) { return false }
                            return true
                        }}
                />
                <Message data={props} />
            </div>
        )

    } catch (error) {
        console.log(error.message)
    }
}

export default memo(NodeMessage)