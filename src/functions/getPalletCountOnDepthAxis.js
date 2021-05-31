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

# Total row(on depth axis) is Math.floor(Rd/Pd)
*/
const getPalletCountOnDepthAxis = (rackDepth, palletDepth) => {
    return Math.floor(rackDepth / palletDepth);
}

export default getPalletCountOnDepthAxis;