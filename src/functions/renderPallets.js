
const renderPallets = (palletArr, spaceList, component) => {
    return palletArr.map(pallet => {
        const { LOC, PRE_LOC, OPTIMIZED, ...rest } = pallet;
        const position = spaceList.find(rack => rack.LOC == LOC)?.position;
        const prevPosition = OPTIMIZED ?
            spaceList.find(rack => rack.LOC == PRE_LOC)?.position :
            position
        if (!position) {
            console.log({ pallet })
        }
        return (
            component(
                [
                    position?.x || 0,
                    position?.y + (3.5 / 2 + 1) * 1.5 || 0,
                    position?.z || 0
                ],
                pallet,
                [
                    prevPosition?.x || 0,
                    prevPosition?.y + (3.5 / 2 + 1) * 1.5 || 0,
                    prevPosition?.z || 0
                ],
                OPTIMIZED
            )
        )
    })

}

export default renderPallets;