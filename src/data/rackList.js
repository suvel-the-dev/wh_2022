/*                                                                     
                +--------+   +--------+ +--------+                
                |  20x12 |   |  20x12 | |  20x12 |                 
                |(Space1)|   |(Space2)| |(Space3)|                   
                +--------+   +--------+ +--------+                   
                                                                               
   +--------+    +-------------+  +-------------+ +-------------+              
   |  20x12 |    |   16x8 s-3  |  |   16x8 s-3  | |   16x8 s-3  |              
   |(Space4)|    |   (Rack 1)  |  |   (Rack 2)  | |   (Rack 3)  |              
   +--------+    +-------------+  +-------------+ +-------------+              
                 +-------------+  +-------------+ +-------------+              
                 |   16x8 s-5  |  |   16x8 s-5  | |   16x8 s-5  |              
                 |   (Rack 4)  |  |   (Rack 5)  | |   (Rack 6)  |              
                 +-------------+  +-------------+ +-------------+              
   +--------+    +-------------+  +--------------------------+              
   |  20x12 |    |   16x8 s-9  |  |        32x16 s-9         |              
   |(Space5)|    |   (Rack 7)  |  |     	(Rack 8)         |              
   +--------+    +-------------+  +--------------------------+              
 
*/
//Rack generator function....👇 
/*

let rackList = [];
let initRow =-50 -(250 / 5) * 1.5;
let finalRow = (250 / 5) * 1.5;
let initCol = -125 - (250 / 3) * 1.5;
let finalCol = -125 + (250 / 3) * 1.5;
let rowCount = 1;
let colCount = 1;

const nxtRowDiff = 40;
const nxtColDiff = 30 ;

for(let row = initRow;row <= finalRow;row=nxtRowDiff+row){
let nxtRowCor = row;
    for(let col = initCol;col<=finalCol;col = nxtColDiff+col){
    let nxtColCor = col;
        rackList.push({
         name: `Z1RACKR${rowCount}C${colCount}`,
         dim: {
            width: 16,
            height: 0.2,
            depth: 8
         },
         position: { x: nxtRowCor, y: 1, z: nxtColCor  },
         shelfCount: 9,
         type: "rack"
        })
        colCount++;
    }
    rowCount++;
    colCount =1;
}
*/

const data = [
    {
        "name": "Z1RACKR1C1",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -170,
            "y": 1,
            "z": -250
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR1C2",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -170,
            "y": 1,
            "z": -210
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR1C3",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -170,
            "y": 1,
            "z": -170
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR1C4",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -170,
            "y": 1,
            "z": -130
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR1C5",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -170,
            "y": 1,
            "z": -90
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR1C6",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -170,
            "y": 1,
            "z": -50
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR1C7",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -170,
            "y": 1,
            "z": -10
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR2C1",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -95,
            "y": 1,
            "z": -250
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR2C2",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -95,
            "y": 1,
            "z": -210
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR2C3",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -95,
            "y": 1,
            "z": -170
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR2C4",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -95,
            "y": 1,
            "z": -130
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR2C5",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -95,
            "y": 1,
            "z": -90
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR2C6",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -95,
            "y": 1,
            "z": -50
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR2C7",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -95,
            "y": 1,
            "z": -10
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR3C1",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -65,
            "y": 1,
            "z": -250
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR3C2",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -65,
            "y": 1,
            "z": -210
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR3C3",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -65,
            "y": 1,
            "z": -170
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR3C4",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -65,
            "y": 1,
            "z": -130
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR3C5",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -65,
            "y": 1,
            "z": -90
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR3C6",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -65,
            "y": 1,
            "z": -50
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR3C7",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -65,
            "y": 1,
            "z": -10
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR4C1",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -35,
            "y": 1,
            "z": -250
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR4C2",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -35,
            "y": 1,
            "z": -210
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR4C3",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -35,
            "y": 1,
            "z": -170
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR4C4",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -35,
            "y": 1,
            "z": -130
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR4C5",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -35,
            "y": 1,
            "z": -90
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR4C6",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -35,
            "y": 1,
            "z": -50
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR4C7",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -35,
            "y": 1,
            "z": -10
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR5C1",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -5,
            "y": 1,
            "z": -250
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR5C2",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -5,
            "y": 1,
            "z": -210
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR5C3",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -5,
            "y": 1,
            "z": -170
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR5C4",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -5,
            "y": 1,
            "z": -130
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR5C5",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -5,
            "y": 1,
            "z": -90
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR5C6",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -5,
            "y": 1,
            "z": -50
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR5C7",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": -5,
            "y": 1,
            "z": -10
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR6C1",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 120,
            "y": 1,
            "z": -250
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR6C2",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 120,
            "y": 1,
            "z": -210
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR6C3",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 120,
            "y": 1,
            "z": -170
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR6C4",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 120,
            "y": 1,
            "z": -130
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR6C5",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 120,
            "y": 1,
            "z": -90
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR6C6",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 120,
            "y": 1,
            "z": -50
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR6C7",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 120,
            "y": 1,
            "z": -10
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR7C1",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 150,
            "y": 1,
            "z": -250
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR7C2",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 150,
            "y": 1,
            "z": -210
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR7C3",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 150,
            "y": 1,
            "z": -170
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR7C4",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 150,
            "y": 1,
            "z": -130
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR7C5",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 150,
            "y": 1,
            "z": -90
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR7C6",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 150,
            "y": 1,
            "z": -50
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1RACKR7C7",
        "dim": {
            "width": 16,
            "height": 0.2,
            "depth": 8
        },
        "position": {
            "x": 150,
            "y": 1,
            "z": -10
        },
        "shelfCount": 5,
        "type": "rack"
    },
    {
        "name": "Z1SPACER1C2",
        "dim": {
            "width": 10,
            "height": 0.2,
            "depth": 30
        },
        "position": {
            "x": 60,
            "y": 1,
            "z": -240
        },
        "shelfCount": 3,
        "type": "space"
    },
    {
        "name": "Z1SPACER2C2",
        "dim": {
            "width": 10,
            "height": 0.2,
            "depth": 30
        },
        "position": {
            "x": 60,
            "y": 1,
            "z": -140
        },
        "shelfCount": 3,
        "type": "space"
    },
    {
        "name": "Z1SPACER3C2",
        "dim": {
            "width": 10,
            "height": 0.2,
            "depth": 30
        },
        "position": {
            "x": 60,
            "y": 1,
            "z": -40
        },
        "shelfCount": 3,
        "type": "space"
    },
    {
        "name": "Z1SPACER4C1",
        "dim": {
            "width": 10,
            "height": 0.2,
            "depth": 10
        },
        "position": {
            "x": 60,
            "y": 1,
            "z": 30
        },
        "shelfCount": 3,
        "type": "space"
    },
    {
        "name": "Z1SPACER4C2",
        "dim": {
            "width": 30,
            "height": 0.2,
            "depth": 10
        },
        "position": {
            "x": 130,
            "y": 1,
            "z": 30
        },
        "shelfCount": 3,
        "type": "space"
    },
    {
        "name": "Z1SPACER4C3",
        "dim": {
            "width": 100,
            "height": 0.2,
            "depth": 10
        },
        "position": {
            "x": -100,
            "y": 1,
            "z": 30
        },
        "shelfCount": 3,
        "type": "space"
    }
]

export default data;