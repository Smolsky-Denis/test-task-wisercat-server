module.exports = {
    requestData: {
        itemList: [
            {
                id: 1,
                name: "Item 1",
                description: "Item description 1"
            },
            {
                id: 2,
                name: "Item 2",
                description: "Item description 2"
            },
            {
                id: 3,
                name: "Item 3",
                description: "Item description 3"
            }
        ],
        itemById: [{
            id: 1,
            name: "Item 1",
            description: "Item 1 description",
            active: true,
            properties: [
                {
                    name: "property11",
                    value: "value11"
                },
                {
                    name: "property12",
                    value: "value12"
                },
                {
                    name: "property13",
                    value: "value13"
                }
            ]
        },{
            id: 2,
            name: "Item 2",
            description: "Item 2 description",
            active: false,
            properties: [
                {
                    name: "property21",
                    value: "value21"
                },
                {
                    name: "property22",
                    value: "value22"
                },
                {
                    name: "property23",
                    value: "value23"
                }
            ]
        },{
            id: 3,
            name: "Item 3",
            description: "Item 3 description",
            active: true,
            properties: [
                {
                    name: "property31",
                    value: "value31"
                },
                {
                    name: "property32",
                    value: "value32"
                },
                {
                    name: "property33",
                    value: "value33"
                }
            ]
        }]
    }
}