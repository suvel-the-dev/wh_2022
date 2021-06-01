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
    {
        productName: 'amazon groceries',
        rack: "rack4",
        qty: 10,
        detail: {},
        demand: 0
    },
    {
        productName: 'couriers',
        rack: "rack8",
        qty: 250,
        detail: {},
        demand: 0
    },
    {
        productName: 'fish tank glass',
        rack: "rack7",
        qty: 50,
        detail: {},
        demand: 1
    },
    {
        productName: 'FedEx Letters',
        rack: "space4",
        qty: 10,
        detail: {},
        demand: 1
    },
];

export default data;