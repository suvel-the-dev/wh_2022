import getPalletCountOnDepthAxis from './getPalletCountOnDepthAxis';
import getPalletCountOnWidthAxis from './getPalletCountOnWidthAxis';
import getRackCornerCoordinateToPlaceBox from './getRackCornerCoordinateToPlaceBox';
import getNxtShelfPosition from './getNxtShelfPosition';
import Pallet from '../components/Pallet';
import { scale } from '../constant'

const palletObj = {
    dim: { width: 5, height: 3.5, depth: 3 },
};

const palletDimension = palletObj.dim;


const getPalletArrangementObj = (geometryObj) => {

    const { shelfCount } = geometryObj;

    const geometryDimension = geometryObj.dim;

    const totalCol =
        getPalletCountOnWidthAxis(
            geometryDimension.width,
            palletDimension.width
        );

    const totalRow =
        getPalletCountOnDepthAxis(
            geometryDimension.depth,
            palletDimension.depth
        );

    const possiblePalletCount = totalCol * totalRow * shelfCount;

    return { totalCol, totalRow, possiblePalletCount }
}

const PalletsCoordinate = (
    geometryObj,
    totalRow,
    totalCol,
    capacity,
    verticalOffset
) => {

    const { shelfCount } = geometryObj;

    const rackCornerCoordinateToPlacePallet =
        getRackCornerCoordinateToPlaceBox(
            geometryObj,
            palletObj,
            scale
        );

    const firstCoordinateToPlacePallet =
        rackCornerCoordinateToPlacePallet[0];

    let palletList = []

    let xC =
        firstCoordinateToPlacePallet.cor[0];

    /*
                                               +---------------+         
                                               |               |         
                                               |       |   P   |         
           +---------------+ |                 |       |Pnc    |         
   +-------------------------|------+  +---------------|----------------+
   |       | (x,y,z) -  P  |Ph   R  |  |        (x,y,z)|             R  |
   +-------------------------|------+  +--------------------------------+
           +---------------+ |                   Pnc = Ry+Ph/2           
                                                                   
   */

    let yC =
        firstCoordinateToPlacePallet.cor[1] +
        geometryObj.position.y +
        palletDimension.height / 2;
    let zC =
        firstCoordinateToPlacePallet.cor[2];
    let palletCount = 0;
    for (let shelfNum = 1; shelfNum <= shelfCount; shelfNum++) {
        for (let row = 1; row <= totalRow; row++) {
            for (let col = 1; col <= totalCol; col++) {
                if (palletCount >= capacity) return palletList;
                palletList.push([xC, yC, zC])
                xC = xC + palletDimension.width * scale;
                palletCount++;
            }
            zC = zC + palletDimension.depth * scale;
            xC = firstCoordinateToPlacePallet.cor[0];
        }
        yC = getNxtShelfPosition([xC, yC, zC], verticalOffset)[1];
        xC = firstCoordinateToPlacePallet.cor[0];
        zC = firstCoordinateToPlacePallet.cor[2];
    }

    return palletList;
}

export const placePalletOnGeometryObj = (
    geometryObj,
    capacity,
    verticalOffset,
    swap,
    preRackObj
) => {

    const { totalCol, totalRow, possiblePalletCount } = getPalletArrangementObj(geometryObj)

    if (possiblePalletCount < capacity)
        throw "dimension do not support the capacity, change the dimension or capacity to proceed."

    const palletPositions = PalletsCoordinate(geometryObj, totalRow, totalCol, capacity, verticalOffset);

    let palletPrePositions = [];

    if (preRackObj) {
        const { totalCol: preTotalCol, totalRow: preTotalRow, possiblePalletCount: prePossiblePalletCount } =
            getPalletArrangementObj(preRackObj);
        palletPrePositions = PalletsCoordinate(preRackObj, preTotalRow, preTotalCol, capacity, verticalOffset);
    }

    let pallets = [];


    palletPositions.forEach((pos, index) => {
        const currentPosition = pos;
        const previousPosition = palletPrePositions[index] || [0, 0, 0];
        pallets.push(<Pallet skuType={geometryObj.palletList[0].skuType} pos={currentPosition} prePos={previousPosition} swap={swap} />)
    })

    return pallets;

}

export default placePalletOnGeometryObj;