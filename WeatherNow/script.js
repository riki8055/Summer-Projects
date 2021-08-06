const form = document.querySelector('form');
const cityInp = document.getElementById('city-inp');
const btnSearch = document.getElementById('btn-search');
const container = document.querySelector('.container');
const preSpinner = document.getElementById('pre-spinner');

btnSearch.disabled = true;

cityInp.addEventListener('keyup', () => {
	if(cityInp.value.length) {
		btnSearch.disabled = false;
	}
	if(!cityInp.value.length) {
		btnSearch.disabled = true;
	}
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	container.innerHTML = '';
	container.innerHTML = `
	<div class="d-flex justify-content-center" id="pre-spinner">
		<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
		</div>
	</div>
	`
	setTimeout(cleanFromCont, 2000);
});

function cleanFromCont() {
	container.innerHTML = '';
	const location = cityInp.value;

	if(location) {
		getWeather(location);
	}
	cityInp.value = '';
}