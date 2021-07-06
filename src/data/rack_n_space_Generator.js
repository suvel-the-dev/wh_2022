//Constants
const scale = 1.5;
/* ---------------------------------- Space --------------------------------- */
const spaceWidth = 5;
const spaceDepth = 8;
const spaceHeight = 3.5;

const nextSpaceZOffset = (spaceDepth) * scale;
/*
1 Deep rack.
*/

//CP25117A01

const stat1DeepStr1 = `CP25`;
const stat1DeepStr2 = `A01`

const spaceAisleStartCoordinate = {
    1: { x: 129, y: 1, z: -36 },
    2: { x: 61, y: 1, z: -36 }
}

const getSpaceData = (start, end, deep = 1) => {
    let spaceData = [];
    let newPosition = spaceAisleStartCoordinate[deep];
    for (num = start; num <= end; num = num + 2) {
        spaceData.push({
            LOC: `${stat1DeepStr1}${num}${stat1DeepStr2}`,
            "dim": {
                "width": 5 * deep,
                "height": 3.5,
                "depth": 3
            },
            "position": newPosition,
            "shelfCount": 1,
            "type": "space"
        })
        newPosition = { ...newPosition, z: newPosition.z + nextSpaceZOffset };
    }
    return spaceData;
};

const get1deep = getSpaceData(117, 223, 1);
const get2deep = getSpaceData(118, 224, 2);

/* ---------------------------------- Rack ---------------------------------- */

const scale = 1.5;

//Rack(base)
const rackWidth = 5;
const rackDepth = 5;
const rackHeight = 0.2;
const rackPadding = 2;

//Rack Side(rod)
const rackSideWidth = 0.5;
const rackSideHeight = 6;
const rackSideDepth = 0.5;

const rackAisleCoordinate = { x: 265, y: 1, z: -76 };

const nextRackZOffset =
    (rackDepth + rackPadding) * scale;

const nxtRackYOffSet =
    (rackHeight + rackSideHeight) * scale;

const statRackStr1 = `RR24`;
let dynNum = 61;
const rackLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

let rackData = [];
let newPosition = rackAisleCoordinate;

for (num = dynNum; num <= 113; num = num + 2) {
    for (part = 1; part <= 2; part++) {
        rackLabels.forEach(rackLabel => {
            rackData.push({
                LOC: `${statRackStr1}${('00' + num).slice(-3)}${rackLabel}0${part}`,
                "dim": {
                    "width": 5 + 2,
                    "height": 0.2,
                    "depth": 5 + 2
                },
                "position": newPosition,
                "shelfCount": 1,
                "type": "rack"
            })

            newPosition = {
                ...newPosition,
                y: newPosition.y + nxtRackYOffSet,
            };
        })
        newPosition = {
            ...newPosition,
            y: rackAisleCoordinate.y,
            z: newPosition.z + nextRackZOffset
        };
    }
}