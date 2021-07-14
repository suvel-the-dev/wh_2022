import React from 'react'
import Wall from './Wall'
import DoorWall from './DoorWall'
import Floor from './Floor'
import DockDoor from './DockDoor'

const floorDimension = {
    w: 1200,
    d: 951
}

const UnLoadWallDim = {
    w: 100,
    h: 75,
    d: 2
}

const backSideZ = floorDimension.d / 2 * 1.5;
const leftWallX = floorDimension.w / 2 * 1.5;
const unLoadingFirstWallX = leftWallX - UnLoadWallDim.w / 2 * 1.5

const unLoadingWallGap = 90 * 1.5;

const nxtUnloadingWallX = (count = 1) => {
    return (
        unLoadingFirstWallX
        - (UnLoadWallDim.w * 1.5 + (unLoadingWallGap * (2 * count)))
    );
}

const Environment = () => {
    return (
        <>
            <Floor dim={floorDimension} />
            {/* Backside od un-loading */}
            <Wall
                dim={{ width: floorDimension.w, height: 85, depth: 2 }}
                pos={[0, 0, backSideZ]}
            />
            {/* Left Wall */}
            <Wall
                dim={{ width: 2, height: 85, depth: floorDimension.d }}
                pos={[leftWallX, 0, 0]}
            />
            {/* Right Wall */}
            <Wall
                dim={{ width: 2, height: 85, depth: floorDimension.d }}
                pos={[-leftWallX, 0, 0]}
            />
            {/* Un-Loading Area */}
            {/*1st unloading wall*/}
            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[unLoadingFirstWallX, 0, -backSideZ]} />
            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[675, 0, -backSideZ]} />
            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[nxtUnloadingWallX(1), 0, -backSideZ]}
            />
            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[nxtUnloadingWallX(2), 0, -backSideZ]}
            />

            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[nxtUnloadingWallX(3), 0, -backSideZ]}
            />

            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[nxtUnloadingWallX(4), 0, -backSideZ]}
            />

            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[nxtUnloadingWallX(5), 0, -backSideZ]}
            />
            {/*last unloading wall*/}
            <DoorWall
                dim={{ width: UnLoadWallDim.w, height: UnLoadWallDim.h, depth: UnLoadWallDim.d }}
                pos={[-unLoadingFirstWallX, 0, -backSideZ]} />
            {/* dock door top wall */}
            <DoorWall
                dim={{ width: floorDimension.w, height: 10, depth: 2 }}
                pos={[0, 112, -backSideZ]}
            />
            {/* dock door */}
            <DockDoor
                pos={[0, 0, -backSideZ]}
            />
            <DockDoor
                pos={[538, 0, -backSideZ]}
            />
            <DockDoor
                pos={[270, 0, -backSideZ]}
            />
            <DockDoor
                pos={[-270, 0, -backSideZ]}
            />
            <DockDoor
                pos={[-538, 0, -backSideZ]}
            />
        </>
    )
}

export default Environment
