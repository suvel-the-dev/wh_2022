import {
    scale,
    rackSideObject,
    rackBaseObject
} from '../../constant';
import { getRackCornerCoordinateToPlaceBox } from '../../functions';
import RackSide from './RackSide';

const rackSideDim = rackSideObject.dim;
const rackBasePadding = rackBaseObject.padding;

const RackSides = ({
    rackObj,
    pos//position
}) => {

    const rackWithSideObj = {
        dim: {
            height: rackObj.dim.height + rackSideDim.height,
            width: rackObj.dim.width + rackBasePadding,
            depth: rackObj.dim.depth + rackBasePadding,
        },
        position: { x: pos[0], y: pos[1], z: pos[2] }
    };

    const coordinates =
        getRackCornerCoordinateToPlaceBox(
            rackWithSideObj,
            { dim: rackSideDim },
            scale
        );

    return ([
        <RackSide pos={coordinates[0].cor} />,
        <RackSide pos={coordinates[1].cor} />,
        <RackSide pos={coordinates[2].cor} />,
        <RackSide pos={coordinates[3].cor} />
    ])
};

export default RackSides;