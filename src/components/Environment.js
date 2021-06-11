import React from 'react'
import Truck from './Truck'
import Ground from './Ground'
import Road from './Road'
import Wall from './Wall'
import UnLoadingFloor from './UnLoadingFloor'
import Floor from './Floor'

const Environment = () => {
    return (
        <>
            <Floor />
            <UnLoadingFloor />
            <Truck pos={[40, 0, -350]} />
            <Truck pos={[120, 0, -350]} />
            <Truck pos={[-40, 0, -350]} />
            <Truck pos={[-120, 0, -350]} />
            {/* Un-Loading Area */}
            <Wall pos={[-160, 0, -310]} />
            <Wall pos={[-80, 0, -310]} />
            <Wall pos={[0, 0, -310]} />
            <Wall pos={[80, 0, -310]} />
            <Wall pos={[160, 0, -310]} />
            {/* End */}
            {/* Back Wall */}
            <Wall dim={{ width: 250, height: 35, depth: 2 }} pos={[0, 0, 60]} />
            {/* End */}
            {/* Side Wall */}
            <Wall dim={{ width: 2, height: 35, depth: 250 }} pos={[250 / 2 * 1.5, 0, -125]} />
            <Wall dim={{ width: 2, height: 35, depth: 250 }} pos={[-250 / 2 * 1.5, 0, -125]} />
            {/* End */}
            {/* ground */}
            <Ground />
            {/* End */}
            {/* ground */}
            <Road />
            {/* End */}
        </>
    )
}

export default Environment
