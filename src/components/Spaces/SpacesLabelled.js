import Spaces from './index';
import FloorLabel from '../FloorLabel';

const SpacesLabelled = ({
    spaceObj, color, pos, label
}) => {
    return (
        <>
            <Spaces spaceObj={spaceObj} color={color} />
            <FloorLabel pos={pos}>
                {label}
            </FloorLabel>
        </>
    )
};

export default SpacesLabelled