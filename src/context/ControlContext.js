import { createContext, useState, useEffect } from 'react'

const ControlContext = createContext({});

export const ControlProvider = ({ children }) => {
    const [control, setControl] = useState({
        demand: 'All',
        velocity: 'NONE',
        dayLastPick: '',
        expiry: '',
        utilization: false,
        costHeatMap: false,
        showStats: false,
        showAisleMark: false,
        showSKUType: false,
        showOpzModal: false,
        showFilterModal: false,
        abc: 'NONE',
        componentOpacity: 1.0,
        displacement: false,
        displacedDesc: undefined,
        swap: false,
        showOptimizationSwitch: false,
        optimizationForm: {
            startTime: '',
            endOptimization: '',
            associates: '',
            OptimizationType: 'NONE'

        },
        cameraPosition: [0, 50, 500],
        abcdClassification: false,
        animate: false
    })
    const value = { control, setControl }

    return (
        <ControlContext.Provider value={value}>
            {children}
        </ControlContext.Provider>
    )
}
export default ControlContext;