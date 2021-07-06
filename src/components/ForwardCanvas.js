import { useContext } from 'react'
import MessageContext from '../context/MessageContext'
import UtilizationContext from '../context/UtilizationContext'
import SKUColorMapContext from '../context/SKUColorMapContext'
import ControlContext from '../context/ControlContext'
import { Canvas } from '@react-three/fiber'

const ForwardCanvas = ({ children }) => {
    const value = useContext(MessageContext);
    const value1 = useContext(UtilizationContext);
    const value2 = useContext(ControlContext);
    const value3 = useContext(SKUColorMapContext);


    return (
        <Canvas
            // camera={{ position: [50, 50, -400] }}
            style={{ width: '85vw', height: '80vh' }}
            /* style={{ width: '100vw', height: '90vh' }} */>
            <ControlContext.Provider value={value2}>
                <MessageContext.Provider value={value}>
                    <UtilizationContext.Provider value={value1}>
                        <SKUColorMapContext.Provider value={value3}>
                            {children}
                        </SKUColorMapContext.Provider>
                    </UtilizationContext.Provider>
                </MessageContext.Provider>
            </ControlContext.Provider>
        </Canvas>
    )
}

export default ForwardCanvas;