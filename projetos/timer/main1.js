(function(){

	var ss = document.querySelector('.ss');
	var mm = document.querySelector('.mm');

	var start = document.querySelector('#start');
	var pause = document.querySelector('#pause');

	var audio = document.querySelector('#buzzer');

	var config = {
		time: 20,
	  	mode: 'normal'
	}

	var mins;
	var secs;	
	var interval;

	var start = document.querySelector("#start");
	start.addEventListener("click", startTimer);

	var pause = document.querySelector("#pause");
	pause.addEventListener("click", function(){
		clearInterval(interval);
	});


	function counter() {

		mins = Math.floor(config.time / 60);
	  	secs = config.time - mins * 60;
	  
	  	mm.innerHTML = (mins < 10 ? '0' : '') + mins;
	  	ss.innerHTML = (secs < 10 ? '0' : '') + secs;

	  	if(config.time == 3) {
	  		audio.play();
	  	}	
	  
		  if(config.time == 0) {
		  	
		    if(config.mode == 'normal') {
		    	config.mode = 'break'
		      	config.time = 20       
		    }else{
		    	clearInterval(interval);
		    }

		  }else {
		  	config.time = config.time - 1;
		  }
	  
	}

	function startTimer() {
		interval = setInterval(counter, 1000);
	}

})()