const rangeSlider = document.getElementById('rangeSlider');
const inputMin = document.getElementById('inputMin');
const inputMax = document.getElementById('inputMax');

if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
	    start: [1490, 14490],
	    connect: true,
	    step: 10,
	    range: {
	        'min': 0,
	        'max': 20000
	    }
	});

	const inputs = [inputMin, inputMax];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach( (el,index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		})
	});
}