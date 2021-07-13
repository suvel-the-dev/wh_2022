const filterPallets = (pallets, currentFilters) => {
    let filteredPallets = [];
    const {
        demand,
        velocity,
        dayLastPick,
        expiry,
        abc,
        displacement,
        displacedDesc
    } = currentFilters;

    filteredPallets = pallets.filter(pallet => {

        if (pallet.ACTUAL_PALLETS < 1) return false;
        if ((displacement && displacedDesc) && displacedDesc != pallet.SKU_DESC)
            return false;
        if (demand == 'Yes' && pallet.TOBEPICK <= 1)
            return false;
        else if (demand == 'No' && pallet.TOBEPICK > 0)
            return false;
        if (velocity != 'NONE' && velocity != pallet.VELOCITY)
            return false;


        if (abc != 'NONE' && abc != pallet.ABC)
            return false;

        if (dayLastPick && (0 == pallet.DAYS_LAST_PICK || dayLastPick < pallet.DAYS_LAST_PICK))
            return false;

        if (expiry) {
            const palletExpDate = new Date(pallet.EXPIRY);
            const selectedExpDate = new Date(expiry);

            if (!pallet.EXPIRY || palletExpDate.getTime() < selectedExpDate.getTime())
                return false;
        }

        return true;
    })
    return filteredPallets
}

export default filterPallets;