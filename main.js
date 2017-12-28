import axios from 'axios';
import mainJS from './app';
import theatresJS from './theatres.js';
import filmJS from './film.js';

let inTheatresBtn = document.querySelector('#in-theatres-btn');
inTheatresBtn.addEventListener('click', changeHash);

let logo = document.querySelector('.brand-logo');
logo.addEventListener('click', goToMain);

let listMovies = document.querySelector('.list-movies');
listMovies.addEventListener('click', identifyTarget);

function identifyTarget(event) {
	if (event.target.className.indexOf('link-more') !== -1) {
		let filmId = event.target.getAttribute('id');
		console.log(filmId);
		window.location.hash = '#?' + `${filmId}`;
	};
	loadData();
}

function goToMain() {
	window.location.hash = '#main';
//	listMovies.innerHTML = '';
	loadData();
}

function changeHash() {
	window.location.hash = '#in-theatres';
	loadData();
}

function loadData() {
	if (window.location.hash === '') {
		window.location.hash = '#main';
	}

	if (window.location.hash === '#main') {
		mainJS();
	}	else if (window.location.hash === '#in-theatres') {
			theatresJS();
	}	else if (window.location.href.indexOf('?')) {
			filmJS();
	}	

}

loadData();

//mainJS();
