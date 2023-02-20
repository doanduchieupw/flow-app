import { Stack } from '@mantine/core';
import React from 'react';
import Shape from './Shape';

const ToolBar: React.FC = () => {
  return (
    <Stack
      align='center'
      spacing='sm'
      sx={{
        width: '48px',
        padding: '12px 0',
        marginLeft: '8px',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 10px rgb(5 0 56 / 8%)',
      }}
    >
      <Shape />
      <Shape />
      <Shape />
    </Stack>
  );
};

export default ToolBar;
