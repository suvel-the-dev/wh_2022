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
            style={{ width: '85vw', height: '80vh' }}
            performance={{
                current: 1,
                min: 0.1,
                max: 1,
                debounce: 200,
                regress: () => { },
            }}
            // frameloop="demand"
            /* 
            commented as it is affecting the animation
            */
            dpr={[1, 2]}
            gl={{ alpha: false, antialias: false }}
        >
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