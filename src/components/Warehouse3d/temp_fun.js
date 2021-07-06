import Rack from '../Rack'
import Spaces from '../Spaces'
import { scale, rackSideObject } from '../../constant'

const rackDepth = 5;
const rackHeight = 0.2;
const rackPadding = 2;

const rackObject = {
    dim: {
        width: rackDepth,
        height: 0.2,
        depth: rackDepth
    },
    position: { x: 0, y: 1, z: 0 },
    shelfCount: 1
}

const nextRackZOffset = (rackDepth + rackPadding) * scale;
const nxtRackYOffSet = (rackHeight + rackSideObject.dim.height) * scale;

export const renderRack = (position) => {
    let racks = [];
    for (let j = 1; j <= 6; j++) {
        for (let i = 1; i <= 54; i++) {
            let nxtPos = {
                x: position.x,
                y: position.y + nxtRackYOffSet * (j - 1),
                z: position.z + nextRackZOffset * (i - 1)
            };
            // console.log({ nxtPos })
            const newRackObj = { ...rackObject, position: nxtPos }
            racks.push(<Rack rackObj={newRackObj} />)
        }
    }

    return racks;
}



const spaceDepth = 3

const nextSpaceZOffset = (spaceDepth) * scale;

const spaceObject = {
    dim: {
        width: 5,
        height: 0,
        depth: 4
    },
    position: { x: 104, y: 1, z: -36 },
    shelfCount: 1
}

const getSpaceObj = (deep) => {
    return ({ ...spaceObject, dim: { ...spaceObject.dim, width: 5 * deep } })
}

export const renderSpace = (deep = 1, position) => {
    let spaces = [];
    for (let i = 1; i <= 59; i++) {
        let nxtPos = {
            x: position.x,
            y: position.y,
            z: position.z + nextSpaceZOffset * (i - 1)
        };
        const newSpaceObj = { ...getSpaceObj(deep), position: nxtPos }
        spaces.push(<Spaces spaceObj={newSpaceObj} />)
    }

    return spaces;
}