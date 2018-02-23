import $ from 'jquery';

window.$ = $;

import Vue from 'vue';
import Popper from 'popper.js';
import BaguetteBox from 'baguettebox.js';
import Bootstrap from 'bootstrap';
import AirDatePicker from 'air-datepicker';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';

import MainApp from './components/main.vue'


$(document).ready(function() {

	$('#sandbox-container').datepicker({
		range: true,
		inline: true,
		timepicker: true,
		minutesStep: 5,
		dateFormat: 'dd-mm-yy',
		timeFormat: 'hh:ii'
	});

	BaguetteBox.run('.gallery');

	const App = new Vue({
		el: '#mainApp',
		render: h => h(MainApp)
	})

});
