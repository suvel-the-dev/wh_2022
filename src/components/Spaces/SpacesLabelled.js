import Spaces from './index';
import FloorLabel from '../FloorLabel';
import ComponentMat from '../ComponentMat'
import ControlContext from '../../context/ControlContext'
import { useContext } from 'react'

const SpacesLabelled = ({
    spaceObj, color, pos, label
}) => {
    const { control } = useContext(ControlContext)
    return (
        <>
            <Spaces spaceObj={spaceObj} />
            <FloorLabel pos={pos}>
                {label}{`\n`} {control?.utilization ? `utilized:${Math.floor(spaceObj.utilization)}%` : ''}
            </FloorLabel>
            <ComponentMat comObj={spaceObj} color={color} />
        </>
    )
};

export default SpacesLabelled