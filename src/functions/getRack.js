import {
    RackBase,
    RackSide,
} from '../components';

const getRack = (totalNum, xPosition, yPosition) => {

    let palletArray = [];
    let baseIncrement = 0;
    let sideIncrement = 1;

    const baseCor = { x: xPosition, y: yPosition };
    const sideCor = { x: 13, y: 4 }

    for (let num = 0; num < totalNum; num++) {
        let zSide = 2.5 * sideIncrement;
        palletArray.push(
            < >
                <RackBase pos={[baseCor.x, 0 + baseIncrement, baseCor.y]} />
                {/* left side */}
                <RackSide pos={[sideCor.x + xPosition, zSide, sideCor.y + yPosition]} />
                <RackSide pos={[-sideCor.x + xPosition, zSide, sideCor.y + yPosition]} />
                {/* right side */}
                <RackSide pos={[sideCor.x + xPosition, zSide, -sideCor.y + yPosition]} />
                <RackSide pos={[-sideCor.x + xPosition, zSide, -sideCor.y + yPosition]} />
            </ >
        )

        baseIncrement = baseIncrement + 5;
        sideIncrement = sideIncrement + 2;
    }

    return palletArray;
}

export default getRack;