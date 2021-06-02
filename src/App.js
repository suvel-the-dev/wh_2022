import './App.css';
import { Suspense, useState, useEffect, useMemo } from 'react';
import { OrbitControls, Text } from "@react-three/drei";
import {
  Floor,
  ForwardCanvas,
  MessageModal,
} from './components';
import { MessageProvider } from './context/MessageContext';
import Rack from './components2/Rack';
import Spaces from './components2/Spaces';
import FloorLabel from './components2/FloorLabel'
import rackList from './data/rackList3'
import palletList from './data/palletList2'
import Roboto from './asset/fonts/Roboto_Regular.json';
import { scale } from './constant';

import {
  placeSpace,
  placePalletOnRack
} from './functions'

import * as THREE from 'three';

const textProps = {
  fontSize: 1.5,
  color: 'black',
  font: Roboto,
}

const getRackColor = (zCoordinate) => {
  if (zCoordinate <= -200) return "#05a1fd";
  if (zCoordinate > -200 && zCoordinate < -100) return "#fec766";
  if (zCoordinate >= -100) return "#c72719";
};

const renderRack = (colorize = false) => {
  debugger
  if (!rackList?.length > 0) return [];
  return rackList.map(rackObj => {
    const { type, name, ...rest } = rackObj;
    const { dim: { depth }, position: { x, y, z } } = rest;
    const color = colorize ? getRackColor(z) : '';
    const textZPos = depth * scale / 2;
    if (type == 'rack') return (
      <>
        <Rack rackObj={rest} color={color} />
        <FloorLabel pos={[x, y + 0.5, z - (textZPos + 7)]}>
          {name}
        </FloorLabel>
      </>
    )
    if (type == 'space') return (<>
      <Spaces spaceObj={rest} color={color} />
      <FloorLabel pos={[x, y + 0.5, z - (textZPos + 7)]}>
        {name}
      </FloorLabel>
    </>)
  })
}

// const renderPallet = (pallets) => {
//   return pallets.map(pallet => {
//     const { rack: rackName, qty } = pallet;
//     console.log(rackList)
//     const rackObj = rackList.find(rack => {
//       return rack.name == rackName;
//     });
//     return placePalletOnRack(rackObj, qty);
//   })
// }

function App() {

  const font = new THREE.FontLoader().parse(Roboto);

  const textOptions = {
    font,
    size: 1,
    height: 1
  };

  const [filter, setFilter] = useState({
    demand: false,
    labourCost: false
  });

  // const pallets = useMemo(() => {
  //   let pallets = [...palletList];
  //   if (filter.demand) pallets = pallets.filter(pallet => pallet.demand == 1);
  //   return renderPallet(pallets);
  // }, [filter])

  const racks = useMemo(() => {
    return renderRack(filter.labourCost);
  }, [filter])

  return (
    <>
      <div className="App">
        <Suspense fallback={null}>
          <div>
            <button
              className={`highlight-${filter.demand}`}
              onClick={() => setFilter({ ...filter, demand: !filter.demand })}
            >Show "on demand" Pallets </button>
            <button
              className={`highlight-${filter.labourCost}`}
              onClick={() => setFilter({ ...filter, labourCost: !filter.labourCost })}
            >Show "labour cost" Pallets </button>
          </div>
          <MessageProvider>
            <ForwardCanvas  >
              <color attach="background" args={["gray"]} />
              <OrbitControls />
              <ambientLight intensity={0.8} color={'#fffff'} />
              <Floor />
              {
                racks
              }
              {/* {pallets} */}
              <Plane pos={[0, 1, -300]} />

              <FloorLabel pos={[0, 1.05, -300]} fontSize={5}>
                Un-Loading Area
            </FloorLabel>
            </ForwardCanvas>
            <MessageModal />
          </MessageProvider>
        </Suspense>
      </div>
      <div className={`cost-color-container-${filter.labourCost}`}>
        <label>Low</label>
        <div className={'cost-color low-cost'}></div>
        <label>Medium</label>
        <div className={'cost-color med-cost'}></div>
        <label>High</label>
        <div className={'cost-color hig-cost'}></div>
      </div>
    </>
  );
}

export default App;

const Plane = ({
  pos,
  dim = { width: 5, height: 10 },
  color = '#fffd00', ...props
}) => {
  return (
    <mesh
      {...props}
      scale={1.5}
      position={pos}
      rotation={[(Math.PI / 2) * -1, 0, 0]}
    >
      <planeGeometry
        args={[250, 15]}
      />
      <meshStandardMaterial
        attach="material"
        color={color}
        reflectivity={1}
      />
    </mesh>
  )
}