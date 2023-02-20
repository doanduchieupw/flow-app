import ReactFlow, { Background, MiniMap, Controls } from 'reactflow';
import { useNode } from '../../store/node.store';
import 'reactflow/dist/style.css';
import Rectangle from '../Toolbar/Shape/Rectangle';
import { ViewportTracker } from '../utils';
import React from 'react';

const nodeTypes = { rectangle: Rectangle };
const Flow: React.FC = () => {
  const { edges, nodes, onConnect, onEdgesChange, onNodesChange } = useNode();
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <MiniMap />
      <Controls />
      <Background />
      <ViewportTracker />
    </ReactFlow>
  );
};

export default Flow;
