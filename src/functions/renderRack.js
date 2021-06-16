import getRackColorForLabourCost from './getRackColorForLabourCost'
import {
    RackLabelled,
    SpacesLabelled
} from '../components'
import { scale } from '../constant'

const renderRack = (rackList, colorize = false) => {
    if (!rackList?.length > 0) return [];
    return rackList.map(rackObj => {
        const { type, name, ...rest } = rackObj;
        const { dim: { depth }, position: { x, y, z } } = rest;
        const color = colorize ? getRackColorForLabourCost(z) : '';

        console.log({ color })

        const textZPos = depth * scale / 2;
        const pos = [x, y + 0.5, z - (textZPos + 7)];
        if (type == 'rack') return (
            <RackLabelled
                rackObj={rest}
                color={color}
                pos={pos}
                label={name}
            />
        )
        if (type == 'space') return (
            <SpacesLabelled
                spaceObj={rest}
                color={color}
                pos={pos}
                label={name}
            />
        )
    })
}

export default renderRack;