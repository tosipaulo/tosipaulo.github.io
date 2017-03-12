(function(){

	var template = document.querySelector('.tempo');
	var audio = document.querySelector('#buzzer');

	var comecar = document.querySelector('#comecar');
	var parar = document.querySelector('#parar');

	var start = 20;
	var end = 20;

	var startIntervalCount;
	var startIntervalMinus;

	comecar.addEventListener('click', function(){
		IntervalStart()
	})

	parar.addEventListener('click', function(){
		clearInterval(startIntervalMinus);
		clearInterval(startIntervalCount);
	})


	function buzzer(_count) {
		if(_count < 3)
	  		audio.play()
	}

	function render(_count) {

		if(_count < 10 )
			template.innerHTML = "00:0" +_count;
	  else
	  	template.innerHTML = "00:" + _count;
	}

	function IntervalMinus() {
		var _end = end;
	   clearInterval(startIntervalCount);
		startIntervalMinus = setInterval(function(){
	    if(_end < 0) {
	    	IntervalStart()
	      _end = end;
	    }else{
	    	render(_end)
	    	_end--
	      buzzer(_end)
	    }
	    
	  }, 1000)
	}


	function IntervalStart() {
		var _start = start;
	  clearInterval(startIntervalMinus);
		startIntervalCount = setInterval(function(){
	    if(_start < 0) {
	    	IntervalMinus();
	      _start = start;
	    }else{
	    	render(_start)
	    	_start--
	      buzzer(_start)
	    }
	    
	  }, 1000)
	}



})()