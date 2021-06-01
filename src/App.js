import './App.css';
import { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import {
  Floor,
  ForwardCanvas,
  MessageModal,
} from './components';
import { MessageProvider } from './context/MessageContext';
import Rack from './components2/Rack';
import Spaces from './components2/Spaces';
import { placePalletOnRack } from './functions/placePalletOnRack'
import rackList from './data/rackList2'

const renderRack = () => {
  return rackList.map(rackObj => {
    const { type, ...rest } = rackObj;
    if (type == 'rack') return <Rack rackObj={rest} />
    if (type == 'space') return <Spaces spaceObj={rest} />
  })
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <MessageProvider>
          <ForwardCanvas  >
            <color attach="background" args={["gray"]} />
            <OrbitControls />
            <ambientLight intensity={0.8} color={'#fffff'} />
            <Floor />
            {
              renderRack()
            }
          </ForwardCanvas>
          <MessageModal />
        </MessageProvider>
      </Suspense>
    </div>
  );
}

export default App;