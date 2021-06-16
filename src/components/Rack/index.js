import RackBase from './RackBase';
import RackSides from './RackSides';
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
            < >
                <RackBase
                    rackObj={rackObj}
                    pos={nxtPosition}
                />
                <RackSides
                    rackObj={rackObj}
                    pos={nxtPosition}
                />
            </>
        )
        const verticalOffset = rackSideDim.height + dim.height;
        nxtPosition =
            getNxtShelfPosition(
                nxtPosition,
                verticalOffset
            );
    }
    return (
        <>
            {racks}
            <RackFoot rackObj={rackObj} color={color} />
        </>
    )

}

export default Rack;

const RackFoot = ({ rackObj, color }) => {
    let rackFootPosition = [
        rackObj.position.x,
        rackObj.position.y,
        rackObj.position.z
    ];
    return (
        <mesh
            scale={1.5}
            position={rackFootPosition}
            rotation={[(Math.PI / 2) * -1, 0, 0]}
        >
            <planeGeometry
                args={[rackObj.dim.width + 5 * 1.5, rackObj.dim.depth + 5 * 1.5]}
            />
            <meshStandardMaterial
                opacity={color ? 1 : 0}
                transparent={true}
                color={color}
            />
        </mesh>
    )
}