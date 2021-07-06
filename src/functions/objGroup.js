const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
        // (result[currentValue[key]] = result[currentValue[key]] || [])
        const val = result[currentValue[key]] || [];
        let returnVal = undefined;
        if (!result[currentValue[key]]) {
            returnVal = { pallets: [currentValue], palletCount: 1 }
        }
        else {
            const { pallets, palletCount } = result[currentValue[key]];
            returnVal = {
                pallets: [...pallets, currentValue],
                palletCount: palletCount + 1
            }
        }
        result[currentValue[key]] = returnVal;
        return result;
    }, {});
};