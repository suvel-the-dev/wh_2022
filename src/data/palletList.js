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
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C1",
        "qty": 30,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 2
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 150
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C3",
        "qty": 15,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 40
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 118
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 112
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 14
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 147
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C1",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 189
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 251
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 250
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 233
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 208
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 188
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 181
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C1",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 117
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 46
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 138
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 262
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 196
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 32
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 105
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 39
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C2",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 149
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 86
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 194
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 136
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 108
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 181
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C1",
        "qty": 30,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 239
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C2",
        "qty": 15,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 148
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C3",
        "qty": 20,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 53
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C4",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 259
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 51
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C6",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 61
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 207
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 45
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 79
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 126
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C4",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 239
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 38
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 200
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 84
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 230
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 148
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C3",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 73
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 223
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 24
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 64
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C7",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 39
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER1C2",
        "qty": 30,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 96
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER2C2",
        "qty": 55,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 205
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER3C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 178
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER4C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 85
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER4C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "AB",
        "dayLastPick": 251
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER4C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 204
    }
]

export default data;