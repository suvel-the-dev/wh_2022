import { useContext } from 'react'
import MessageContext from '../context/MessageContext'
import UtilizationContext from '../context/UtilizationContext'
import ControlContext from '../context/ControlContext'
import { Canvas } from '@react-three/fiber'

const ForwardCanvas = ({ children }) => {
    const value = useContext(MessageContext);
    const value1 = useContext(UtilizationContext);
    const value2 = useContext(ControlContext);

    return (
        <Canvas
            camera={{ position: [50, 50, -400] }}
            style={{ width: '85vw', height: '69vh' }}
            /* style={{ width: '100vw', height: '90vh' }} */>
            <ControlContext.Provider value={value2}>
                <MessageContext.Provider value={value}>
                    <UtilizationContext.Provider value={value1}>
                        {children}
                    </UtilizationContext.Provider>
                </MessageContext.Provider>
            </ControlContext.Provider>
        </Canvas>
    )
}

export default ForwardCanvas;