import React, { useCallback, useState } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'reactflow';

// import { nodes as initialNodes, edges as initialEdges } from './stores/initial-elements';
import CustomNode from './components/CustomNode';
import TextUpdaterNode from './components/nodes'

import 'reactflow/dist/style.css';
import './styles/overview.css';
import Sidebar from './components/drag/Sidebar';
import { data } from './stores/data';
import NodeMessage from './vkBot-node_message';

const nodeTypes = {
    custom: CustomNode,
    textUpdater: TextUpdaterNode,
    NodeMessage: NodeMessage,
};

const minimapStyle = {
    height: 120,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const VkBot = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null)
    const [sourceNodeData, setSourceNodeData] = useState(null)

    const onConnectStart = useCallback((_, { nodeId }) => {
        console.log(nodeId)
        setSourceNodeData(...nodes.filter(nds => (nds.id === nodeId)))
    }, [nodes])

    const onConnect = useCallback((params, sourceData) => {
        console.log(sourceData)
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === params.target) {
                    node.data = {
                        ...node.data,
                        label: JSON.stringify(sourceData.id),
                    }
                }
                return node
            })
        )
        setEdges((eds) => addEdge(params, eds))
        setSourceNodeData(null)
    }, [setEdges, setNodes]);

    const onDragOver = useCallback((event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move';
    }, [])

    const onDrop = useCallback((event) => {
        event.preventDefault()
        const reactFlowBounds = document.querySelector('.reactflow-wrapper').getBoundingClientRect();
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
            data,
        };

        setNodes((nds) => [...nds, newNode]);
    },
        [reactFlowInstance, setNodes,]
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
        <>
            <Sidebar />
            <div className="reactflow-wrapper" >
                <ReactFlow
                    nodes={nodes}
                    edges={edgesWithUpdatedTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={params => onConnect(params, sourceNodeData)}
                    onConnectStart={onConnectStart}
                    // onConnectEnd={(...arg) => console.log('Подключились к...')}
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
                    <Background className='bg-reactflow bg-cover bg-scroll overflow-auto bg-no-repeat opacity-30' gap={16} />
                </ReactFlow>
            </div>
        </>


    );
};

export default VkBot;