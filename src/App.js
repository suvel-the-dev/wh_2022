import './App.css';
import { Suspense, useState, useEffect, useMemo } from 'react';
import { OrbitControls } from "@react-three/drei";
import {
  Floor,
  ForwardCanvas,
  MessageModal,
} from './components';
import { MessageProvider } from './context/MessageContext';
import Rack from './components2/Rack';
import Spaces from './components2/Spaces';
import rackList from './data/rackList2'
import palletList from './data/palletList2'

import {
  placeSpace,
  placePalletOnRack
} from './functions'

const renderRack = () => {
  return rackList.map(rackObj => {
    const { type, ...rest } = rackObj;
    if (type == 'rack') return <Rack rackObj={rest} />
    if (type == 'space') return <Spaces spaceObj={rest} />
  })
}

const renderPallet = (pallets) => {
  return pallets.map(pallet => {
    const { rack: rackName, qty } = pallet;
    console.log(rackList)
    debugger
    const rackObj = rackList.find(rack => {
      return rack.name == rackName;
    });
    debugger
    return placePalletOnRack(rackObj, qty);
  })
}

function App() {

  const [filter, setFilter] = useState({
    demand: false
  });

  const pallets = useMemo(() => {
    let pallets = [...palletList];
    if (filter.demand) pallets = pallets.filter(pallet => pallet.demand == 1);
    return renderPallet(pallets);
  }, [filter])

  return (
    <div className="App">
      <Suspense fallback={null}>
        <div>
          <button
            className={`highlight-${filter.demand}`}
            onClick={() => setFilter({ ...filter, demand: !filter.demand })}
          >Show "on demand" Pallets </button>
        </div>
        <MessageProvider>
          <ForwardCanvas  >
            <color attach="background" args={["gray"]} />
            <OrbitControls />
            <ambientLight intensity={0.8} color={'#fffff'} />
            <Floor />
            {
              renderRack()
            }
            {pallets}
          </ForwardCanvas>
          <MessageModal />
        </MessageProvider>
      </Suspense>
    </div>
  );
}

export default App;