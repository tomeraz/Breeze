const timeSlider = document.getElementById('time-slider');

noUiSlider.create(timeSlider, {
    start: [50],
    range: {
        'min': 0,
        'max': 100
    },
    step: 5,
    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,
    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
});