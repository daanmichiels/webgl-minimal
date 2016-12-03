
function loadShader(gl, type, name, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) { // done?
			if(xhr.status === 200) { // success?
				var shader = gl.createShader(type);
				gl.shaderSource(shader, xhr.responseText);
				gl.compileShader(shader);
				var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
				if(success) {
					callback(shader);
				}
				else {
					console.log('Error: ' + gl.getShaderInfoLog(shader));
					callback(null);
				}
			}
			else {
				console.log('Error: ' + xhr.status);
				callback(null);
			}
		}
	}
	xhr.open('GET', 'shaders/' + name);
	xhr.send(null);
}

function createProgram(gl, vertexShader, fragmentShader) {
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	var success = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (success) {
		return program;
	}
	console.log(gl.getProgramInfoLog(program));
	gl.deleteProgram(program);
}

function resize(gl) {
	var w = gl.canvas.clientWidth;
	var h = gl.canvas.clientHeight;
	if(gl.canvas.width != w || gl.canvas.height != h) {
		gl.canvas.width = w;
		gl.canvas.height = h;
		gl.viewport(0, 0, w, h);
	}
}
