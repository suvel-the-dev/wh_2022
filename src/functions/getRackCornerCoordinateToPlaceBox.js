
/*

   1------------------2
   |\                 |\
   | \                | \
   |  \               |  \
   |   4------------------3
   |   |              |   |
   |   |              |   |
   8------------------7   |
   \   |               \  |
     \ |                 \|
      \|                  |
       5------------------6
 */

export const getRackCornerCoordinateToPlaceBox = (
    rackObject,
    boxObject,
    scale = 1
) => {

    /*
    The function return corner coordinates where a pallet can be place.
    This is achieved by adding/subtracting the Pallet's dimension.
    */

    const {
        dim:
        {
            width,
            depth,
            height
        },
        position
    } = rackObject;

    const {
        dim:
        {
            width: palletWidth,
            depth: palletDepth,
        },
    } = boxObject;

    const scaledWidth = width * scale;
    const scaledHeight = height * scale;
    const scaledDepth = depth * scale;

    const scaledPalletWidth = palletWidth * scale;
    const scaledPalletDepth = palletDepth * scale;

    const xCordExpression1 = (position.x - scaledWidth / 2) + (scaledPalletWidth / 2);
    const xCordExpression2 = (position.x + scaledWidth / 2) - (scaledPalletWidth / 2);

    const yCordExpression1 = (position.z - scaledDepth / 2) + (scaledPalletDepth / 2);
    const yCordExpression2 = (position.z + scaledDepth / 2) - (scaledPalletDepth / 2);

    const zCordExpression1 = position.y + scaledHeight / 2;
    const zCordExpression2 = position.y - scaledHeight / 2;


    return (
        [
            /* --------------------------- Top coordinates --------------------------- */

            //  1st coordinate
            {
                color: 'black',
                cor: [xCordExpression1, zCordExpression1, yCordExpression1]
            },
            //  2nd coordinate
            {
                color: 'yellow',
                cor: [xCordExpression2, zCordExpression1, yCordExpression1]
            },
            //  3rd coordinate
            {
                color: 'red',
                cor: [xCordExpression2, zCordExpression1, yCordExpression2]
            },
            //  4th coordinate4
            {
                color: 'green',
                cor: [xCordExpression1, zCordExpression1, yCordExpression2]
            },

            /* --------------------------- Bottom coordinates --------------------------- */

            //  5th coordinate
            {
                color: 'brown',
                cor: [xCordExpression1, zCordExpression2, yCordExpression2]
            },
            //  6th coordinate
            {
                color: 'blue',
                cor: [xCordExpression2, zCordExpression2, yCordExpression2]
            },
            //  7th coordinate
            {
                color: 'pink',
                cor: [xCordExpression2, zCordExpression2, yCordExpression1]
            },
            //  8th coordinate
            {
                color: 'white',
                cor: [xCordExpression1, zCordExpression2, yCordExpression1]
            },
        ]
    )
}

export default getRackCornerCoordinateToPlaceBox;