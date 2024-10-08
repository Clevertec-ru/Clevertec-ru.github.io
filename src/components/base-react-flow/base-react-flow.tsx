import '@xyflow/react/dist/style.css';
import { DragEventHandler, FC, PropsWithChildren, useCallback, useState } from 'react';
import {
  addEdge,
  applyNodeChanges, Edge,
  Node,
  NodeMouseHandler,
  OnConnect,
  OnNodesChange,
  Panel,
  ReactFlow,
  useEdgesState,
  useReactFlow,
} from '@xyflow/react';

import { initialEdges } from '../../constants/initial-edges';
import { fitViewOptions } from '../../constants/fit-view-options';
import { nodeTypes } from '../../constants/node-types';
import { PositionableEdge } from '../positionable-edge/positionable-edge';
import { defaultMarkerStyles } from '../../constants/default-marker-styles';
import { CustomEdgeVariants, EdgeType } from '../../types/edge-variants';
import { CustomPanel } from '../custom-panel';
import { useDragAndDropContext } from '../../context/use-drag-and-drop-context';
import { DRAG_EFFECT_NAME } from '../../constants/drag-effect-name';
import { Sidebar } from '../sidebar';
import { CustomNodesVariants } from '../../types/custom-nodes-variants';
import { NodeUiVariants } from '../../types/node-ui-variants';
import { initialHeight } from '../../constants/node-options';

export const BaseReactFlow: FC<PropsWithChildren> = ({ children }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { screenToFlowPosition } = useReactFlow();
  const { type, data } = useDragAndDropContext();

  const proOptions = { hideAttribution: true };

  const edgeTypes = {
    positionableedge: PositionableEdge,
  };

  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = DRAG_EFFECT_NAME;
  }, []);

  const onDrop: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${Date.now()}`,
        type: type ?? CustomNodesVariants.TextUpdated,
        position,
        data: data ?? { isHovered: false, wrapperStyle: NodeUiVariants.Rectangle },
        height: initialHeight,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type, data],
  );

  const onConnect: OnConnect = useCallback((params) => {
    const newEdge = {
      ...params,
      type: CustomEdgeVariants.Positionable,
      data: {
        type: EdgeType.SmoothStep,
        positionHandlers: [],
      },
      ...defaultMarkerStyles,
    };
    setEdges((eds) => addEdge(newEdge, eds));
  }, []);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes((nds) => {
        return applyNodeChanges(changes, nds);
      }),
    [setNodes],
  );

  const onNodeMouseLeave: NodeMouseHandler = useCallback((_, currNode) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (currNode.id !== node.id) return node;
        const prevData = node.data;
        return { ...node, data: prevData ? { ...prevData, isHovered: false } : { isHovered: false } };
      }),
    );
  }, []);

  const onNodeMouseEnter: NodeMouseHandler = useCallback((_, currNode) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (currNode.id !== node.id) return node;
        const prevData = node.data;
        return { ...node, data: prevData ? { ...prevData, isHovered: true } : { isHovered: false } };
      }),
    );
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <CustomPanel position="bottom-right" />
      <Panel position="top-right">
        <Sidebar />
      </Panel>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        // defaultEdgeOptions={defaultEdgeOptions}
        fitView
        fitViewOptions={fitViewOptions}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        proOptions={proOptions}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {children}
      </ReactFlow>
    </div>
  );
};
