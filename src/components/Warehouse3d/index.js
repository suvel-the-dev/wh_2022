import { Suspense, useState, useMemo, useContext } from 'react';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ForwardCanvas from '../ForwardCanvas'
import MessageModal from '../MessageModal'
import { MessageProvider } from '../../context/MessageContext';
import rackList from '../../data/rackList'
import palletList from '../../data/palletList'
import optimizedPallet from '../../data/optimizedPallet'
import {
    // renderRack,
    renderPallet,
    getRackNPalletInterlinkedObject
} from '../../functions'
import Switch from "react-switch";
import OptimizeModal from '../OptimizeModal'
import Environment from '../Environment'
import WorkSpaceFilterModal from '../WorkSpaceFilterModal'
import ControlContext from '../../context/ControlContext'
import './style.css';

import { renderRack, renderSpace } from './temp_fun'
import Spaces from '../Spaces'
import Pallet from '../Pallet'
import Rack from '../Rack'

import _1deepSpaceList from '../../data/_1deepSpaceList'
import _1deepPalletList from '../../data/_1deepPalletList'
import rackAisleList from '../../data/rackAisleList'

const renderPallets = (palletArr) => {
    return palletArr.map(pallet => {
        const { LOC } = pallet;
        const position = _1deepSpaceList.find(rack => rack.LOC == LOC)?.position;
        // if (!position) {
        //     console.log({ pallet })
        // }
        return (<Pallet pos={[
            position?.x || 0,
            position?.y + (3.5 / 2 + 1) * 1.5 || 0,
            position?.z || 0
        ]} />)
    })

}

const getPallets = renderPallets(_1deepPalletList);

const newRackList = getRackNPalletInterlinkedObject(rackList, palletList);
const newPalletList = newRackList.map(rack => rack.palletList[0]);

const filterPallets = (pallets, currentFilters) => {
    let filteredPallets = [];
    const { demand, velocity, dayLastPick, expiry } = currentFilters;

    filteredPallets = pallets.filter(pallet => {
        let isValidPallet = true;

        if (demand == 'Yes' && pallet.demand != 1)
            isValidPallet = false;
        else if (demand == 'No' && pallet.demand != 0)
            isValidPallet = false;

        if (velocity != 'NONE' && velocity != pallet.velocity)
            isValidPallet = false;

        if (dayLastPick && dayLastPick <= pallet.dayLastPick)
            isValidPallet = false;

        if (expiry) {
            const [, year, month, date] =
                (/(\d{4})(\d{2})(\d{2})/).exec(pallet.expiry);

            const palletExpDate = new Date(year, month, date);
            const selectedExpDate = new Date(expiry);

            if (palletExpDate.getTime() < selectedExpDate.getTime())
                isValidPallet = false;
        }
        return isValidPallet;
    })
    return filteredPallets
}

const rackObject = {
    dim: {
        width: 5,
        height: 0.2,
        depth: 5
    },
    position: { x: 225, y: 1, z: -75 },
    shelfCount: 1
}

const Warehouse3d = ({ warehouse }) => {

    const { control, setControl } = useContext(ControlContext)

    const [checked, setChecked] = useState(false);
    const [swap, setSwap] = useState(false);
    const [showOpzToggle, setShowOpzToggle] = useState(false);

    const { showOpzModal } = control;

    const handelOpzAction = (action) => {
        if (action == 'optimize') setShowOpzToggle(true);
        setControl({ ...control, showOpzModal: false });
    }

    const handelFilterModal = () => {
        setControl(c => ({ ...c, showFilterModal: false }))
    }

    const handelApplyFilter = (obj) => {
        setControl({ ...control, showFilterModal: false, ...obj })
    }

    const pallets = useMemo(() => {
        let pallets = undefined;
        if (checked) pallets = [...optimizedPallet];
        else pallets = [...newPalletList];
        const filteredPalets = filterPallets(pallets, control);
        return renderPallet(filteredPalets, newRackList, swap);
    }, [control, checked, swap])

    const racks = useMemo(() => {
        return renderRack(newRackList, control?.costHeatMap);
    }, [control])

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <Suspense fallback={<div>Loading...</div>} >
                    <MessageProvider>
                        <ForwardCanvas  >
                            <PerspectiveCamera
                                args={[100, 2.59, 0.1, 2000]}
                                makeDefault
                                position={[0, 500, 40]} />
                            <Environment />
                            <OrbitControls
                                maxPolarAngle={Math.PI / 2}
                            />
                            {/* {
                                renderRack({ x: 372, y: 1, z: -76 })
                            }
                            {
                                renderSpace(1, { x: 203, y: 1, z: -36 })
                            }
                            {
                                renderSpace(2, { x: 17, y: 1, z: -36 })
                            } */}
                            {
                                _1deepSpaceList.map(spaceObj => {
                                    return (
                                        <Rack rackObj={spaceObj} />
                                        // <Spaces spaceObj={spaceObj} />
                                    )
                                })
                            }
                            {
                                [
                                    {
                                        "LOC": "RR24061A01",
                                        "dim": {
                                            "width": 7,
                                            "height": 0.2,
                                            "depth": 7
                                        },
                                        "position": {
                                            "x": 372,
                                            "y": 1,
                                            "z": -76
                                        },
                                        "shelfCount": 1,
                                        "type": "rack"
                                    }
                                ].map(rack => {
                                    return <Rack rackObj={rack} />
                                })
                            }
                            {/* {
                                getPallets
                            } */}

                            <ambientLight intensity={0.8} color={'#fffff'} />
                        </ForwardCanvas>
                        <MessageModal />
                        <OptimizeModal show={showOpzModal} handelAction={handelOpzAction} />
                        <WorkSpaceFilterModal
                            show={control?.showFilterModal}
                            closeModal={handelFilterModal}
                            handelFilterSubmit={handelApplyFilter}
                        />
                    </MessageProvider>
                </Suspense>
            </div>
        </>
    );
}

export default Warehouse3d;