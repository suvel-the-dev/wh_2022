import { createContext, useState } from 'react'

const ControlContext = createContext({});

export const ControlProvider = ({ children }) => {
    const [control, setControl] = useState({
        demand: 'All',
        velocity: 'A',
        dayLastPick: 0,
        expiry: 0,
        utilization: false,
        costHeatMap: false,
        showOpzModal: false,
        showFilterModal: false,
    })
    const value = { control, setControl }
    return (
        <ControlContext.Provider value={value}>
            {children}
        </ControlContext.Provider>
    )
}
export default ControlContext;