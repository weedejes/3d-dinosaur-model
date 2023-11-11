// namespace userconfig {
// export const ARCADE_SCREEN_WIDTH = 640
// export const ARCADE_SCREEN_HEIGHT = 480
// }
// stats.turnStats(true)
function updateCube () {
    size = 30 + Math.cos(game.runtime() / 250) * 0.75
    zChange = size / 2
    centerX = scene.screenWidth() / 2
    centerY = scene.screenHeight() / 2
    bottom_Jaw_Change = Math.cos(game.runtime() / 250) * 2
    // 72
    vertices = [
    //top jaw
        { x: -size / 4, y: -size / 2, z: 0 },
    //0
        { x: size / 4, y: -size / 2, z: 0 },
    { x: 0, y: -size / 2 - (size / 15), z: -size / 2 },
    //bottom jaw
        { x: -size / 4, y: -size / 2, z: 0 },
    //3
        { x: size / 4, y: -size / 2, z: 0 },
    { x: 0, y: (-size / 2 + (size / 8)) + bottom_Jaw_Change, z: -size / 2 },
    //head
        { x: 0, y: -size / 2 + (size / 4), z: 0 },
    //6
        { x: 0, y: -size / 2 - (size / 4), z: 0 },
    { x: 0, y: -size / 2, z: size / 4 },
    //left eye
        { x: -size / 4, y: -size / 2 - (size / 8), z: 0 },
    //9
        { x: (-size / 4) + (size / 6), y: -size / 2 - (size / 8), z: 0 },
    { x: (-size / 4) + (size / 12), y: -(size / 2) - (size / 4), z: 0 },
    //right eye
        { x: size / 4, y: -size / 2 - (size / 8), z: 0 },
    //12
        { x: (size / 4) - (size / 6), y: -size / 2 - (size / 8), z: 0 },
    { x: (size / 4) - (size / 12), y: -(size / 2) - (size / 4), z: 0 },
    //left eye pupil
        { x: -size / 4.5, y: -size / 2 - (size / 7), z: -1 },
    //15
        { x: (-size / 4.5) + (size / 10), y: -size / 2 - (size / 7), z: -1 },
    { x: (-size / 4) + (size / 12), y: -(size / 2) - (size / 5), z: -1 },
    //right eye pupil
        { x: size / 4.5, y: -size / 2 - (size / 7), z: -1 },
    //18
        { x: (size / 4.5) - (size / 10), y: -size / 2 - (size / 7), z: -1 },
    { x: (size / 4) - (size / 12), y: -(size / 2) - (size / 5), z: -1 },
    //neck
        { x: 0, y: 0, z: size/4 },
    //21
        //body
        { x: -size/10, y: -size/8, z: size / 4 },
    //22
        { x: size/10, y: -size / 8, z: size / 4 },
    //23
        { x: 0, y: -size / 6, z: size-(size/5) },
    //24
        { x: -size / 5, y: 0, z: size - (size / 2) },
    //25
        { x: size / 5, y: 0, z: size - (size / 2) },
    //26
        //body2
        { x: 0, y: -size / 6, z: size+(size/4) },
    //27
        { x: -size / 4, y: (-size / 10) + (size / 5), z: size + (size / 4) },
    //28
        { x: size/4, y: (-size / 10)+(size/5), z: size + (size / 4) },
    //29
        { x: size / 4, y: (-size / 10) + (size / 3), z: size-(size/2) },
    //30
        { x: -size / 4, y: (-size / 10) + (size / 3), z: size - (size / 2) },
    //31
        { x: size / 4, y: (-size / 10) + (size / 2), z: size },
    //32
        { x: -size / 4, y: (-size / 10) + (size / 2), z: size },
    //33
        //arms +(bottom_Jaw_Change/2)
        { x: -size / 4, y: (-size / 10) + (size / 2) + (bottom_Jaw_Change / 2), z: size/2 - (size / 6) },
    //34
        { x: -size / 4 + (size / 10), y: (-size / 10) + (size / 2) + (bottom_Jaw_Change / 2), z: size/2 - (size / 6) },
    //35
        { x: -size / 4, y: (size / 4) - (size / 8) + (bottom_Jaw_Change / 1), z: size / 2 - (size / 3) },
    //36
        { x: -size / 4 + (size / 10), y: (size / 4) + (bottom_Jaw_Change / 1) - (size / 8), z: size / 2 - (size / 3) },
    //37
        { x: -size / 4, y: (size / 4) - (size / 20) + (bottom_Jaw_Change / 1), z: size / 2 - (size / 3)-(size/10) },
    //38
        { x: -size / 4 + (size / 10), y: (size / 4) + (bottom_Jaw_Change / 1) - (size / 20), z: size / 2 - (size / 3) - (size / 10) },
    //39
        { x: -size / 4 + ((size / 10) / 2), y: (-size / 10) + (size / 2) - (size / 10) + (bottom_Jaw_Change / 2), z: size / 2 - (size / 6) },
    //40
        { x: size / 4, y: (-size / 10) + (size / 2) + (bottom_Jaw_Change / 2), z: size / 2 - (size / 6) },
    //41
        { x: size / 4 + (size / 10), y: (-size / 10) + (size / 2) + (bottom_Jaw_Change / 2), z: size / 2 - (size / 6) },
    //42
        { x: size / 4, y: (size / 4) - (size / 8) + (bottom_Jaw_Change / 1), z: size / 2 - (size / 3) },
    //43
        { x: size / 4 + (size / 10), y: (size / 4) + (bottom_Jaw_Change / 1) - (size / 8), z: size / 2 - (size / 3) },
    //44
        { x: size / 4, y: (size / 4) - (size / 20) + (bottom_Jaw_Change / 1), z: size / 2 - (size / 3) - (size / 10) },
    //45
        { x: size / 4 + (size / 10), y: (size / 4) + (bottom_Jaw_Change / 1) - (size / 20), z: size / 2 - (size / 3) - (size / 10) },
    //46
        { x: size / 4 + ((size / 10) / 2), y: (-size / 10) + (size / 2) - (size / 10) + (bottom_Jaw_Change / 2), z: size / 2 - (size / 6) },
    //47
        //tail
        { x: ((Math.cos((game.runtime()) / 750)) * 5), y: -size/3, z: size*2.5 },
    //48
        //left leg
        { x:0, y: (size / 2), z: size },
    //49
        { x: size/4, y: (size / 2)+(size/4), z: size*1.3-(size/8) },
    //50
        { x: (size / 4)-(size/5), y: (size / 2) + (size / 4), z: size*1.3 - (size / 8) },
    //51
        { x: (size / 4)-size/10, y: (size / 2) + (size / 4), z: size*1.3 - (size / 8) + (size/5) },
    //52
        { x: size / 5, y: (size / 2) + (size / 4)+(size/2), z: size - (size / 8) },
    //53
        { x: (size / 5) - (size / 8), y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 8) },
    //54
        { x: (size / 5) - size / 16, y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 8) + (size / 5) },
    //55
        { x:0, y: (-size / 10) + (size / 3), z: size - (size / 2) },
    //56
        { x:0, y: (-size / 10) + (size / 5), z: size + (size / 4) },
    //57
        { x: size / 5, y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 5) },
    //58
        { x: (size / 5) - (size / 8), y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 5) },
    //59
        { x:(size/5)- size/16, y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 8) },
    //60
        //right leg
        { x: 0, y: (size / 2), z: size },
    //61
        { x: -size / 4, y: (size / 2) + (size / 4), z: size * 1.3 - (size / 8) },
    //62
        { x: -(size / 4) + (size / 5), y: (size / 2) + (size / 4), z: size * 1.3 - (size / 8) },
    //63
        { x: -(size / 4) + size / 10, y: (size / 2) + (size / 4), z: size * 1.3 - (size / 8) + (size / 5) },
    //64
        { x: -size / 5, y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 8) },
    //65
        { x: -(size / 5) + (size / 8), y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 8) },
    //66
        { x: -(size / 5) + size / 16, y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 8) + (size / 5) },
    //67
        { x: 0, y: (-size / 10) + (size / 3), z: size - (size / 2) },
    //68
        { x: 0, y: (-size / 10) + (size / 5), z: size + (size / 4) },
    //69
        { x: -size / 5, y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 5) },
    //70
        { x: -(size / 5) + (size / 8), y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 5) },
    //71
        { x: -(size / 5) + size / 16, y: (size / 2) + (size / 4) + (size / 2), z: size - (size / 8) }
    ]
    let rotatedVertices = vertices.map(vertex => {
        let x = vertex.x ;
        let y = vertex.y;
        let z = (vertex.z) - zChange;

        // Rotate around the X-axis
        let cosX = Math.cos(angleX);
        let sinX = Math.sin(angleX);
        let rotatedY = y * cosX - z * sinX;
        let rotatedZ = y * sinX + z * cosX;

        // Rotate around the Y-axis
        let cosY = Math.cos(angleY);
        let sinY = Math.sin(angleY);
        let rotatedX = x * cosY + rotatedZ * sinY;
        let rotatedZ2 = -x * sinY + rotatedZ * cosY;

        // Rotate around the Z-axis
        let cosZ = Math.cos(angleZ);
        let sinZ = Math.sin(angleZ);
        let rotatedX2 = rotatedX * cosZ - rotatedY * sinZ;
        let rotatedY2 = rotatedX * sinZ + rotatedY * cosZ;

        // Project onto 2D
        let scaleFactor = 200 / (200 + rotatedZ2);
        let projectedX = rotatedX2 * scaleFactor;
        let projectedY = rotatedY2 * scaleFactor;

        // Translate to screen coordinates
        let screenX = centerX + projectedX;
        let screenY = centerY + projectedY;

        return { x: screenX, y: screenY, z: rotatedZ2 };
    });
triangles = [
    //head and neck
        { indices: [0, 1, 2], color: 12 },
    { indices: [3, 4, 5], color: 12 },
    { indices: [4, 5, 6], color: 7 },
    { indices: [3, 5, 6], color: 9 },
    { indices: [1, 2, 7], color: 7 },
    { indices: [0, 2, 7], color: 9 },
    { indices: [7, 1, 8], color: 9 },
    { indices: [7, 0, 8], color: 13 },
    { indices: [9, 10, 11], color: 1 },
    { indices: [12, 13, 14], color: 1 },
    { indices: [15, 16, 17], color: 15 },
    { indices: [18, 19, 20], color: 15 },
    // { indices: [8, 0, 21], color: 13 },
        //{ indices: [8, 1, 21], color: 9 },
        { indices: [6, 1, 21], color: 7 },
    { indices: [6, 0, 21], color: 9 },
    { indices: [22, 8, 0], color: 13 },
    { indices: [23, 8, 1], color: 9 },
    { indices: [23, 1, 21], color: 9 },
    { indices: [22, 0, 21], color: 13 },
    //{ indices: [22, 23, 8], color: 9 },
        //body
        //{ indices: [24, 25, 26], color: 9 },
        { indices: [23, 8, 26], color: 7 },
    { indices: [24, 8, 26], color: 7 },
    { indices: [22, 8, 25], color: 9 },
    { indices: [24, 8, 25], color: 13 },
    { indices: [21, 25, 22], color: 13 },
    { indices: [21, 26, 23], color: 9 },
    { indices: [27, 26, 24], color: 7 },
    { indices: [27, 25, 24], color: 9 },
    { indices: [28, 25, 27], color: 13},
    { indices: [29, 26, 27], color: 9 },
    { indices: [29, 30, 26], color: 7 },
    { indices: [21, 30, 26], color: 9 },
    { indices: [28, 31, 25], color: 13 },
    { indices: [21, 31, 25], color: 9 },
    { indices: [21, 31, 30], color: 7 },
    { indices: [32, 30, 29], color: 7 },
    { indices: [33, 31, 28], color: 9 },
    //arms
        { indices: [34, 35, 31], color: 9 },
    { indices: [36, 37, 34], color: 9 },
    { indices: [34, 37, 35], color: 7 },
    { indices: [36, 37, 38], color: 1 },
    { indices: [36, 37, 39], color: 1 },
    { indices: [31, 34, 40], color: 9 },
    { indices: [31, 35, 40], color: 7 },
    { indices: [37, 35, 40], color: 7 },
    { indices: [36, 34, 40], color: 9 },
    //
        { indices: [41, 42, 30], color: 9 },
    { indices: [43, 44, 41], color: 9 },
    { indices: [41, 44, 42], color: 7 },
    { indices: [43, 44, 45], color: 1 },
    { indices: [43, 44, 46], color: 1 },
    { indices: [30, 41, 47], color: 9 },
    { indices: [30, 42, 47], color: 7 },
    { indices: [44, 42, 47], color: 7 },
    { indices: [43, 41, 47], color: 9 },
    //tail
        { indices: [48, 29, 27], color: 7 },
    { indices: [48, 28, 27], color: 9 },
    { indices: [48, 28, 29], color: 13 },
    //left leg
        { indices: [50, 52, 51], color: 9},
    { indices: [30, 50, 29], color: 7 },
    { indices: [57, 52, 29], color: 13 },
    { indices: [50, 52, 29], color: 9 },
    { indices: [51, 52, 57], color: 9 },
    { indices: [53, 54, 55], color: 13 },
    { indices: [50, 51, 56], color: 7 },
    { indices: [50, 30, 56], color: 9 },
    { indices: [51, 56, 57], color: 13 },
    { indices: [50, 53, 54], color: 13 },
    { indices: [50, 51, 54], color: 9 },
    { indices: [52, 54, 55], color: 13 },
    { indices: [52, 54, 51], color: 9 },
    { indices: [52, 50, 55], color: 9 },
    { indices: [53, 55, 50], color: 13 },
    { indices: [58, 53, 60], color: 1 },
    { indices: [59, 54, 60], color: 1 },
    //right leg
        { indices: [62, 64, 63], color: 9 },
    { indices: [31, 62, 28], color: 9 },
    { indices: [69, 64, 28], color: 13 },
    { indices: [62, 64, 28], color: 9 },
    { indices: [63, 64, 69], color: 9 },
    { indices: [65, 66, 67], color: 13 },
    { indices: [62, 63, 68], color: 9 },
    { indices: [62, 31, 68], color: 7 },
    { indices: [63, 68, 69], color: 13 },
    { indices: [62, 65, 66], color: 9 },
    { indices: [62, 63, 66], color: 13 },
    { indices: [64, 66, 67], color: 13 },
    { indices: [64, 66, 63], color: 9 },
    { indices: [64, 62, 67], color: 9 },
    { indices: [65, 67, 62], color: 13 },
    { indices: [70, 65, 72], color: 1 },
    { indices: [71, 66, 72], color: 1 }
    ]
    triangles.sort((b, a) => {
        let zA = (rotatedVertices[a.indices[0]].z + rotatedVertices[a.indices[1]].z + rotatedVertices[a.indices[2]].z) / 3;
        let zB = (rotatedVertices[b.indices[0]].z + rotatedVertices[b.indices[1]].z + rotatedVertices[b.indices[2]].z) / 3;
        return zA - zB;
    });
scene.backgroundImage().fill(14)
    lengthT = triangles.length
    let numberAsString = lengthT.toString()
stats.setStat(numberAsString)
    let currentTime = control.millis();
deltaTime = currentTime - lastTime
    lastTime = currentTime
    fps = Math.floor(1000 / game.currentScene().eventContext.deltaTimeMillis)
    stats.setStat("triangles: " + numberAsString + " screen fps: " + fps.toString())
    // Draw the sorted triangles
    for (let i = 0; i <= triangles.length - 1; i++) {
        triangle = triangles[i]
        let indices = triangle.indices;
let color = triangle.color;
scene.backgroundImage().fillTriangle(rotatedVertices[indices[0]].x, rotatedVertices[indices[0]].y, rotatedVertices[indices[1]].x, rotatedVertices[indices[1]].y, rotatedVertices[indices[2]].x, rotatedVertices[indices[2]].y, color);
    }
}
let rotate = false
let triangle = 0
let lastTime = 0
let deltaTime = 0
let lengthT = 0
let triangles: number[] = []
let vertices: number[] = []
let zChange = 0
let fps = 0
let bottom_Jaw_Change = 0
let angleX = 0
let angleY = 0
let angleZ = 0
let size = 0
let centerX = 0
let centerY = 0
let vertices2: number[] = []
zChange = size * 10
let bg = scene.backgroundImage()
// Set up the initial cube
updateCube()
game.onUpdate(function () {
    if (controller.anyButton.isPressed()) {
        rotate = true
    } else {
        rotate = true
    }
    if (rotate) {
        if (controller.left.isPressed()) {
            angleY += 0.05
        }
        if (controller.right.isPressed()) {
            angleY += 0 - 0.05
        }
        if (controller.up.isPressed()) {
            angleX += 0 - 0.05
        }
        if (controller.down.isPressed()) {
            angleX += 0.05
        }
    } else {
        angleY += 0 - 0.05
        angleX += 0.05
        angleZ += 0.05
    }
    updateCube()
})
