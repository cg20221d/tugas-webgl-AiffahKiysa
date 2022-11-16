function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        // angka 0 depan
        -3, 1.0, 3,   1, 0, 0,    // 0
        -1.8, 1.0, 3,   0, 0, 1,    // 1
        -2.8, 0.8, 3,   1, 0, 0,    // 2
        -2.1, 0.8, 3,   0, 1, 0,    // 3
        -1.9, -0.4, 3,   1, 0, 0,    // 4
        -2.1, -0.2, 3,  1, 0, 0,    // 5
        -3, -0.4, 3,  0, 0, 0,    // 6
        -2.8, -0.2, 3,  0, 0, 1,    // 7

        // angka 0 samping
        -1.9, 1.0, 2.5,   0, 0, 1,    // 8
        -1.9, -0.4, 2.5,   0, 1, 0,    // 9
        -3, -0.4, 2.5,  0, 0, 0,    // 10
        -3, 1.0, 2.5,   1, 0, 0,    // 11

        // angka 2 depan
        -0.5, -0.4, 3,   1, 0, 0,    // 12
        0.3, -0.4, 3,   1, 0, 1,    // 13
        0.3, -0.2, 3,    0, 0, 1,    // 14
        -0.5, -0.2, 3,   1, 0, 0,    // 15
        -0.5, 0.2, 3,    0, 0, 0,    // 16
        -0.3, -0.2, 3,   1, 0, 0,    // 17
        -0.3, 0.2, 3,    1, 1, 0,    // 18
        0.3, 0.2, 3,    0, 1, 0,    // 19
        0.3, 0.4, 3,    1, 0, 0,    // 20
        -0.5, 0.4, 3,    0, 0, 0,    // 21
        0.1, 0.4, 3,    1, 0, 1,    // 22
        0.1, 0.8, 3,    1, 0, 0,    // 23
        0.3, 0.8, 3,    0, 0, 1,    // 24
        0.3, 1.0, 3,    1, 0, 0,    // 25
        -0.5, 1.0, 3,    1, 0, 0,    // 26
        -0.5, 0.8, 3,    0, 1, 0,    // 27

        // angka 2 samping
        0.3, -0.4, 2.5,   1, 0, 0,    // 28
        0.3, -0.2, 2.5,    0, 0, 1,    // 29

        -0.3, -0.2, 2.5,   0, 0, 0,    // 30
        -0.3, 0.2, 2.5,    1, 1, 0,    // 31

        0.3, 0.2, 2.5,    1, 0, 0,    // 32
        0.3, 1.0, 2.5,    1, 0, 0,    // 33

        -0.5, -0.4, 2.5,   0, 0, 0,    // 34
        -0.5, 0.4, 2.5,   1, 0, 0,    // 35

        0.1, 0.4, 2.5,    1, 1, 0,    // 36
        0.1, 0.8, 2.5,    0, 0, 0,    // 37

        -0.5, 0.8, 2.5,    1, 0, 0,    // 38
        -0.5, 1.0, 2.5,    1, 0, 1,    // 39

        // huruf F
        0.9, 1.0, 3.0,    1, 0, 0,    // 40
        1.2, 1.0, 3.0,    0, 1, 0,    // 41
        1.2, -0.4, 3.0,   1, 0, 0,    // 42
        0.9, -0.4, 3.0,   0, 0, 0,    // 43
        1.9, 1.0, 3.0,      1, 0, 1,    // 44
        1.9, 0.7, 3.0,      1, 0, 0,    // 45
        1.2, 0.7, 3.0,      1, 0, 0,    // 46
        1.2, 0.47, 3.0,      1, 0, 0,    // 47
        1.8, 0.47, 3.0,      1, 1, 0,    // 48
        1.8, 0.27, 3.0,      1, 0, 0,    // 49
        1.2, 0.27, 3.0,      1, 0, 1,    // 50

        // huruf F samping
        0.9, 1.0, 2.5,    1, 0, 0,    // 51
        0.9, -0.4, 2.5,   0, 1, 0,    // 52

        1.2, -0.4, 2.5,   1, 0, 0,    // 53
        1.2, 1.0, 2.5,   1, 0, 1,    // 54

        1.9, 1.0, 2.5,      1, 0, 0,    // 55
        1.9, 0.7, 2.5,      1, 0, 0,    // 56

        1.8, 0.47, 2.5,      1, 0, 0,    // 57
        1.8, 0.27, 2.5,      1, 1, 0,    // 58

        1.2, 0.7, 2.5,      1, 0, 0,    // 59
        1.2, 0.47, 2.5,      1, 0, 1,    // 60
        1.2, 0.27, 2.5,      1, 0, 0,    // 61
    ];


    // Vertex shader
    var vertexShaderCode = `
    attribute vec3 aPosition;
    attribute vec3 aColor;
    varying vec3 fragColor;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    void main(){
        fragColor = aColor;
        gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
    }
    `;

    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject); 

    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 fragColor;
    void main() {
        gl_FragColor = vec4(fragColor, 1.0);
    }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject); 

    var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // mengajari GPU bagaimana cara mengoleksi nilai posisi dari ARRAY_BUFFER
    // untuk setiap vertex yang sedang diproses
    
    // Variabel lokal
    var theta = 0.0;
    var thetaPoints = 0.0;
    var horizontal = 0.0202;
    var horizontalPoints = 0.0;
    var scale = 0.05;
    var scalePoints = 0.5;

    // Variabel pointer ke GLSL
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // View
    var cameraX = 0.0;
    var cameraZ = 7.5;
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
        view,
        [cameraX, 0.0, cameraZ],    // the location of the eye or the camera
        [cameraX, 0.0, -10],        // the point where the camera look at
        [0.0, 1.0, 0.0]
    );
    // Projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(perspective, glMatrix.glMatrix.toRadian(75), 1.0, 0.5, 50.0);

    // grafik ai nteraktif
    var freeze = false;
    function onMouseClick(event){
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick, false);

    function onKeyUp(event){
        if (event.keyCode == 32) freeze = false;
        if (event.keyCode == 39) theta = 0.0;
        if (event.keyCode == 37) theta = 0.0;
    }
    document.addEventListener("keyup", onKeyUp, false);

    function onKeyDown(event){
        if (event.keyCode == 32) freeze = true;
        if (event.keyCode == 39) theta = 0.05;
        if (event.keyCode == 37) theta = -0.05;
    }
    document.addEventListener("keydown", onKeyDown, false);

    function render(){
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.75, 0.75, 0.8, 1.0); // Merah, Hijau, Biru, Transparansi
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        funNumber0()
        funNumber2()
        funHurufF()

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    function funNumber0(){
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indices = [
            0, 1, 2,    1, 2, 3,
            1, 3, 4,    3, 4, 5,
            4, 5, 6,    5, 6, 7,
            0, 2, 6,    2, 6, 7,
    
            1, 8, 4,    8, 4, 9,
            4, 6, 10,   4, 9, 10,
    
            0, 6, 11,   6, 10, 11,
            0, 1, 8,    0, 8, 11,
        ];

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aPosition);
        gl.enableVertexAttribArray(aColor);

        horizontalPoints += horizontal;
        if (horizontalPoints >= 0.5 || horizontalPoints <= 0.0) {
            horizontal *= -1;
        }
        var model = glMatrix.mat4.create(); // Membuat matriks identitas
        glMatrix.mat4.translate(
            model, model, [horizontalPoints, 0.0, 0.0]
        );

        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    
    }

    function funNumber2(){
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indices = [
            //depan
            12, 13, 14,     12, 14, 15,
            15, 16, 17,     16, 17, 18,
            16, 19, 20,     16, 20, 21,
            20, 22, 23,     20, 23, 24,
            24, 25, 26,     24, 26, 27,

            //samping
            13, 14, 28,     14, 28, 29,
            17, 18, 30,     18, 30, 31,
            19, 25, 32,     25, 32, 33,
            12, 21, 34,     21, 34, 35,
            22, 23, 36,     23, 36, 37,
            26, 27, 38,     26, 38, 39,

            14, 17, 29,     17, 29, 30,
            12, 13, 34,     13, 28, 34,

            18, 19, 31,     19, 31, 32,
            21, 22, 35,     22, 35, 36,
            
            23, 27, 37,     27, 37, 38,
            25, 26, 33,     26, 33, 39,

            // belakang
            28, 29, 30,     28, 30, 34,
            30, 31, 34,     31, 34, 35,
            31, 32, 35,     32, 35, 36,
            32, 33, 36,     33, 36, 37,
            33, 37, 38,     33, 38, 39
        ]

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aPosition);
        gl.enableVertexAttribArray(aColor);

        scalePoints += scale;
        if (scalePoints >= 1.5 || scalePoints <= 0.05) {
            scale *= -1;
        }
    
        var model = glMatrix.mat4.create();
        glMatrix.mat4.scale(
            model, model, [scalePoints, scalePoints, scalePoints]
        );
    
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    function funHurufF(){
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indices = [
            //depan
            40, 41, 42,     40, 42, 43,
            41, 44, 45,     41, 45, 46,
            47, 48, 49,     47, 49, 50,

            // samping
            40, 51, 52,     40, 43, 52,
            42, 41, 53,     41, 53, 54,

            44, 45, 55,     45, 55, 56,
            48, 49, 57,     49, 57, 58,

            46, 47, 60,     46, 59, 60,

            40, 44, 51,     44, 51, 55,
            45, 46, 56,     46, 56, 59,

            47, 48, 57,     47, 57, 60,
            49, 50, 58,     50, 58, 61,
            42, 43, 52,     42, 52, 53,

            51, 52, 53,     51, 53, 54,
            54, 55, 56,     54, 56, 59,
            57, 58, 60,     58, 60, 61,
        ]

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aPosition);
        gl.enableVertexAttribArray(aColor);

        thetaPoints += theta
        var model = glMatrix.mat4.create(); 
        glMatrix.mat4.rotateY(
            model, model, thetaPoints
        );
        
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
}