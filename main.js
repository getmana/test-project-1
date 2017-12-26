import axios from 'axios';
import mainJS from './app';

let newBtn = document.querySelector('#go-to-new');
newBtn.addEventListener('click', changeHash);

function changeHash() {
	window.location.hash = '#new';
	loadData();
}

function loadData() {
	if (window.location.hash === '') {
		window.location.hash = '#main';
	}

	if (window.location.hash === '#main') {
		mainJS();
	} else if (window.location.hash === '#new') {
		alert('The new');
	}

}

loadData();

mainJS();