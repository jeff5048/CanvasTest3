	function ptest2() {
		var p2 = document.getElementById("ptest");
		p2.innerHTML = "P Test Success!";
	}
    
	/*
	var color=getRandom(0, 1);
	var dcolor=getRandom(0.001, 0.001);
	var maxcount = 100;
	
	var color = document.getElementById('colorCtrl').value/360;
	var dcolor = document.getElementById('cDevCtrl').value/100;
	var maxcount = document.getElementById('countCtrl').value;
	*/
	
	var color=0;
	var dcolor=5.0/100.0;
	var maxcount = 50;
	
	function DrawCanvas() 
	{
		var example = document.getElementById('example');
		var context = example.getContext('2d');
		var centerX = example.width / 2;
		var centerY = example.height / 2;
		var esize = example.width/1;
		var minxy=50;
		context.clearRect(0, 0, example.width, example.height);
		//dcolor=dcolor*dcolor;
		//dcolor=dcolor*dcolor;
		//var p2 = document.getElementById("ptest");
		//p2.innerHTML = "color=" + color + ", dcolor=" + dcolor;

		for (i = 1; i <= maxcount; i++) {
			radiusY = getRandom(minxy, minxy+esize * (maxcount-i)/maxcount);
			//radiusY = getRandom(minxy, minxy+esize * (100-i)/100);
			radiusX = radiusY * getRandom(0.02, 1);
			//radiusY = radiusX*.021;
			centerX = getRandomFloor(0, example.width);
			centerY = getRandomFloor(0, example.height);
			rotatr = getRandom(0, 180);
			//colorF = getRandomRGBA();
			//colorL = getRandomRGBA();
			colorF = getRandomRGBA3(color, dcolor);
			colorL = getRandomRGBA3(color, dcolor);

			//var p2 = document.getElementById("ptest");
			//p2.innerHTML = color;

			//context.fillStyle = color;
			//context.fillRect(30, 30, 50, 50);
			//context.beginPath();
			//context.arc(centerX, centerY, radiusX, 0, 2 * Math.PI, false);
			//context.fillStyle = color;
			//context.fill();
			//context.lineWidth = 1;
			//context.strokeStyle = color;
			//context.stroke();


			theta = rotatr * Math.PI / 180;//Convert to radians

			//Draw ellipse of arbitrary orientation
			Ellipse(radiusX, radiusY, centerX, centerY, theta, context, colorL, colorF);
		}
	}
	
	function Ellipse(majaxis, minaxis, xctr, yctr, rotnrad, context, colorL, colorF) {
		//Source: http://www.uwgb.edu/dutchs/Geometry/HTMLCanvas/ObliqueEllipses5.HTM
		//Draw ellipse of arbitrary orientation
		var t = 0; //Parametric equation variable
		var x0 = xctr + majaxis * Math.cos(rotnrad);// initial x-val
		var y0 = yctr - majaxis * Math.sin(rotnrad);// initial y-val
		var x1 = x0;// final x-val
		var y1 = y0;// final y-val
		var xz = x0;
		var yz = y1;

		context.beginPath();
		//context.fillStyle = color;
		//context.fill();
		//context.stroke();
		for (t = 0; t <= 6.2832/1; t = t + 0.05) {
			x0 = x1;
			y0 = y1;
			x1 = xctr + majaxis * Math.cos(t) * Math.cos(rotnrad) - minaxis * Math.sin(t) * Math.sin(rotnrad);
			y1 = yctr - majaxis * Math.cos(t) * Math.sin(rotnrad) - minaxis * Math.sin(t) * Math.cos(rotnrad);
			//context.moveTo(x0, y0);
			//context.moveTo(x1, y1);
		//context.beginPath();
			//context.moveTo(x0, y0);
			context.lineTo(x1, y1);
			//context.lineTo(xctr, yctr);
		//context.closePath();

		}//close for loop
		context.closePath();
		context.lineWidth = Math.round(0.1*(majaxis+minaxis)/2);
		context.strokeStyle = colorL;
		context.stroke();
		context.fillStyle = colorF;
		context.fill();
	}



	function getRandomRGBA() {
		red = getRandomFloor(0, 256);
		green = getRandomFloor(0, 256);
		blue = getRandomFloor(0, 256);
		alpha = getRandomFloor(20, 100);

		return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
	}



	function getRandomFloor(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	function getRandomRGBA2_130817() {
		d = 0.3;
		c = getRandom(0, 1 - d);
		//c = 0;
		h = getRandom(c, c + d);
		s = 1;
		l = getRandom(0.2, 0.9);

		var rgb = hslToRgb(h, s, l);
		alpha = getRandomFloor(20, 100);
		//var p2 = document.getElementById("ptest");
		//p2.innerHTML = 'rgba(' + Math.floor(rgb.r) + ',' + Math.floor(rgb.g) + ',' + Math.floor(rgb.b) + ',' + alpha + ')';

		return 'rgba(' + Math.floor(rgb.r) + ',' + Math.floor(rgb.g) + ',' + Math.floor(rgb.b) + ',' + alpha + ')';
	}

	function getRandomRGBA2() {
		d = 0.1;
		c = getRandom(0, 1);
		//c = .9;
		//c = 0;
		h = getRandom(c, c + d)%1;
		s = 1;
		l = getRandom(0.2, 0.9);

		var rgb = hslToRgb(h, s, l);
		alpha = getRandomFloor(20, 100);
		//var p2 = document.getElementById("ptest");
		//p2.innerHTML = 'rgba(' + Math.floor(rgb.r) + ',' + Math.floor(rgb.g) + ',' + Math.floor(rgb.b) + ',' + alpha + ')';

		return 'rgba(' + Math.floor(rgb.r) + ',' + Math.floor(rgb.g) + ',' + Math.floor(rgb.b) + ',' + alpha + ')';
	}
	
	function getRandomRGBA3(color, dcolor) {
		d = dcolor;
		c = color;
		cc=1;
		if(document.getElementById('complementaryColors')==null){ cc=1;}
		else {
			var radioButtonlist = document.forms[0].elements['complementaryColors'];
			for (var x = 0; x < radioButtonlist.length; x++) {
				if (radioButtonlist[x].checked) {
					cc=radioButtonlist[x].value;
					break;					
				}
			}
		}
		
		
		//cc=1}
		//else {cc=document.getElementById('complementaryColors').value};
		//d = 0.1;
		//c = getRandom(0, 1);
		//c = .9;
		//c = 0;
		h = (getRandom(c, c + d) + getRandomFloor(0,cc)/cc)%1;
		//h = (getRandom(c, c + d))%1;
		s = 1;
		l = getRandom(0.1, 0.8);

		var rgb = hslToRgb(h, s, l);
		alpha = getRandomFloor(20, 100);
		//var p2 = document.getElementById("ptest");
		//p2.innerHTML = 'rgba(' + Math.floor(rgb.r) + ',' + Math.floor(rgb.g) + ',' + Math.floor(rgb.b) + ',' + alpha + ')';

		return 'rgba(' + Math.floor(rgb.r) + ',' + Math.floor(rgb.g) + ',' + Math.floor(rgb.b) + ',' + alpha + ')';
	}

	/**
	 * Converts an HSL color value to RGB. Conversion formula
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
	 * Assumes h, s, and l are contained in the set [0, 1] and
	 * returns r, g, and b in the set [0, 255].
	 *
	 * @param   Number  h       The hue
	 * @param   Number  s       The saturation
	 * @param   Number  l       The lightness
	 * @return  Array           The RGB representation
	 *Source:  http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
	 */
	function hslToRgb(h, s, l) {
		var r, g, b;

		if (s == 0) {
			r = g = b = l; // achromatic
		} else {
			function hue2rgb(p, q, t) {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			}

			var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			var p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}

		return {
			r: r * 255,
			g: g * 255,
			b: b * 255
		}
	}
	
	function hslToHex(h, s, l) {
		var r, g, b;

		if (s == 0) {
			r = g = b = l; // achromatic
		} else {
			function hue2rgb(p, q, t) {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			}

			var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			var p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}
		
			r *= 255;
			g *= 255;
			b *= 255;
			
		var rh = '00' + Math.floor(r).toString(16);
		var gh = '00' + Math.floor(g).toString(16);
		var bh = '00' + Math.floor(b).toString(16);
		
		rh = rh.substr(rh.length-2,rh.length);
		gh = gh.substr(gh.length-2,gh.length);
		bh = bh.substr(bh.length-2,bh.length);

		return rh+gh+bh;
	}
	
function CopyrightDate() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById('copyrightYear').innerHTML = n;
}