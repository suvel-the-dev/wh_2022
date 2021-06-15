import { useContext } from 'react'
import MessageContext from '../context/MessageContext'
import UtilizationContext from '../context/UtilizationContext'
import { Canvas } from '@react-three/fiber'

const ForwardCanvas = ({ children }) => {
    const value = useContext(MessageContext);
    const value1 = useContext(UtilizationContext);

    return (
        <Canvas
            camera={{ position: [50, 50, -400] }}
            style={{ width: '85vw', height: '69vh' }}
            /* style={{ width: '100vw', height: '90vh' }} */>
            <MessageContext.Provider value={value}>
                <UtilizationContext.Provider value={value1}>
                    {children}
                </UtilizationContext.Provider>
            </MessageContext.Provider>
        </Canvas>
    )
}

export default ForwardCanvas;