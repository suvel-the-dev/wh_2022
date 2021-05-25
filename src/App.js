import './App.css';
import { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { default as sampleRackList } from './data/rackList'
import { default as samplePalletList } from './data/palletList'
import {
  Line,
  Floor,
  ForwardCanvas,
  MessageModal
} from './components';
import {
  getRack,
  renderPallet,
} from './functions';
import { MessageProvider } from './context/MessageContext';

const getLines = () => {
  return (
    <>
      {/* 3 shelf rack tapping  */}
      {/* vertical tapping */}
      <Line pos={[-43, 0, -120]} dim={{ width: 2, height: 150 }} />
      <Line pos={[-43 * 3, 0, -120]} dim={{ width: 2, height: 150 }} />
      {/* horizontal tapping */}
      <Line pos={[-85, 0, 0]} dim={{ width: 60, height: 2 }} />
      <Line pos={[-85, 0, -240]} dim={{ width: 60, height: 2 }} />
      {/* 9 shelf rack tapping  */}
      {/* vertical tapping */}
      <Line pos={[-18, 0, -120]} dim={{ width: 2, height: 200 }} />
      <Line pos={[122, 0, -120]} dim={{ width: 2, height: 200 }} />
      {/* horizontal tapping */}
      <Line pos={[53, 0, 40]} dim={{ width: 100, height: 2 }} />
      <Line pos={[53, 0, -280]} dim={{ width: 100, height: 2 }} />
      {/* {
            renderPallet(samplePalletList, sampleRackList)
          } */}
      {/* white line tapping  */}
      {/* vertical tapping */}
      <Line pos={[-30, 0, -240]} dim={{ width: 2, height: 50 }} color={'white'} />
      <Line pos={[-30, 0, -120]} dim={{ width: 2, height: 50 }} color={'white'} />
      <Line pos={[-30, 0, 0]} dim={{ width: 2, height: 50 }} color={'white'} />
    </>
  )
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
              sampleRackList.map((rackList, index) => {
                const { shelf_count: shelfCount, coordinate } = rackList;
                return getRack(shelfCount, coordinate.x, coordinate.y);
              })
            }
            {
              renderPallet(samplePalletList, sampleRackList)
            }
            {
              getLines()
            }
          </ForwardCanvas>
          <MessageModal />
        </MessageProvider>
      </Suspense>
    </div>
  );
}

export default App;