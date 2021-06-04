import { useContext } from 'react'
import MessageContext from '../context/MessageContext'
import { Canvas } from '@react-three/fiber'

const ForwardCanvas = ({ children }) => {
    const value = useContext(MessageContext);

    return (
        <Canvas
            camera={{ position: [50, 50, -400] }}
            style={{ width: '85vw', height: '69vh' }}
            /* style={{ width: '100vw', height: '90vh' }} */>
            <MessageContext.Provider value={value}>
                {children}
            </MessageContext.Provider>
        </Canvas>
    )
}

export default ForwardCanvas;