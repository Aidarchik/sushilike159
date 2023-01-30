import React, { useCallback, useState } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    applyNodeChanges,
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

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const Content = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) =>
            applyNodeChanges(changes, nds)),
        [setNodes]
    )

    const onEdgesChange = useCallback(
        (changes) => setEdges((egs) =>
            applyNodeChanges(changes, egs)),
        [setEdges]
    )

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]);


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
        <ReactFlow
            nodes={nodes}
            edges={edgesWithUpdatedTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
        >
            <MiniMap style={minimapStyle} zoomable pannable />
            <Controls />
            <Background color="#aaa" gap={16} />
        </ReactFlow>
    );
};

export default Content;