import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
import CustomNode from './CustomNode';
import TextUpdaterNode from './nodes'

import 'reactflow/dist/style.css';
import './overview.css';

const nodeTypes = {
    custom: CustomNode,
    textUpdater: TextUpdaterNode,
};

const minimapStyle = {
    height: 120,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const Content = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null)

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]);

    const onDragOver = useCallback((event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move';
    }, [])

    const onDrop = useCallback((event) => {
        event.preventDefault()
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${type} node` },
        };

        setNodes((nds) => nds.concat(newNode));
    },
        [reactFlowInstance, setNodes]
    );

    // we are using a bit of a shortcut here to adjust the edge type
    // this could also be done with a custom edge for example
    const edgesWithUpdatedTypes = edges.map((edge) => {
        if (edge.sourceHandle) {
            const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
            edge.type = edgeType;
        }

        return edge;
    });

    return (
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edgesWithUpdatedTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                fitView
                // attributionPosition="top-right"
                nodeTypes={nodeTypes}
                proOptions={{ hideAttribution: true }}
                onDrop={onDrop}
                onDragOver={onDragOver}
            >
                <MiniMap style={minimapStyle} zoomable pannable />
                <Controls />
                <Background color="#aaa" gap={16} />
            </ReactFlow>
        </div>

    );
};

export default Content;