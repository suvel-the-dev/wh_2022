import { useContext, useEffect } from 'react'
import MessageContext from '../context/MessageContext'
import { Canvas } from '@react-three/fiber'

const ForwardCanvas = ({ children }) => {
    const value = useContext(MessageContext);

    return (
        <Canvas
            camera={{ position: [-50, 50, 50] }}
            style={{ width: '100vw', height: '100vh' }}>
            <MessageContext.Provider value={value}>
                {children}
            </MessageContext.Provider>
        </Canvas>
    )
}

export default ForwardCanvas;