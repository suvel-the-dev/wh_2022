import RackBase from './RackBase';
import RackSides from './RackSides';
import { getNxtShelfPosition } from '../../functions';
import { rackSideObject } from '../../constant';

const rackSideDim = rackSideObject.dim;

const Rack = ({ rackObj }) => {

    const {
        dim,//dimension
        shelfCount,
        position
    } = rackObj;

    let racks = [];

    let nxtPosition = [
        position.x,
        position.y,
        position.z
    ];

    for (let rack = 1; rack <= shelfCount; rack++) {
        racks.push(
            < >
                <RackBase
                    rackObj={rackObj}
                    pos={nxtPosition}
                />
                <RackSides
                    rackObj={rackObj}
                    pos={nxtPosition}
                />
            </>
        )
        const verticalOffset = rackSideDim.height + dim.height;
        nxtPosition =
            getNxtShelfPosition(
                nxtPosition,
                verticalOffset
            );
    }

    return racks;
}

export default Rack;