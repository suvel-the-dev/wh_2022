import { useState, createContext, useEffect } from 'react'
import Spinner from '../components/Spinner'

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), 5000)
        }
    }, [loading])

    return (
        <SpinnerContext.Provider value={{ setLoading }}>
            {
                loading && <Spinner />
            }
            {children}
        </SpinnerContext.Provider>
    )
}

export default SpinnerContext
