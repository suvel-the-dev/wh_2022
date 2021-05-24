import {
    Pallet,
} from '../components';

const getPallet = (shelfCoordinate, placement, color) => {

    const { x, z, y } = shelfCoordinate;

    const placementCoOrdinateObject = {
        "left": -8,
        "center": 0,
        "right": 8
    }

    const xCord = placementCoOrdinateObject[placement] + x;
    const yCord = y;
    const zCord = z;
    return <Pallet pos={[xCord, zCord, yCord]} color={color} />
}

export default getPallet;