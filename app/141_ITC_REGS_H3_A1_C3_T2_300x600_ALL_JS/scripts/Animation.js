var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax({paused:true});
	var tl2 = new TimelineMax({paused:true});
	var tlMaster = new TimelineMax();

	var path1 = document.getElementById('path1');
	var path2 = document.getElementById('path2');
	var path3 = document.getElementById('path3');
	var path4 = document.getElementById('path4');
	var path5 = document.getElementById('path5');

	var knotMask = document.getElementById('knot_mask');
	var mainMask = document.getElementById('main_mask');

	var stripe1aMask = document.getElementById('stripe1a_mask');
	var stripe1bMask = document.getElementById('stripe1b_mask');
	var stripe2aMask = document.getElementById('stripe2a_mask');
	var stripe2bMask = document.getElementById('stripe2b_mask');
	var stripe3aMask = document.getElementById('stripe3a_mask');
	var stripe3bMask = document.getElementById('stripe3b_mask');
	var stripe4aMask = document.getElementById('stripe4a_mask');
	var stripe4bMask = document.getElementById('stripe4b_mask');
	var stripe5aMask = document.getElementById('stripe5a_mask');
	var stripe5bMask = document.getElementById('stripe5b_mask');

	var detailMask = document.getElementById('detail_mask');
	var tieDetail = document.getElementById('tieDetail');

	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');


	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(path1, {drawSVG:"0%"});
		t.set(path2, {drawSVG:"0%"});
		t.set(path3, {drawSVG:"0%"});
		t.set(path4, {drawSVG:"0%"});
		t.set(path5, {drawSVG:"0%"});

		t.set(knotMask, {drawSVG:"0%"});
		t.set(mainMask, {drawSVG:"0%"});

		t.set(stripe1aMask, {drawSVG:"0%"});
		t.set(stripe1bMask, {drawSVG:"0%"});
		t.set(stripe2aMask, {drawSVG:"0%"});
		t.set(stripe2bMask, {drawSVG:"0%"});
		t.set(stripe3aMask, {drawSVG:"0%"});
		t.set(stripe3bMask, {drawSVG:"0%"});
		t.set(stripe4aMask, {drawSVG:"0%"});
		t.set(stripe4bMask, {drawSVG:"0%"});
		t.set(stripe5aMask, {drawSVG:"0%"});
		t.set(stripe5bMask, {drawSVG:"0%"});

		t.set(detailMask, {drawSVG:"0%"});
		t.set(tieDetail, {display:"none"});

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

		tlMaster.to(tl1, 3, {progress:1, ease:Sine.easeInOut})
		.to(tl2, 4.5, {progress:1, ease:Sine.easeInOut});


		tl1.to(path5, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path1, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path2, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path3, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path4, .5, {drawSVG:"100%", ease:Sine.easeInOut});


		tl2.to(knotMask, 1, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(mainMask, 3, {drawSVG:"100%", ease:Sine.easeInOut}, "+=1")

		.to(stripe1aMask, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=1")
		.to(stripe1bMask, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(stripe2aMask, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=.5")
		.to(stripe2bMask, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(stripe3aMask, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=.5")
		.to(stripe3bMask, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(stripe4aMask, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=.5")
		.to(stripe4bMask, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(stripe5aMask, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=.5")
		.to(stripe5bMask, .5, {drawSVG:"100%", ease:Sine.easeInOut})

		.set(tieDetail, {display:"block"})

		.to(detailMask, .5, {drawSVG:"100%", ease:Sine.easeInOut});

		
		
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
