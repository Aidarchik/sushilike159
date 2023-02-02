import React from 'react';
import EditChat from './../content/chat/editChatElement/editChat';

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <marquee direction='left'>
                <div className="description" title='HI'>You can drag these nodes to the pane on the right.</div>
            </marquee>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable >
                Input Node
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
                EDIT
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </aside>
    );
};
