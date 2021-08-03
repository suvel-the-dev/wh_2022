//Constants
const scale = 1.5;
/* ---------------------------------- Rack ---------------------------------- */

//Rack(base)
const rackWidth = 5;
const rackDepth = 5;
const rackHeight = 0.2;
const rackPadding = 2;

//Rack Side(rod)
const rackSideWidth = 0.5;
const rackSideHeight = 6;
const rackSideDepth = 0.5;

const nextRackZOffset =
    (rackDepth + rackPadding) * scale;

const nxtRackYOffSet =
    (rackHeight + rackSideHeight) * scale;

/* ---------------------------------- Space ---------------------------------- */

const spaceWidth = 5;
const spaceDepth = 3;
const spaceHeight = 3.5;

const nextSpaceZOffset = (spaceDepth) * scale;

/* --------------------------- Initial co-ordinate --------------------------- */

const rackAisleCoordinate = { x: 372, y: 1, z: -76 };
const _1DeepSpaceAisleCoordinate = { x: 203, y: 1, z: -36 };
const _2DeepSpaceAisleCoordinate = { x: 17, y: 1, z: -36 };

/* -------------------- sample function to generate Racks ------------------- */

//Declaration 
const rackObject = {
    dim: {
        width: rackWidth,
        height: rackHeight,
        depth: rackDepth
    },
    position: { x: 0, y: 1, z: 0 },
    shelfCount: 1
}
const totalShelfCount = 6;
const totalNumberOfRack = 54;

//main function
const renderRack = (position) => {
    /**
     * @argument position
     * position is the initial co-ordinate from where the Rack will
     * be generated.
     */
    let racks = [];
    //iterating shelf (yAxis)
    for (let j = 1; j <= totalShelfCount; j++) {
        //iterating Rack (zAxis)
        for (let i = 1; i <= totalNumberOfRack; i++) {
            let nxtPos = {
                x: position.x,
                y: position.y + nxtRackYOffSet * (j - 1),
                z: position.z + nextRackZOffset * (i - 1)
            };
            const newRackObj = { ...rackObject, position: nxtPos }
            racks.push(<Rack rackObj={newRackObj} />)
        }
    }

    return racks;
}
//function call
renderRack({ x: 372, y: 1, z: -76 })

/* --------------------------------- end --------------------------------- */

/* -------------------- sample function to generate Space ------------------- */

//Declaration 
const spaceObject = {
    dim: {
        width: spaceWidth,
        height: spaceHeight,
        depth: spaceDepth
    },
    position: { x: 104, y: 1, z: -36 },
    shelfCount: 1
}
const totalNumberOfSpace = 59;

const getSpaceObj = (deep) => {
    /**
     * @argument deep
     * deep can 1 or 2.
     */
    return ({
        ...spaceObject,
        dim: { ...spaceObject.dim, width: spaceWidth * deep }
    })
}

//main function
renderSpace = (deep = 1, position) => {
    /**
     * @argument position
     * position is the initial co-ordinate from where the Space will
     * be generated.
     */
    let spaces = [];
    //iterating Rack (zAxis)
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
//function call
 renderSpace(2, { x: 17, y: 1, z: -36 })
 
/* --------------------------------- end --------------------------------- */
