console.log('Fonts from Rentafont unavailable. Please connect another font in Site Settings');

var insertFontsScript = function () {
	var script = document.createElement('script');
	script.id = 'tilda_fonts_script';
	script.type = 'text/javascript';
	var fileName = 'tilda-fonts';
	script.src = 'https://static.tildacdn.com/js/' + fileName + '.min.js';
	script.onerror = function () {
		// eslint-disable-next-line no-console
		console.error('Failed to load tilda-fonts');
	};
	document.head.appendChild(script);
};

var counter = 0;
var checkFontsObject = function () {
	if (typeof window.WebFontConfig !== 'undefined') {
		window.TildaFonts = window.WebFontConfig.fonts;
		insertFontsScript();
		clearInterval(checkObj);
	}

	if (counter > 200) {
		clearInterval(checkObj);
	}
	counter++;
} ;

var checkObj = setInterval(checkFontsObject, 20);
