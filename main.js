function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        // angka 0
        -0.8, 0.6,
        -0.7, 0.7,
        -0.4, 0.7,
        -0.3, 0.6,
        -0.3, 0.2,
        -0.4, 0.1,
        -0.7, 0.1,
        -0.8, 0.2,

        -0.7, 0.6,
        -0.4, 0.6,
        -0.4, 0.2,
        -0.7, 0.2,
        
        // angka 2
        0.0, 0.22,
        0.0, 0.1,
        0.5, 0.1,
        0.5, 0.2,
        0.15, 0.2,
        0.5, 0.4,
        0.5, 0.6,
        0.4, 0.7,
        0.1, 0.7,
        0.0, 0.6,
        0.0, 0.45,
        0.12, 0.45,
        0.12, 0.6,
        0.4, 0.6,
        0.4, 0.47,


        1.0, 1.0, 0.0,
        0.7, 0.0, 1.0,
        0.1, 1.0, 0.6,

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Vertex shader
    var vertexShaderCode = `
    attribute vec2 aPosition;
    attribute vec3 aColor;
    varying vec3 fragColor;
    void main(){
        fragColor = aColor;
        gl_Position = vec4(aPosition.xy, 0.0, 1.0);
        gl_PointSize = 10.0;
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

    var shaderProgram = gl.createProgram(); 
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    gl.enableVertexAttribArray(aColor);

    gl.clearColor(0.2, 0.2, 0.2, 1.0); // Merah, Hijau, Biru, Transparansi
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.LINE_LOOP, 0, 8);
    gl.drawArrays(gl.LINE_LOOP, 8, 4);

    gl.drawArrays(gl.LINE_LOOP, 12, 15);

}