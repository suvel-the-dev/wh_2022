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

const space1Obj = {
  dim: {
    width: 20,
    height: 0,
    depth: 12
  },
  position: { x: 40, y: 1, z: -250 },
  shelfCount: 2
};

const space2Obj = {
  dim: {
    width: 20,
    height: 0,
    depth: 12
  },
  position: { x: 0, y: 1, z: -250 },
  shelfCount: 2
};

const space3Obj = {
  dim: {
    width: 20,
    height: 0,
    depth: 12
  },
  position: { x: -40, y: 1, z: -250 },
  shelfCount: 2
};

const rack1Object = {
  dim: {
    width: 16,
    height: 0.2,
    depth: 8
  },
  position: { x: 40, y: 1, z: -200 },
  shelfCount: 3
}

const rack2Object = {
  dim: {
    width: 16,
    height: 0.2,
    depth: 8
  },
  position: { x: 0, y: 1, z: -200 },
  shelfCount: 3
}
const rack3Object = {
  dim: {
    width: 16,
    height: 0.2,
    depth: 8
  },
  position: { x: -40, y: 1, z: -200 },
  shelfCount: 3
}
const rack4Object = {
  dim: {
    width: 16,
    height: 0.2,
    depth: 8
  },
  position: { x: 40, y: 1, z: -160 },
  shelfCount: 5
}
const rack5Object = {
  dim: {
    width: 16,
    height: 0.2,
    depth: 8
  },
  position: { x: 0, y: 1, z: -160 },
  shelfCount: 5
}
const rack6Object = {
  dim: {
    width: 16,
    height: 0.2,
    depth: 8
  },
  position: { x: -40, y: 1, z: -160 },
  shelfCount: 5
}
const rack7Object = {
  dim: {
    width: 16,
    height: 0.2,
    depth: 8
  },
  position: { x: 40, y: 1, z: -120 },
  shelfCount: 9
}
const rack8Object = {
  dim: {
    width: 32,
    height: 0.2,
    depth: 16
  },
  position: { x: -10, y: 1, z: -120 },
  shelfCount: 9
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
            <Spaces spaceObj={space1Obj} />
            {
              placePalletOnRack(space1Obj, 2)
            }
            <Spaces spaceObj={space2Obj} />
            {
              placePalletOnRack(space2Obj, 2)
            }
            <Spaces spaceObj={space3Obj} />
            {
              placePalletOnRack(space3Obj, 2)
            }
            <Rack rackObj={rack1Object} />
            {
              placePalletOnRack(rack1Object, 3)
            }
            <Rack rackObj={rack2Object} />
            {
              placePalletOnRack(rack2Object, 3)
            }
            <Rack rackObj={rack3Object} />
            {
              placePalletOnRack(rack3Object, 3)
            }
            <Rack rackObj={rack4Object} />
            {
              placePalletOnRack(rack4Object, 3)
            }
            <Rack rackObj={rack5Object} />
            {
              placePalletOnRack(rack5Object, 3)
            }
            <Rack rackObj={rack6Object} />
            {
              placePalletOnRack(rack6Object, 3)
            }
            <Rack rackObj={rack7Object} />
            {
              placePalletOnRack(rack7Object, 3)
            }
            <Rack rackObj={rack8Object} />
            {
              placePalletOnRack(rack8Object, 3)
            }
          </ForwardCanvas>
          <MessageModal />
        </MessageProvider>
      </Suspense>
    </div>
  );
}

export default App;