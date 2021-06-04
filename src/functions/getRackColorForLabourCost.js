const getRackColorForLabourCost = (zCoordinate) => {
    if (zCoordinate <= -200) return "#05a1fd";
    if (zCoordinate > -200 && zCoordinate < -100) return "#fec766";
    if (zCoordinate >= -100) return "#c72719";
};

export default getRackColorForLabourCost
