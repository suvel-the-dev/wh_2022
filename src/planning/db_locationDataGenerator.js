let scale = 1.5;
/* -------------------------- 1 Deep Space Details -------------------------- */
const _1DeepSpaceWidth = 5;
const _1DeepSpaceDepth = 3;
const _1DeepSpaceHeight = 3.5;

const next_1DeepSpaceZOffset = (_1DeepSpaceDepth) * scale + 7.5;
let _1DeepSpaceAttributes = {
    dim: {
        width: _1DeepSpaceWidth,
        height: _1DeepSpaceHeight,
        depth: _1DeepSpaceDepth
    },
    nxtOffSet: {
        z: next_1DeepSpaceZOffset,
        y: 0
    },
    shelfLevels: ['A'],
    getShelfPosition: (rowNum) => {
        if (rowNum <= 0) return 'NAN';
        return '01'
    },
    getNxtLocNumber: (rowNum, number) => {
        return number + 2;
    },
    shelfCount: 1,
    locCode: 'CP',
    type: "SPACE1",
};
/* -------------------------- 2 Deep Space Details -------------------------- */
const _2DeepSpaceWidth = 10;
const _2DeepSpaceDepth = 3;
const _2DeepSpaceHeight = 3.5;

const next_2DeepSpaceZOffset = (_2DeepSpaceDepth) * scale + 7.5;
let _2DeepSpaceAttributes = {
    dim: {
        width: _2DeepSpaceWidth,
        height: _2DeepSpaceHeight,
        depth: _2DeepSpaceDepth
    },
    nxtOffSet: {
        z: next_2DeepSpaceZOffset,
        y: 0
    },
    shelfLevels: ['A'],
    getShelfPosition: (rowNum) => {
        if (rowNum <= 0) return 'NAN';
        return '01'
    },
    getNxtLocNumber: (rowNum, number) => {
        return number + 2;
    },
    shelfCount: 1,
    locCode: 'CP',
    type: "SPACE2",
};
/* ------------------------------ Rack Details ------------------------------ */
let rackWidth = 7;
let rackDepth = 7;
let rackHeight = 0.2;
let rackPadding = 2;

//Rack Side(rod)
let rackSideWidth = 0.5;
let rackSideHeight = 6;
let rackSideDepth = 0.5;

let paddingBTWLocation = - 3;

let nextRackZOffset =
    (rackDepth + rackPadding) * scale + paddingBTWLocation;

let nxtRackYOffSet =
    (rackHeight + rackSideHeight) * scale;

let rackAttributes = {
    dim: {
        width: rackWidth,
        height: rackHeight,
        depth: rackDepth
    },
    nxtOffSet: {
        z: nextRackZOffset,
        y: nxtRackYOffSet
    },
    shelfLevels: ['A', 'B', 'C', 'D', 'E', 'F'],
    getShelfPosition: (rowNum) => {
        if (rowNum <= 0) return 'NAN';
        if (rowNum % 2 === 0) return '02'
        return '01'
    },
    getNxtLocNumber: (rowNum, number) => {
        if (rowNum % 2 === 0) return number + 2;
        return number;
    },
    shelfCount: 1,
    locCode: 'RR',
    type: "RACK",
};
/* ----------------------------- Helper Function ---------------------------- */
let getLocAttributes = (locType) => {
    if (locType === 'SPACE_1DEEP') return _1DeepSpaceAttributes;
    if (locType === 'SPACE_2DEEP') return _2DeepSpaceAttributes;
    if (locType === 'RACK') return rackAttributes;
}

let getLOCString = (
    locCode, locCount, shelfLevel, shelfPosition
) => {
    return `${locCode}${locCount}${shelfLevel}${shelfPosition}`
}
/* -------------------------- Locations Plan (Input) ------------------------- */
let locationsPlan =
    [
        {
            type: 'RACK',
            staring_no: 24061,
            row_count: 10,
            shelf_count: 6,
            coordinate: { x: 265, y: 1, z: -76 }
        },
        {
            type: 'SPACE_1DEEP',
            staring_no: 25117,
            row_count: 10,
            shelf_count: 1,
            coordinate: { x: 129, y: 1, z: -36 }
        },
        {
            type: 'SPACE_2DEEP',
            staring_no: 25118,
            row_count: 10,
            shelf_count: 1,
            coordinate: { x: 61, y: 1, z: -36 }
        },
    ]

/* ---------------------- Function to generate location --------------------- */
let generateLocation = (locationsPlan) => {
    const locationList = [];

    locationsPlan.forEach((locPlan => {
        // get the respective location object
        const locAttributes = getLocAttributes(locPlan.type);
        const position = locPlan.coordinate;
        const {
            dim, shelfCount, type,
            shelfLevels, getShelfPosition,
            getNxtLocNumber, locCode, nxtOffSet,
        } = locAttributes;
        let newLOC = "";
        let newLocationNumber = locPlan.staring_no;

        for (let row = 1; row <= locPlan.row_count; row++) {
            for (let shelf = 1; shelf <= locPlan.shelf_count; shelf++) {
                const shelfLevel = shelfLevels[shelf - 1];
                const shelfPosition = getShelfPosition(row);
                newLOC = getLOCString(
                    locCode,
                    newLocationNumber,
                    shelfLevel,
                    shelfPosition);
                let newPosition = {
                    x: position.x,
                    y: position.y + nxtOffSet.y * (shelf - 1),
                    z: position.z + nxtOffSet.z * (row - 1)
                };
                locationList.push(
                    {
                        LOC: newLOC,
                        dim,
                        position: newPosition,
                        shelfCount,
                        type
                    }
                )
            }
            newLocationNumber =
                getNxtLocNumber(row, newLocationNumber);
        }
    }));
    return locationList;
}

/* ------------------------------ Function Call ------------------------------ */
const locationList = generateLocation(locationPlan);

