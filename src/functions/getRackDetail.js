const getRackDetail = (palletObject, rackList) => {
    const { rack_id: rackId, shelf_no: shelfNum, placement } = palletObject;
    const rack = rackList.find(rck => rck.id == rackId);
    const coordinate = {
        x: rack.coordinate.x,
        y: rack.coordinate.y,
        z: 2 + 5 * (shelfNum - 1)
    }
    return { coordinate: coordinate, placement };
}

export default getRackDetail;