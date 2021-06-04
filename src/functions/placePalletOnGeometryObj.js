import getPalletCountOnDepthAxis from './getPalletCountOnDepthAxis';
import getPalletCountOnWidthAxis from './getPalletCountOnWidthAxis';
import getRackCornerCoordinateToPlaceBox from './getRackCornerCoordinateToPlaceBox';
import getNxtShelfPosition from './getNxtShelfPosition';
import Pallet from '../components/Pallet';
import { scale } from '../constant'

export const placePalletOnGeometryObj = (
    geometryObj,
    capacity,
    verticalOffset
) => {

    const palletObj = {
        dim: { width: 5, height: 3.5, depth: 3 },
    };

    const { shelfCount } = geometryObj;

    const geometryDimension = geometryObj.dim;
    const palletDimension = palletObj.dim;

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

    if (possiblePalletCount < capacity)
        throw "dimension do not support the capacity, change the dimension or capacity to proceed."

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
                palletList.push(<Pallet pos={[xC, yC, zC]} />)
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

export default placePalletOnGeometryObj;