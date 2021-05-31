import getPalletCountOnDepthAxis from './getPalletCountOnDepthAxis';
import getPalletCountOnWidthAxis from './getPalletCountOnWidthAxis';
import getRackCornerCoordinateToPlaceBox from './getRackCornerCoordinateToPlaceBox';
import getNxtShelfPosition from './getNxtShelfPosition';
import Space from '../components2/Spaces/Space';
import { scale } from '../constant'


const placeSpace = (spaceObj) => {
    const palletObj = {
        dim: { width: 5, height: 3.5, depth: 3 },
    };

    const { shelfCount } = spaceObj;

    const spaceDimension = spaceObj.dim;
    const palletDimension = palletObj.dim;

    const totalCol =
        getPalletCountOnWidthAxis(
            spaceDimension.width,
            palletDimension.width
        );

    const totalRow =
        getPalletCountOnDepthAxis(
            spaceDimension.depth,
            palletDimension.depth
        );

    const spaceCornerCoordinateToPlacePallet =
        //need to change name 
        getRackCornerCoordinateToPlaceBox(
            spaceObj,
            palletObj,
            scale
        );

    const firstCoordinateToPlacePallet =
        spaceCornerCoordinateToPlacePallet[0];

    let palletList = []

    let xC =
        firstCoordinateToPlacePallet.cor[0];
    let yC =
        firstCoordinateToPlacePallet.cor[1] +
        spaceObj.position.y +
        palletDimension.height / 2;
    let zC =
        firstCoordinateToPlacePallet.cor[2];

    for (let shelfNum = 1; shelfNum <= shelfCount; shelfNum++) {
        for (let row = 1; row <= totalRow; row++) {
            for (let col = 1; col <= totalCol; col++) {
                palletList.push(<Space pos={[xC, yC, zC]} />)
                xC = xC + palletDimension.width * scale;
            }
            zC = zC + palletDimension.depth * scale;
            xC = firstCoordinateToPlacePallet.cor[0];
        }
        yC = getNxtShelfPosition([xC, yC, zC], palletDimension.height, 0)[1];
        xC = firstCoordinateToPlacePallet.cor[0];
        zC = firstCoordinateToPlacePallet.cor[2];
    }

    return palletList;
}

export default placeSpace;