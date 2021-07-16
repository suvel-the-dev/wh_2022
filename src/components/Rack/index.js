import RackBase from './RackBase';
import RackSides from './RackSides';
import React from 'react'
import { getNxtShelfPosition } from '../../functions';
import { rackSideObject } from '../../constant';

const rackSideDim = rackSideObject.dim;

const Rack = ({ rackObj, color }) => {

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



    for (let shelf = 1; shelf <= shelfCount; shelf++) {
        racks.push(
            <React.Fragment key={`container_${JSON.stringify(nxtPosition)}`}>
                <RackBase
                    key={`base_${JSON.stringify(nxtPosition)}`}
                    rackObj={rackObj}
                    pos={nxtPosition}
                />
                <RackSides
                    key={`side_${JSON.stringify(nxtPosition)}`}
                    rackObj={rackObj}
                    pos={nxtPosition}
                />
            </React.Fragment>
        )
        const verticalOffset = rackSideDim.height + dim.height;
        nxtPosition =
            getNxtShelfPosition(
                nxtPosition,
                verticalOffset
            );
    }
    return racks

}

export default Rack;
