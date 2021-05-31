import { scale } from '../constant'
const getNxtShelfPosition = (position, verticalOffset) => {
    return ([
        //x(width)
        position[0],
        //y(height)
        position[1] + (verticalOffset) * scale,
        //z(depth)
        position[2]
    ])
}

export default getNxtShelfPosition;