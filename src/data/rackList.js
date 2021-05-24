//Planning 📐
/*
   +-----------+
   |  devison2 |
   +-----------+
                  +--------+
                  |devison3|
   +-----------+  +--------+
   |  devison1 |
   +-----------+
   |devison1.5 |
   +-----------+
 */
//


const data = [
    //division 1 &  devison 1.5 (rack with 3 shelf)
    {
        id: "rack1",
        shelf_count: 9,
        coordinate: {
            x: 0,
            y: 0
        }
    },
    {
        id: "rack1.5",
        shelf_count: 3,
        coordinate: {
            x: 0,
            y: 9
        }
    },
    {
        id: "rack2",
        shelf_count: 9,
        coordinate: {
            x: 26,
            y: 0
        }
    },
    {
        id: "rack2.5",
        shelf_count: 3,
        coordinate: {
            x: 26,
            y: 9
        }
    },
    {
        id: "rack3",
        shelf_count: 9,
        coordinate: {
            x: 26 * 2,
            y: 0
        }
    },
    {
        id: "rack3.5",
        shelf_count: 3,
        coordinate: {
            x: 26 * 2,
            y: 9
        }
    },
    {
        id: "rack4",
        shelf_count: 9,
        coordinate: {
            x: 26 * 3,
            y: 0
        }
    },
    {
        id: "rack4.5",
        shelf_count: 3,
        coordinate: {
            x: 26 * 3,
            y: 9
        }
    },
    {
        id: "rack5",
        shelf_count: 9,
        coordinate: {
            x: 26 * 4,
            y: 0
        }
    },
    {
        id: "rack5.5",
        shelf_count: 3,
        coordinate: {
            x: 26 * 4,
            y: 9
        }
    },
    //division 2
    {
        id: "rack6",
        shelf_count: 9,
        coordinate: {
            x: 0,
            y: -60
        }
    },
    {
        id: "rack7",
        shelf_count: 9,
        coordinate: {
            x: 26,
            y: -60
        }
    },
    {
        id: "rack8",
        shelf_count: 9,
        coordinate: {
            x: 26 * 2,
            y: -60
        }
    },
    {
        id: "rack9",
        shelf_count: 9,
        coordinate: {
            x: 26 * 3,
            y: -60
        }
    },
    {
        id: "rack10",
        shelf_count: 9,
        coordinate: {
            x: 26 * 4,
            y: -60
        }
    },
    //division 2.1
    {
        id: "rack11",
        shelf_count: 9,
        coordinate: {
            x: 0,
            y: -120
        }
    },
    {
        id: "rack12",
        shelf_count: 9,
        coordinate: {
            x: 26,
            y: -120
        }
    },
    {
        id: "rack13",
        shelf_count: 9,
        coordinate: {
            x: 26 * 2,
            y: -120
        }
    },
    {
        id: "rack14",
        shelf_count: 9,
        coordinate: {
            x: 26 * 3,
            y: -120
        }
    },
    {
        id: "rack15",
        shelf_count: 9,
        coordinate: {
            x: 26 * 4,
            y: -120
        }
    },
    //division 2.2
    {
        id: "rack16",
        shelf_count: 9,
        coordinate: {
            x: 0,
            y: -180
        }
    },
    {
        id: "rack17",
        shelf_count: 9,
        coordinate: {
            x: 26,
            y: -180
        }
    },
    {
        id: "rack18",
        shelf_count: 9,
        coordinate: {
            x: 26 * 2,
            y: -180
        }
    },
    {
        id: "rack19",
        shelf_count: 9,
        coordinate: {
            x: 26 * 3,
            y: -180
        }
    },
    {
        id: "rack20",
        shelf_count: 9,
        coordinate: {
            x: 26 * 4,
            y: -180
        }
    },
    //division 2.3
    {
        id: "rack21",
        shelf_count: 9,
        coordinate: {
            x: 0,
            y: -240
        }
    },
    {
        id: "rack22",
        shelf_count: 9,
        coordinate: {
            x: 26,
            y: -240
        }
    },
    {
        id: "rack23",
        shelf_count: 9,
        coordinate: {
            x: 26 * 2,
            y: -240
        }
    },
    {
        id: "rack24",
        shelf_count: 9,
        coordinate: {
            x: 26 * 3,
            y: -240
        }
    },
    {
        id: "rack25",
        shelf_count: 9,
        coordinate: {
            x: 26 * 4,
            y: -240
        }
    },
    //division 3
    {
        id: "rack26",
        shelf_count: 5,
        coordinate: {
            x: -60,
            y: -30
        }
    },
    {
        id: "rack27",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26,
            y: -30
        }
    },
    {
        id: "rack28",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26 * 2,
            y: -30
        }
    },
    //division 3.1
    {
        id: "rack29",
        shelf_count: 5,
        coordinate: {
            x: -60,
            y: -30 * 3
        }
    },
    {
        id: "rack30",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26,
            y: -30 * 3
        }
    },
    {
        id: "rack31",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26 * 2,
            y: -30 * 3
        }
    },
    //division 3.2
    {
        id: "rack32",
        shelf_count: 5,
        coordinate: {
            x: -60,
            y: -30 * 5
        }
    },
    {
        id: "rack33",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26,
            y: -30 * 5
        }
    },
    {
        id: "rack34",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26 * 2,
            y: -30 * 5
        }
    },
    //division 3.3
    {
        id: "rack35",
        shelf_count: 5,
        coordinate: {
            x: -60,
            y: -30 * 7
        }
    },
    {
        id: "rack36",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26,
            y: -30 * 7
        }
    },
    {
        id: "rack37",
        shelf_count: 5,
        coordinate: {
            x: -60 + -26 * 2,
            y: -30 * 7
        }
    },
];

export default data;