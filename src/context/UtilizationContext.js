import { createContext, useState } from 'react'
import randomColor from "randomcolor";

const UtilizationContext = createContext();

const getRanges = (range) => {
    let fRange = 0;
    let arr = [];
    let temp = fRange;

    let rangeSplit = range?.split(',');

    for (let r in rangeSplit) {
        let value = rangeSplit[r];
        arr.push(`${temp}-${value}`)
        temp = value;
    }
    return arr;
}

const getUtilizationRangeColorArr = (ranges) => {
    return getRanges(ranges).map(range => {
        const [min, max] = range.split('-');
        return ({
            range: range,
            color: randomColor({
                luminosity: 'dark',
                // format: 'rgb' // e.g. 'rgb(225,200,20)'
                // hue: 'green',
                alpha: 5 
            }),
            min: Number(min),
            max: Number(max)
        })
    })
}

export const UtilizationProvider = ({ children }) => {
    const [range, setRange] = useState("0,20,30,40,50,60,70,80,90,130");

    const utilizationsRanges = getUtilizationRangeColorArr(range);

    const value = { range, setRange, utilizationsRanges }
    return (
        <UtilizationContext.Provider value={value}>
            {children}
        </UtilizationContext.Provider>
    )
}
export default UtilizationContext;