var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	// var tlglasses = new TimelineMax({paused:true});
	var tlpens = new TimelineMax({paused:true});
	var tllaptop = new TimelineMax({paused:true});
	var tlMaster = new TimelineMax();

	// var glasses_outline01 = document.getElementById('glasses_outline01');
	// var glasses_outline02 = document.getElementById('glasses_outline02');
	// var glasses_outline03 = document.getElementById('glasses_outline03');
	// var glasses_detail01 = document.getElementById('glasses_detail01');
	// var glasses_detail02 = document.getElementById('glasses_detail02');

	var pens_outline01 = document.getElementById('pens_outline01');

	var cup_path1 = document.getElementById('cup_path1');
	var cup_path2 = document.getElementById('cup_path2');
	var cup_path3 = document.getElementById('cup_path3');
	var cup_path4 = document.getElementById('cup_path4');
	var cup_path5 = document.getElementById('cup_path5');
	var cup_path6 = document.getElementById('cup_path6');
	var cup_path7 = document.getElementById('cup_path7');
	var cup_path8 = document.getElementById('cup_path8');

	var path01 = document.getElementById('path01');
	var path02 = document.getElementById('path02');
	var path03 = document.getElementById('path03');
	var path04 = document.getElementById('path04');
	var path05 = document.getElementById('path05');
	var path06 = document.getElementById('path06');
	var path07 = document.getElementById('path07');
	var path08 = document.getElementById('path08');
	var path09 = document.getElementById('path09');
	var path10 = document.getElementById('path10');
	var path11 = document.getElementById('path11');
	var path12 = document.getElementById('path12');
	var path13 = document.getElementById('path13');
	var path14 = document.getElementById('path14');
	var path15 = document.getElementById('path15');
	var path16 = document.getElementById('path16');
	var path17 = document.getElementById('path17');
	var path18 = document.getElementById('path18');
	var path19 = document.getElementById('path19');

	var detail01 = document.getElementById('detail01');
	var detail02 = document.getElementById('detail02');
	var detail03 = document.getElementById('detail03');
	var detail04 = document.getElementById('detail04');
	var detail05 = document.getElementById('detail05');
	var detail06 = document.getElementById('detail06');
	var detail07 = document.getElementById('detail07');
	var detail08 = document.getElementById('detail08');
	var detail09 = document.getElementById('detail09');
	var detail10 = document.getElementById('detail10');
	var detail11 = document.getElementById('detail11');
	var detail12 = document.getElementById('detail12');
	var detail13 = document.getElementById('detail13');
	var detail14 = document.getElementById('detail14');
	var detail15 = document.getElementById('detail15');
	var detail16 = document.getElementById('detail16');
	var detail17 = document.getElementById('detail17');
	var detail18 = document.getElementById('detail18');
	var detail19 = document.getElementById('detail19');
	var detail20 = document.getElementById('detail20');
	var detail21 = document.getElementById('detail21');
	var detail22 = document.getElementById('detail22');
	var detail23 = document.getElementById('detail23');
	var detail24 = document.getElementById('detail24');
	var detail25 = document.getElementById('detail25');

	var laptop_detail01 = document.getElementById('laptop_detail01');
	var laptop_detail02 = document.getElementById('laptop_detail02');
	var laptop_detail03 = document.getElementById('laptop_detail03');

	var laptop_outline01 = document.getElementById('laptop_outline01');
	var laptop_outline02 = document.getElementById('laptop_outline02');
	var laptop_outline03 = document.getElementById('laptop_outline03');
	var laptop_outline04 = document.getElementById('laptop_outline04');
	

	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');


	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		// t.set(glasses_outline01, {drawSVG:"0%"});
		// t.set(glasses_outline02, {drawSVG:"0%"});
		// t.set(glasses_outline03, {drawSVG:"0%"});
		// t.set(glasses_detail01, {drawSVG:"0%"});
		// t.set(glasses_detail02, {drawSVG:"0%"});

		t.set(pens_outline01, {drawSVG:"0%"});

		t.set(cup_path1, {drawSVG:"0%"});
		t.set(cup_path2, {drawSVG:"0%"});
		t.set(cup_path3, {drawSVG:"0%"});
		t.set(cup_path4, {drawSVG:"0%"});
		t.set(cup_path5, {drawSVG:"0%"});
		t.set(cup_path6, {drawSVG:"0%"});
		t.set(cup_path7, {drawSVG:"0%"});
		t.set(cup_path8, {drawSVG:"0%"});

		t.set(path01, {drawSVG:"0%"});
		t.set(path02, {drawSVG:"0%"});
		t.set(path03, {drawSVG:"0%"});
		t.set(path04, {drawSVG:"0%"});
		t.set(path05, {drawSVG:"0%"});
		t.set(path06, {drawSVG:"0%"});
		t.set(path07, {drawSVG:"0%"});
		t.set(path08, {drawSVG:"0%"});
		t.set(path09, {drawSVG:"0%"});
		t.set(path10, {drawSVG:"0%"});
		t.set(path11, {drawSVG:"0%"});
		t.set(path12, {drawSVG:"0%"});
		t.set(path13, {drawSVG:"0%"});
		t.set(path14, {drawSVG:"0%"});
		t.set(path15, {drawSVG:"0%"});
		t.set(path16, {drawSVG:"0%"});
		t.set(path17, {drawSVG:"0%"});
		t.set(path18, {drawSVG:"0%"});
		t.set(path19, {drawSVG:"0%"});

		t.set(detail01, {drawSVG:"0%"});
		t.set(detail02, {drawSVG:"0%"});
		t.set(detail03, {drawSVG:"0%"});
		t.set(detail04, {drawSVG:"0%"});
		t.set(detail05, {drawSVG:"0%"});
		t.set(detail06, {drawSVG:"0%"});
		t.set(detail07, {drawSVG:"0%"});
		t.set(detail08, {drawSVG:"0%"});
		t.set(detail09, {drawSVG:"0%"});
		t.set(detail10, {drawSVG:"0%"});
		t.set(detail11, {drawSVG:"0%"});
		t.set(detail12, {drawSVG:"0%"});
		t.set(detail13, {drawSVG:"0%"});
		t.set(detail14, {drawSVG:"0%"});
		t.set(detail15, {drawSVG:"0%"});
		t.set(detail16, {drawSVG:"0%"});
		t.set(detail17, {drawSVG:"0%"});
		t.set(detail18, {drawSVG:"0%"});
		t.set(detail19, {drawSVG:"0%"});
		t.set(detail20, {drawSVG:"0%"});
		t.set(detail21, {drawSVG:"0%"});
		t.set(detail22, {drawSVG:"0%"});
		t.set(detail23, {drawSVG:"0%"});
		t.set(detail24, {drawSVG:"0%"});
		t.set(detail25, {drawSVG:"0%"});

		t.set(laptop_detail01, {drawSVG:"0%"});
		t.set(laptop_detail02, {drawSVG:"0%"});
		t.set(laptop_detail03, {drawSVG:"0%"});

		t.set(laptop_outline01, {drawSVG:"0%"});
		t.set(laptop_outline02, {drawSVG:"0%"});
		t.set(laptop_outline03, {drawSVG:"0%"});
		t.set(laptop_outline04, {drawSVG:"0%"});
		

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

		tlMaster.to(tllaptop, 6, {progress:1, ease:Sine.easeInOut})
		.to(tlpens, 3.75, {progress:1, ease:Sine.easeInOut});


		// tlglasses.to(glasses_outline01, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		// .to(glasses_outline02, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		// .to(glasses_outline03, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		// .to(glasses_detail01, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		// .to(glasses_detail02, .5, {drawSVG:"100%", ease:Sine.easeInOut});

		tlpens.to(pens_outline01, 2, {drawSVG:"100%", ease:Sine.easeInOut})

		.to(cup_path1, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=1")
		.to(cup_path2, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(cup_path3, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(cup_path4, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(cup_path5, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(cup_path6, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(cup_path7, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(cup_path8, .5, {drawSVG:"100%", ease:Sine.easeInOut})

		.to(path01, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=1")
		.to(path02, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path03, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path04, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path05, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path06, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path07, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path08, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path09, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path10, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path11, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path12, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path13, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path14, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path15, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path16, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path17, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path18, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(path19, .5, {drawSVG:"100%", ease:Sine.easeInOut})

		.to(detail01, .5, {drawSVG:"100%", ease:Sine.easeInOut}, "+=1")
		.to(detail02, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail03, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail04, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail05, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail06, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail07, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail08, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail09, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail10, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail11, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail12, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail13, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail14, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail15, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail16, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail17, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail18, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail19, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail20, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail21, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail22, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail23, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail24, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(detail25, .5, {drawSVG:"100%", ease:Sine.easeInOut});

		tllaptop.to(laptop_outline02, 1, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(laptop_outline01, 1, {drawSVG:"100%", ease:Sine.easeInOut})
		
		.to(laptop_outline03, 1, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(laptop_outline04, .5, {drawSVG:"100%", ease:Sine.easeInOut})

		.to(laptop_detail01, 2, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(laptop_detail02, .5, {drawSVG:"100%", ease:Sine.easeInOut})
		.to(laptop_detail03, 1, {drawSVG:"100%", ease:Sine.easeInOut});


	

		
		
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
