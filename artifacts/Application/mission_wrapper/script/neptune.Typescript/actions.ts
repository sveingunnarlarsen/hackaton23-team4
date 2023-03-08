
// api/functions/Tile/Save
// api/functions/Category/Save
// api/functions/Launchpad/Save

const tile = {
    api: `api/functions/Tile/Save`,
    properties: {
        name: {},
        title: {},
        description: {},
        package: {},
        icon: {},
        image: {}
    }
}


const tileGroup = {
    api: `api/functions/Category/Save`,
    properties: {
        name: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        package: {
            type: String,
        },
    }
}

const launchpad = {
    api: `api/functions/Launchpad/Save`,
    properties: {
        name: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        package: {

        },
    },
}