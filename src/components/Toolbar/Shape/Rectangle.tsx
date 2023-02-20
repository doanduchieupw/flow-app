import React, { memo, useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const Rectangle = ({ data, styles }: any) => {
  return (
    <div className='rectangle' style={styles}>
      <Handle type='target' position={Position.Top} />
      <div>
        <label htmlFor='text'>Text:</label>
        {/* <input id="text" name="text" onChange={onChange} /> */}
        <p>{data.label}</p>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type='source' position={Position.Bottom} id='b' />
    </div>
  );
};

export default memo(Rectangle);
