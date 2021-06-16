import Rack from './index';
import FloorLabel from '../FloorLabel';
import ComponentMat from '../ComponentMat'
import { useContext } from 'react'
import ControlContext from '../../context/ControlContext'

const RackLabelled = ({
    rackObj, color, pos, label
}) => {
    const { control } = useContext(ControlContext)

    return (
        <>
            <Rack rackObj={rackObj} color={color} />
            <FloorLabel pos={pos}>
                {label}{`\n`} {control?.utilization ? `utilized:${Math.floor(rackObj.utilization)}%` : ''}
            </FloorLabel>
            <ComponentMat comObj={rackObj} color={color} />
        </>
    )
};

export default RackLabelled;