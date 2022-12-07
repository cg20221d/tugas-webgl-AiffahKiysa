function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        -2.5, -0.4, 1,   1, 0, 0,    0, 0, -1,    // 0
        -1.7, -0.4, 1,   1, 0, 0,    0, 0, -1,    // 1
        -1.7, -0.2, 1,  1, 0, 0,     0, 0, -1,    // 2
        -2.5, -0.2, 1,   1, 0, 0,    0, 0, -1,    // 3
        -2.5, 0.2, 1,   1, 0, 0,     0, 0, 1,   // 4
        -2.3, -0.2, 1,   1, 0, 0,    0, 0, 1,    // 5
        -2.3, 0.2, 1,    1, 0, 0,    0, 0, 1,   // 6
        -1.7, 0.2, 1,    1, 0, 0,    0, 0, 1,   // 7
        -1.7, 0.4, 1,    1, 0, 0,    -1, 0, 0,    // 8
        -2.5, 0.4, 1,    1, 0, 0,    -1, 0, 0,    // 9
        -1.9, 0.4, 1,    1, 0, 0,    -1, 0, 0,    // 10
        -1.9, 0.8, 1,    1, 0, 0,    -1, 0, 0,    // 11
        -1.7, 0.8, 1,    1, 0, 0,    1, 0, 0,     // 12
        -1.7, 1, 1,     1, 0, 0,     1, 0, 0,   // 13
        -2.5, 1, 1,     1, 0, 0,     1, 0, 0,    // 14
        -2.5, 0.8, 1,   1, 0, 0,     1, 0, 0,    // 15
        
        -1.7, -0.4, 0.5,     1, 0, 0, 0, -1, 0,   // 16
        -1.7, -0.2, 0.5,     1, 0, 0, 0, -1, 0,    // 17
        
        -2.3, -0.2, 0.5,     1, 0, 0, 0, -1, 0,   // 18
        -2.3, 0.2, 0.5,      1, 0, 0, 0, -1, 0,  // 19
        
        -1.7, 0.2, 0.5,     1, 0, 0, 0, 1, 0,     // 20
        -1.7, 1, 0.5, 1,     1, 0, 0, 1, 0,   // 21
        
        -2.5, -0.4, 0.5,     1, 0, 0, 0, 1, 0,    // 22
        -2.5, 0.4, 0.5,     1, 0, 0, 0, 1, 0,    // 23
        
        -1.9, 0.4, 0.5,     1, 0, 0, 0, 1, 0,   // 24
        -1.9, 0.8, 0.5,     1, 0, 0, 0, 1, 0,   // 25
        
        -2.5, 0.8, 0.5,     1, 0, 0, 0, 1, 0,    // 26
        -2.5, 1, 0.5,       1, 0, 0, 0, 1, 0,    // 27


        // Face A       // Red
        -1, -1, -1,     1, 0, 0,    0, 0, -1,    // Index:  28    
         1, -1, -1,     1, 0, 0,    0, 0, -1,    // Index:  29
         1,  1, -1,     1, 0, 0,    0, 0, -1,    // Index:  30
        -1,  1, -1,     1, 0, 0,    0, 0, -1,    // Index:  31
        // Face B       // Yellow
        -1, -1,  1,     1, 1, 0,    0, 0, 1,    // Index:  32
         1, -1,  1,     1, 1, 0,    0, 0, 1,    // Index:  33
         1,  1,  1,     1, 1, 0,    0, 0, 1,    // Index:  34
        -1,  1,  1,     1, 1, 0,    0, 0, 1,    // Index:  35
        // Face C       // Green
        -1, -1, -1,     0, 1, 0,    -1, 0, 0,    // Index:  36
        -1,  1, -1,     0, 1, 0,    -1, 0, 0,   // Index:  37
        -1,  1,  1,     0, 1, 0,    -1, 0, 0,    // Index: 38
        -1, -1,  1,     0, 1, 0,    -1, 0, 0,    // Index: 39
        // Face D       // Blue
         1, -1, -1,     0, 0, 1,    1, 0, 0,    // Index: 40
         1,  1, -1,     0, 0, 1,    1, 0, 0,    // Index: 41
         1,  1,  1,     0, 0, 1,    1, 0, 0,    // Index: 42
         1, -1,  1,     0, 0, 1,    1, 0, 0,    // Index: 43
        // Face E       // Orange
        -1, -1, -1,     1, 0.5, 0,  0, -1, 0,  // Index: 44
        -1, -1,  1,     1, 0.5, 0,  0, -1, 0,  // Index: 45
         1, -1,  1,     1, 0.5, 0,  0, -1, 0,  // Index: 46
         1, -1, -1,     1, 0.5, 0,  0, -1, 0,  // Index: 47
        // Face F       // White
        -1,  1, -1,     1, 1, 1,    0, 1, 0,    // Index: 48
        -1,  1,  1,     1, 1, 1,    0, 1, 0,    // Index: 49
         1,  1,  1,     1, 1, 1,    0, 1, 0,    // Index: 50
         1,  1, -1,     1, 1, 1,    0, 1, 0,     // Index: 51

         1.1 , 1 , 1 , 1 , 0 , 0 , 0 , 0 , -1 ,  // 62 52
         2.2 , 1 , 1 , 1 , 0 , 0 , 0 , 0 , -1 ,  // 63 53
         2.2 , 0.75 , 1 , 1 , 0 , 0 , 0 , 0 , -1 ,  // 64 54
         1.1 , 0.75 , 1 , 1 , 0 , 0 , 0 , 0 , -1 ,  // 65 55
         1.5 , 0.75 , 1 , 1 , 0 , 0 , 0 , 0 , 1 ,  // 66 56
         1.8 , 0.75 , 1 , 1 , 0 , 0 , 0 , 0 , 1 ,  // 67 57
         1.8 , -0.15 , 1 , 1 , 0 , 0 , 0 , 0 , 1 ,  // 68 58
         1.5 , -0.15 , 1 , 1 , 0 , 0 , 0 , 0 , 1 ,  // 69 59
         1.1 , -0.15 , 1 , 1 , 0 , 0 , -1 , 0 , 0 ,  // 70 60
         1.1 , -0.4 , 1 , 1 , 0 , 0 , -1 , 0 , 0 ,  // 71 61
         2.2 , -0.4 , 1 , 1 , 0 , 0 , -1 , 0 , 0 ,  // 72 62
         2.2 , -0.15 , 1 , 1 , 0 , 0 , 1 , 0 , 0 ,  // 73 63
                           
         1.1 , 1 , 0.5 , 1 , 0 , 0 , 1 , 0 , 0 ,  // 74 64
         1.1 , 0.75 , 0.5 , 1 , 0 , 0 , 1 , 0 , 0 ,  // 75 65
         2.2 , 1 , 0.5 , 1 , 0 , 0 , 1 , 0 , 0 ,  // 76 66
         2.2 , 0.75 , 0.5 , 1 , 0 , 0 , 0 , -1 , 0 ,  // 77 67
         1.5 , 0.75 , 0.5 , 1 , 0 , 0 , 0 , -1 , 0 ,  // 78 68
         1.5 , -0.15 , 0.5 , 1 , 0 , 0 , 0 , -1 , 0 ,  // 79 69
         1.8 , 0.75 , 0.5 , 1 , 0 , 0 , 0 , -1 , 0 ,  // 80 70
         1.8 , -0.15 , 0.5 , 1 , 0 , 0 , 0 , 1 , 0 ,  // 81 71
         1.1 , -0.15 , 0.5 , 1 , 0 , 0 , 0 , 1 , 0 ,  // 82 72
         1.1 , -0.4 , 0.5 , 1 , 0 , 0 , 0 , 1 , 0 ,  // 83 73
         2.2 , -0.15 , 0.5 , 1 , 0 , 0 , 0 , 1 , 0 ,  // 84 74
         2.2 , -0.4 , 0.5 , 1 , 0 , 0 , 0 , 1 , 0 ,  // 85 75
         
    ];

    // Variabel lokal
    var theta = 0.0;
    var delta = 0.0;
    var depth = 0.0;
    var thetaPoints = 0.0;
    var deltaPoints = 0.0;
    var horizontal = 0.0;
    var horizontalPoints = 0.0;
    var depthPoints = 0.0;
    var scale = 0.05;
    var scalePoints = 0.5;

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
        if (event.keyCode == 38) delta = 0.0;
        if (event.keyCode == 40) delta = 0.0;
        if (event.keyCode == 73) depth = 0.0;
        if (event.keyCode == 75) depth = 0.0;
        if (event.keyCode == 74) horizontal = 0.0;
        if (event.keyCode == 76) horizontal = 0.0;
    }
    document.addEventListener("keyup", onKeyUp, false);

    function onKeyDown(event){
        if (event.keyCode == 32) freeze = true;
        if (event.keyCode == 39) theta = 0.05;
        if (event.keyCode == 37) theta = -0.05;
        if (event.keyCode == 38) delta = 0.05;
        if (event.keyCode == 40) delta = -0.05;
        if (event.keyCode == 73) depth = 0.05;
        if (event.keyCode == 75) depth = -0.05;
        if (event.keyCode == 74) horizontal = 0.05;
        if (event.keyCode == 76) horizontal -= 0.05;
    }
    document.addEventListener("keydown", onKeyDown, false);

    function render(){
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.75, 0.75, 0.8, 1.0); // Merah, Hijau, Biru, Transparansi
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // funNumber0()
        funNumber2()
        funkubus()
        funHurufI()

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    function funkubus(){
        // Vertex shader
        var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        varying vec3 fragColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        void main(){
            fragColor = aColor;
            vNormal = aNormal;
            gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
            vPosition = (uModel * vec4(aPosition, 1.0)).xyz;
        }
        `;

        var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShaderObject, vertexShaderCode);
        gl.compileShader(vertexShaderObject); 

        // Fragment shader
        var fragmentShaderCode = `
        precision mediump float;
        varying vec3 fragColor;
        uniform vec3 uLightConstant;      // merepresentasikan warna sumber cahaya
        uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar
        varying vec3 vNormal;
        varying vec3 vPosition;             // titik fragmen
        uniform vec3 uLightPosition;        // titik lokasi sumber cahaya
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightRay = vPosition - uLightPosition;
            // vec3 normalizedLight = normalize(-uLightDirection);  // diffuse directional light
            vec3 normalizedLight = normalize(-lightRay);            // diffuse point light
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 phong = ambient + diffuse;
            gl_FragColor = vec4(phong * fragColor, 1.0);
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

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indices = [
            28, 29, 30,  28, 30, 31,
            32, 33, 34,  32, 34, 35,
            36, 37, 38,  36, 38, 39,
            40, 41, 42,  40, 42, 43,
            44, 45, 46,  44, 46, 47,
            48, 49, 50,  48, 50, 51,
        ];

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        // mengajari GPU bagaimana cara mengoleksi nilai posisi dari ARRAY_BUFFER
        // untuk setiap vertex yang sedang diproses
        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aPosition);
        gl.enableVertexAttribArray(aColor);

        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);

        // untuk pencahayaan dan pembayangan
        var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
        gl.uniform3fv(uLightConstant, [1.0, 0.5, 1.0]);     // warna sumber cahaya : orange
        gl.uniform1f(uAmbientIntensity, 0.502);               // intensitas cahaya : 40%
        var uLightPosition= gl.getUniformLocation(shaderProgram, "uLightPosition");
        gl.uniform3fv(uLightPosition, [0.0, 0.0, 3.0]);
        var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");


        var model = glMatrix.mat4.create(); // Membuat matriks identitas
        depthPoints += depth
        horizontalPoints += horizontal
        glMatrix.mat4.translate(
            model, model, [horizontalPoints, 0.0, depthPoints]
        );


        gl.uniformMatrix4fv(uModel, false, model);
        // gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    
    }

    function funNumber2(){
        // Vertex shader
        var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        varying vec3 fragColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        void main(){
            fragColor = aColor;
            vNormal = aNormal;
            gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
            vPosition = (uModel * vec4(aPosition, 1.0)).xyz;
        }
        `;

        var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShaderObject, vertexShaderCode);
        gl.compileShader(vertexShaderObject); 

        // Fragment shader
        var fragmentShaderCode = `
        precision mediump float;
        varying vec3 fragColor;
        uniform vec3 uLightConstant;      // merepresentasikan warna sumber cahaya
        uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar
        varying vec3 vNormal;
        varying vec3 vPosition;             // titik fragmen
        uniform vec3 uLightPosition;        // titik lokasi sumber cahaya
        uniform vec3 uViewerPosition;       // titik lokasi mata atau kamera pengamat
        // uniform vec3 uLightDirection;       // vektor arah datang sumber cahaya
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightRay = vPosition - uLightPosition;
            // vec3 normalizedLight = normalize(-uLightDirection);  // diffuse directional light
            vec3 normalizedLight = normalize(-lightRay);            // diffuse point light
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(lightRay, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0.0, 0.0, 0.0);
            if (cosPhi > 0.0) {
                float shininessConstant = 5.0;    // batas minimum spesifikasi spekular untuk materi plastik
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * fragColor, 1.0);
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

        // Variabel pointer ke GLSL
        var uModel = gl.getUniformLocation(shaderProgram, "uModel");
        // View
        // var cameraX = 0.0;
        // var cameraZ = 5.0;
        var camera = [0.0, 0.0, 5.0];
        var uView = gl.getUniformLocation(shaderProgram, "uView");
        var view = glMatrix.mat4.create();
        glMatrix.mat4.lookAt(
            view,
            camera,                    // the location of the eye or the camera
            [camera[0], 0.0, -10],        // the point where the camera look at
            [0.0, 1.0, 0.0]
        );

        // Projection
        var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
        var perspective = glMatrix.mat4.create();
        glMatrix.mat4.perspective(perspective, glMatrix.glMatrix.toRadian(75), 1.0, 0.5, 50.0);

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indices = [
            //depan
            0, 1, 2,     0, 2, 3,
            3, 4, 5,     4, 5, 6,
            4, 7, 8,     4, 8, 9,
            8, 10, 11,     8, 11, 12,
            12, 13, 14,     12, 14, 15,

            //samping
            1, 2, 16,     2, 16, 17,
            5, 6, 18,     6, 18, 19,
            7, 13, 20,     13, 20, 21,
            0, 9, 22,     9, 22, 23,
            10, 11, 24,     11, 24, 25,
            14, 15, 26,     14, 26, 27,

            2, 5, 17,     5, 17, 18,
            0, 1, 22,     1, 16, 22,

            6, 7, 19,     7, 19, 20,
            9, 10, 23,     10, 23, 24,
            
            11, 15, 25,     15, 25, 26,
            13, 14, 21,     14, 21, 27,

            // belakang
            16, 17, 18,     16, 18, 22,
            18, 19, 22,     19, 22, 23,
            19, 20, 23,     20, 23, 24,
            20, 21, 24,     21, 24, 25,
            21, 25, 26,     21, 26, 27
        ]

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        // mengajari GPU bagaimana cara mengoleksi nilai posisi dari ARRAY_BUFFER
        // untuk setiap vertex yang sedang diproses
        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aPosition);
        gl.enableVertexAttribArray(aColor);

        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);

        // untuk pencahayaan dan pembayangan
        var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
        gl.uniform3fv(uLightConstant, [1.0, 0.5, 1.0]);     // warna sumber cahaya : orange
        gl.uniform1f(uAmbientIntensity, 0.502);               // intensitas cahaya : 0.502
        var uLightPosition= gl.getUniformLocation(shaderProgram, "uLightPosition");
        gl.uniform3fv(uLightPosition, [2.0, 0.0, 0.0]);
        var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");
        gl.uniform3fv(uViewerPosition, camera);
        
        var model = glMatrix.mat4.create(); // Membuat matriks identitas

        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    function funHurufI(){
        // Vertex shader
        var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        varying vec3 fragColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        void main(){
            fragColor = aColor;
            vNormal = aNormal;
            gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
            vPosition = (uModel * vec4(aPosition, 1.0)).xyz;
        }
        `;

        var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShaderObject, vertexShaderCode);
        gl.compileShader(vertexShaderObject); 

        // Fragment shader
        var fragmentShaderCode = `
        precision mediump float;
        varying vec3 fragColor;
        uniform vec3 uLightConstant;      // merepresentasikan warna sumber cahaya
        uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar
        varying vec3 vNormal;
        varying vec3 vPosition;             // titik fragmen
        uniform vec3 uLightPosition;        // titik lokasi sumber cahaya
        uniform vec3 uViewerPosition;       // titik lokasi mata atau kamera pengamat
        // uniform vec3 uLightDirection;       // vektor arah datang sumber cahaya
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightRay = vPosition - uLightPosition;
            // vec3 normalizedLight = normalize(-uLightDirection);  // diffuse directional light
            vec3 normalizedLight = normalize(-lightRay);            // diffuse point light
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(lightRay, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0.0, 0.0, 0.0);
            if (cosPhi > 0.0) {
                float shininessConstant = 100.0;    // batas minimum spesifikasi spekular untuk materi logam
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * fragColor, 1.0);
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

        // Variabel pointer ke GLSL
        var uModel = gl.getUniformLocation(shaderProgram, "uModel");
        // View
        // var cameraX = 0.0;
        // var cameraZ = 5.0;
        var camera = [0.0, 0.0, 5.0];
        var uView = gl.getUniformLocation(shaderProgram, "uView");
        var view = glMatrix.mat4.create();
        glMatrix.mat4.lookAt(
            view,
            camera,                    // the location of the eye or the camera
            [camera[0], 0.0, -10],        // the point where the camera look at
            [0.0, 1.0, 0.0]
        );

        // Projection
        var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
        var perspective = glMatrix.mat4.create();
        glMatrix.mat4.perspective(perspective, glMatrix.glMatrix.toRadian(75), 1.0, 0.5, 50.0);

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indices = [
            //depan
            52, 53, 54,     52, 54, 55,
            56, 57, 58,     56, 58, 59,
            60, 61, 62,     60, 62, 63,

            // samping
            52, 55, 64,     55, 64, 65,
            53, 54, 56,     54, 66, 67,
            56, 59, 68,     59, 68, 69,
            57, 58, 70,     58, 70, 71,
            60, 61, 72,     61, 72, 73,
            62, 63, 74,     62, 74, 75,

            52, 53, 64,     53, 64, 66,
            54, 55, 65,     54, 65, 67,
            60, 63, 72,     63, 72, 74,
            61, 62, 73,     62, 73, 75,

            64, 65, 66,     65, 66, 67,
            68, 69, 70,     69, 70, 71,
            72, 73, 74,     73, 74, 75
        ]

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        // mengajari GPU bagaimana cara mengoleksi nilai posisi dari ARRAY_BUFFER
        // untuk setiap vertex yang sedang diproses
        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aPosition);
        gl.enableVertexAttribArray(aColor);

        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);

        // untuk pencahayaan dan pembayangan
        var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
        gl.uniform3fv(uLightConstant, [1.0, 0.5, 1.0]);     // warna sumber cahaya : orange
        gl.uniform1f(uAmbientIntensity, 0.502);               // intensitas cahaya : 40%
        var uLightPosition= gl.getUniformLocation(shaderProgram, "uLightPosition");
        gl.uniform3fv(uLightPosition, [2.0, 0.0, 0.0]);
        var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");
        gl.uniform3fv(uViewerPosition, camera);
    
        deltaPoints += delta
        var model = glMatrix.mat4.create(); 
        glMatrix.mat4.rotateX(
            model, model, deltaPoints
        );
        
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
}