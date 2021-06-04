import Rack from './index';
import FloorLabel from '../FloorLabel';

const RackLabelled = ({
    rackObj, color, pos, label
}) => {
    return (
        <>
            <Rack rackObj={rackObj} color={color} />
            <FloorLabel pos={pos}>
                {label}
            </FloorLabel>
        </>
    )
};

export default RackLabelled;