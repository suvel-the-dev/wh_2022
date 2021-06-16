import Rack from './index';
import FloorLabel from '../FloorLabel';
import ComponentMat from '../ComponentMat'


const RackLabelled = ({
    rackObj, color, pos, label
}) => {
    return (
        <>
            <Rack rackObj={rackObj} color={color} />
            <FloorLabel pos={pos}>
                {label}
            </FloorLabel>
            <ComponentMat comObj={rackObj} color={color} />
        </>
    )
};

export default RackLabelled;