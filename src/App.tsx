import { MantineProvider } from '@mantine/core';
import { ReactFlowProvider } from 'reactflow';
import { Draw, Flow, Toolbar } from './components';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Toolbar />
      <ReactFlowProvider>
        <Draw>
          <Flow />
        </Draw>
      </ReactFlowProvider>
    </MantineProvider>
  );
}

export default App;
