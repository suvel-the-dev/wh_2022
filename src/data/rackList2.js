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
const data = [
    // Spaces
    {
        name: "space1",
        dim: {
            width: 20,
            height: 0,
            depth: 12
        },
        position: { x: 40, y: 1, z: -250 },
        shelfCount: 2,
        type: "space"
    },
    {
        name: "space2",
        dim: {
            width: 20,
            height: 0,
            depth: 12
        },
        position: { x: 0, y: 1, z: -250 },
        shelfCount: 2,
        type: "space"
    },
    {
        name: "space3",
        dim: {
            width: 20,
            height: 0,
            depth: 12
        },
        position: { x: -40, y: 1, z: -250 },
        shelfCount: 2,
        type: "space"
    },
    {
        name: "space4",
        dim: {
            width: 20,
            height: 0,
            depth: 12
        },
        position: { x: 80, y: 1, z: -120 },
        shelfCount: 2,
        type: "space"
    },
    {
        name: "space5",
        dim: {
            width: 20,
            height: 0,
            depth: 12
        },
        position: { x: 80, y: 1, z: -200 },
        shelfCount: 2,
        type: "space"
    },
    //Racks
    {
        name: "rack1",
        dim: {
            width: 16,
            height: 0.2,
            depth: 8
        },
        position: { x: 40, y: 1, z: -200 },
        shelfCount: 3,
        type: "rack"
    },
    {
        name: "rack2",
        dim: {
            width: 16,
            height: 0.2,
            depth: 8
        },
        position: { x: 0, y: 1, z: -200 },
        shelfCount: 3,
        type: "rack"
    },
    {
        name: "rack3",
        dim: {
            width: 16,
            height: 0.2,
            depth: 8
        },
        position: { x: -40, y: 1, z: -200 },
        shelfCount: 3,
        type: "rack"
    },
    {
        name: "rack4",
        dim: {
            width: 16,
            height: 0.2,
            depth: 8
        },
        position: { x: 40, y: 1, z: -160 },
        shelfCount: 5,
        type: "rack"
    },
    {
        name: "rack5",
        dim: {
            width: 16,
            height: 0.2,
            depth: 8
        },
        position: { x: 0, y: 1, z: -160 },
        shelfCount: 5,
        type: "rack"
    },
    {
        name: "rack6",
        dim: {
            width: 16,
            height: 0.2,
            depth: 8
        },
        position: { x: -40, y: 1, z: -160 },
        shelfCount: 5,
        type: "rack"
    },
    {
        name: "rack7",
        dim: {
            width: 16,
            height: 0.2,
            depth: 8
        },
        position: { x: 40, y: 1, z: -120 },
        shelfCount: 9,
        type: "rack"
    },
    {
        name: "rack8",
        dim: {
            width: 32,
            height: 0.2,
            depth: 16
        },
        position: { x: -10, y: 1, z: -120 },
        shelfCount: 9,
        type: "rack"
    },
];

export default data;