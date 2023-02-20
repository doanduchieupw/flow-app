import { Grid } from '@mantine/core';
import React, { Dispatch, SetStateAction } from 'react';
import { Node } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';

import {
  ArrowRightIcon,
  BubbleIcon,
  CircleIcon,
  ParallelogramIcon,
  RectangleIcon,
  RhombusIcon,
  RoundRectangleIcon,
  StarIcon,
  TriangleIcon,
} from './ShapeIcon';
import { usePreviewShape } from '../../../store/previewShape.store';
import { useShape } from '../../../store/shape.store';

interface IShapePanelList {
  icon: React.ReactElement;
  nodeData: Node;
}

interface IShapePanel {
  setOpened: Dispatch<SetStateAction<boolean>>;
}
const ShapePanel: React.FC<IShapePanel> = ({ setOpened }: IShapePanel) => {
  const shapePanelList: IShapePanelList[] = [
    {
      icon: <RectangleIcon />,
      nodeData: {
        id: uuidv4(),
        type: 'rectangle',
        position: {
          x: Math.random() * 608,
          y: Math.random() * 976,
        },
        data: { label: 'node rectangle' },
        style: { border: '1px solid #009e8b', padding: 10 },
      },
    },
    {
      icon: <RoundRectangleIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
    {
      icon: <CircleIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
    {
      icon: <TriangleIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
    {
      icon: <RhombusIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
    {
      icon: <BubbleIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
    {
      icon: <ParallelogramIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
    {
      icon: <StarIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
    {
      icon: <ArrowRightIcon />,
      nodeData: {
        id: uuidv4(),
        data: { label: 'Node 5' },
        position: { x: 450, y: 5 },
      },
    },
  ];
  const setPreview = usePreviewShape((state) => state.setPreview);
  const setType = useShape((state) => state.setType);

  return (
    <Grid justify='center' align='center' columns={12}>
      {shapePanelList.map((shapeItem: IShapePanelList, index: number) => (
        <Grid.Col
          key={index}
          span={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: 'beige',
              cursor: 'pointer',
            },
          }}
          onClick={() => {
            setPreview({ zIndex: -1, cursor: 'crosshair' });
            setT;
            setOpened(false);
          }}
          draggable='true'
        >
          {shapeItem.icon}
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ShapePanel;
