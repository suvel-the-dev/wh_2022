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

// const generateLight = () => {
//   const zStartingPoint = 20;
//   const zEndingPoint = -350;
//   const xStartingPoint = 150;
//   const xEndingPoint = -150;

//   let lightsArray = [];
//   const y = 50;
//   for (let z = zStartingPoint; z > zEndingPoint; z -= 80) {
//     for (let x = xStartingPoint; x > xEndingPoint; x -= 50) {
//       lightsArray.push(
//         <rectAreaLight
//           rotation={[-1 * (Math.PI / 2), 0, Math.PI / 2]}
//           position={[x, y, z]} color={'0xffffff'} intensity={50}
//           width={5} height={20}
//         />
//       )
//     }
//   }
//   return lightsArray;
// }

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

// const getRackLight = (xCord, yCord) => {
//   return (
//     <>
//       <rectAreaLight
//         rotation={[-1 * (Math.PI / 2), 0, Math.PI / 2]}
//         position={[xCord - 60, 80, yCord]} color={'0xffffff'} intensity={10}
//         width={10} height={25}
//       />

//       <rectAreaLight
//         rotation={[-1 * (Math.PI / 2), 0, Math.PI / 2]}
//         position={[xCord, 80, yCord]} color={'0xffffff'} intensity={10}
//         width={10} height={25}
//       />

//       <rectAreaLight
//         rotation={[-1 * (Math.PI / 2), 0, Math.PI / 2]}
//         position={[xCord + 60, 80, yCord]} color={'0xffffff'} intensity={10}
//         width={10} height={25}
//       />
//     </>
//   )
// }

// const renderList = () => {
//   return [
//     getRackLight(-50, 60),
//     getRackLight(-50, -80),
//     getRackLight(-50, -240),
//     getRackLight(-50, -240)
//   ]
// }

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