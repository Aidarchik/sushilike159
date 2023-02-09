import React from 'react';

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <div className="description" title='HI'>You can drag these nodes to the pane on the right.</div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable >
                Input Node
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
                EDIT
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'NodeMessage')} draggable>
                Message
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </aside>
    );
};

export default Sidebar
