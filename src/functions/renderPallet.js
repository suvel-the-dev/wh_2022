import getRackDetail from './getRackDetail';
import getPallet from './getPallet';

const renderPallet = (palletList, rackList) => {
    return palletList.map(pallet => {
        const { coordinate, placement } = getRackDetail(pallet, rackList);
        // console.log({ coordinate, placement })
        return getPallet(coordinate, placement, pallet.color);
    })

};

export default renderPallet;