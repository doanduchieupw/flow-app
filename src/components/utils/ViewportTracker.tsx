import { memo, useEffect } from 'react';
import { useViewport } from 'reactflow';
import { useViewportFlow } from '../../store/viewport.store';

const ViewportTracker = () => {
  const { x, y, zoom } = useViewport();
  const setViewport = useViewportFlow((state) => state.setViewport);
  useEffect(() => setViewport({ x, y, zoom }), [x, y, zoom]);
  return null;
};

export default memo(ViewportTracker);
