import placePalletOnGeometryObj from './placePalletOnGeometryObj'
import { rackSideObject } from '../constant'
import { memo } from 'react'
const placePalletOnRack = (
    rackObj,
    capacity,
    swap,
    preRackObj
) => {
    const rackBaseHeight = rackObj.dim.height;
    const rackSideHeight = rackSideObject.dim.height;
    const verticalOffset = rackBaseHeight + rackSideHeight;
    return placePalletOnGeometryObj(rackObj, capacity, verticalOffset, swap, preRackObj);

}

export default placePalletOnRack;