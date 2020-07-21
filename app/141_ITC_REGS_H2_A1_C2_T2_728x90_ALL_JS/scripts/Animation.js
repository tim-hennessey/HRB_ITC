var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tlglasses = new TimelineMax({paused:true});
	// var tlpens = new TimelineMax({paused:true});
	// var tllaptop = new TimelineMax({paused:true});
	var tlMaster = new TimelineMax();

	var glasses_outline01 = document.getElementById('glasses_outline01');
	var glasses_outline02 = document.getElementById('glasses_outline02');
	var glasses_outline03 = document.getElementById('glasses_outline03');
	var glasses = document.getElementById('glasses');
	

	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');


	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(glasses_outline01, {drawSVG:"0%"});
		t.set(glasses_outline02, {drawSVG:"0%"});
		t.set(glasses_outline03, {drawSVG:"0%"});
		t.set(glasses, {scale:".6", x:"216", y:"-25"});
		

		buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .25, {backgroundColor: "#3bc0f8"});
            t.to(cta_txt, .25, {fill: "#262626" });
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "#f5cc02"});
            t.to(cta_txt, .25, {fill: "#000" });
        });
		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tlMaster.to(tlglasses, 2, {progress:1, ease:Sine.easeInOut});


		tlglasses.to(glasses_outline01, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(glasses_outline02, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(glasses_outline03, .5, {drawSVG:"100%", ease:Sine.easeInOut});


	

		
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
