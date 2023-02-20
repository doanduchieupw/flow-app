import React, { useState } from 'react';
import { Popover, Button } from '@mantine/core';
import ShapePanel from './ShapePanel';

const Shape: React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={200}
      position='right'
      withArrow={false}
      shadow='md'
      closeOnClickOutside
    >
      <Popover.Target>
        <Button
          onClick={() => setOpened((prev) => !prev)}
          style={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' height='24' width='24'>
            <path
              fill='#000'
              d='M15.5 14C18.5376 14 21 11.5376 21 8.5C21 5.46243 18.5376 3 15.5 3C12.4624 3 10 5.46243 10 8.5C10 8.66854 10.0076 8.83532 10.0224 9H14C14.5523 9 15 9.44771 15 10V13.9776C15.1647 13.9924 15.3315 14 15.5 14ZM15 15.9836V21C15 21.5523 14.5523 22 14 22H3C2.44772 22 2 21.5523 2 21V10C2 9.44771 2.44772 9 3 9H8.0164C8.00552 8.83474 8 8.66801 8 8.5C8 4.35786 11.3579 1 15.5 1C19.6421 1 23 4.35786 23 8.5C23 12.6421 19.6421 16 15.5 16C15.332 16 15.1653 15.9945 15 15.9836ZM4 20V11H13V20H4Z'
              clipRule='evenodd'
              fillRule='evenodd'
            ></path>
          </svg>
        </Button>
      </Popover.Target>
      <Popover.Dropdown
        sx={{
          maxWidth: '152px',
          padding: '16px',
          borderRadius: '4px',
          backgroundColor: '#ffffff',
          boxShadow: '0px 8px 32px rgb(5 0 56 / 8%)',
          color: '#050038',
        }}
      >
        <ShapePanel setOpened={setOpened} />
      </Popover.Dropdown>
    </Popover>
  );
};

export default Shape;
