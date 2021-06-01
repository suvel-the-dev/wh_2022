import placePalletOnGeometryObj from './placePalletOnGeometryObj'
import { rackSideObject } from '../constant'

const placePalletOnRack = (
    rackObj,
    capacity
) => {
    const rackBaseHeight = rackObj.dim.height;
    const rackSideHeight = rackSideObject.dim.height;
    const verticalOffset = rackBaseHeight + rackSideHeight;
    return placePalletOnGeometryObj(rackObj, capacity, verticalOffset);

}

export default placePalletOnRack;