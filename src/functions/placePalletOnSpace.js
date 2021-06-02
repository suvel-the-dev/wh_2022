import placePalletOnGeometryObj from './placePalletOnGeometryObj'
import { palletObject } from '../constant'

const placePalletOnSpace = (
    spaceObj,
    capacity
) => {
    const verticalOffset = palletObject.dim.height;
    return placePalletOnGeometryObj(spaceObj, capacity, verticalOffset);
}

export default placePalletOnSpace
