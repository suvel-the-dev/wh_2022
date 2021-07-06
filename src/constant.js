export const scale = 1.5;
export const planeRotation = [(Math.PI / 2) * -1, 0, 0];

export const rackBaseObject = {
    padding: 2,
    color: "yellow"
}

export const rackSideObject = {
    dim: {
        width: 0.5,
        height: 6,
        depth: 0.5
    }
}

export const palletObject = {
    dim: {
        width: 5,
        height: 5,
        depth: 5,
    }
}

export const groundObject = {
    dim: {
        width: 250 * scale,
        height: 250
    },
    pos: {
        x: 0,
        y: 0,
        z: -125
    }
}

export const roadObject = {
    dim: {
        width: 250 * scale,
        height: 50
    },
    pos: {
        x: 0,
        y: 0,
        z: -350
    }
}