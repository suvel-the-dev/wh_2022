
const calculateUtilization = (palletList) => {
    let actualPalletsSum = 0;
    let maxPalletsSum = 0;
    
    palletList.forEach(pallet => {
        actualPalletsSum = actualPalletsSum + pallet.ACTUAL_PALLETS;
        maxPalletsSum = maxPalletsSum + pallet.MAX_PALLETS;
    });
    
    // console.log({ actualPalletsSum, maxPalletsSum })

    return Math.floor((actualPalletsSum / maxPalletsSum) * 100) || 0
}

export default calculateUtilization;
