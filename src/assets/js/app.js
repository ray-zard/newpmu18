import $ from 'jquery';

window.$ = $;

import Popper from 'popper.js';
import BaguetteBox from 'baguettebox.js';
import Bootstrap from 'bootstrap';
import AirDatePicker from 'air-datepicker';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';


$(document).ready(function() {

	$('#sandbox-container').datepicker({
		language: 'my-lang'
	});

	BaguetteBox.run('.gallery');

});
