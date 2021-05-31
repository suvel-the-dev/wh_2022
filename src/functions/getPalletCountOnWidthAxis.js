/*
                                                        
                 ------------------col-----------------------
                 ------------------Rl------------------------
                 ---Pl-----                                  
                                                             
    |   |   |    +---------+--------------------------------+
    |   |   |    |   P     |                                |
    |   |   Pw   |         |                                |
    |   |   -    +---------+          R                     |
   row  Rw       |                                          |
    |   |        |                                          |
    |   |        |                                          |
    |   |        +------------------------------------------+

# Total col(on width axis) is Math.floor(Rw/Pw) Pallets 
*/
const getPalletCountOnWidthAxis = (rackWidth, palletWidth) => {
    return Math.floor(rackWidth / palletWidth);
}

export default getPalletCountOnWidthAxis;