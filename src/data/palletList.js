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
        "dayLastPick": 2,
        "expiry": 20240210
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 150,
        "expiry": 20221007
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C3",
        "qty": 15,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 40,
        "expiry": 20240101
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 118,
        "expiry": 20240310
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 112,
        "expiry": 20220816
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 14,
        "expiry": 20230423
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR1C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 147,
        "expiry": 20211112
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C1",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 189,
        "expiry": 20211004
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 251,
        "expiry": 20300824
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 250,
        "expiry": 20230928
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 233,
        "expiry": 20240519
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 208,
        "expiry": 20220305
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 188,
        "expiry": 20230808
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR2C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 181,
        "expiry": 20220408
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C1",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 117,
        "expiry": 20220304
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 46,
        "expiry": 20230209
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 138,
        "expiry": 20231104
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 262,
        "expiry": 20300824
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 196,
        "expiry": 20240309
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 32,
        "expiry": 20211021
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR3C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 105,
        "expiry": 20230714
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 39,
        "expiry": 20220304
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C2",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 149,
        "expiry": 20240202
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 86,
        "expiry": 20300824
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 194,
        "expiry": 20240313
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 136,
        "expiry": 20240313
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 108,
        "expiry": 20220224
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR4C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 181,
        "expiry": 20230106
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C1",
        "qty": 30,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 239,
        "expiry": 20211004
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C2",
        "qty": 15,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 148,
        "expiry": 20220228
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C3",
        "qty": 20,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 53,
        "expiry": 20240213
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C4",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 259,
        "expiry": 20240227
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 51,
        "expiry": 20301104
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C6",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 61,
        "expiry": 20231210
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR5C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 207,
        "expiry": 20230413
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 45,
        "expiry": 20240313
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 79,
        "expiry": 20220503
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 126,
        "expiry": 20231028
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C4",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 239,
        "expiry": 20300131
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 38,
        "expiry": 20240109
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 200,
        "expiry": 20231218
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR6C7",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 84,
        "expiry": 20231016
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 230,
        "expiry": 20300131
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 148,
        "expiry": 20240309
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C3",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 73,
        "expiry": 20240213
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C4",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 223,
        "expiry": 20231010
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C5",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 24,
        "expiry": 20210930
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C6",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 64,
        "expiry": 20220408
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1RACKR7C7",
        "qty": 10,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 39,
        "expiry": 20240202
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER1C2",
        "qty": 30,
        "detail": {},
        "demand": 1,
        "velocity": "C",
        "dayLastPick": 96,
        "expiry": 20300624
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER2C2",
        "qty": 55,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 205,
        "expiry": 20230730
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER3C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 178,
        "expiry": 20210919
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER4C1",
        "qty": 0,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 85,
        "expiry": 20240415
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER4C2",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "AB",
        "dayLastPick": 251,
        "expiry": 20240121
    },
    {
        "productName": "amazon groceries",
        "rack": "Z1SPACER4C3",
        "qty": 10,
        "detail": {},
        "demand": 0,
        "velocity": "C",
        "dayLastPick": 204,
        "expiry": 20240528
    }
]

export default data;