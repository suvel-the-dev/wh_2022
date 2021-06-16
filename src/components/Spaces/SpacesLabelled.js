import Spaces from './index';
import FloorLabel from '../FloorLabel';
import ComponentMat from '../ComponentMat'

const SpacesLabelled = ({
    spaceObj, color, pos, label
}) => {
    return (
        <>
            <Spaces spaceObj={spaceObj}  />
            <FloorLabel pos={pos}>
                {label}
            </FloorLabel>
            <ComponentMat comObj={spaceObj} color={color} />
        </>
    )
};

export default SpacesLabelled