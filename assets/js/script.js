let button = document.getElementById('top');
window.onscroll = () => {
	scroll();
};

function scroll() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button.style.display = 'block';
	} else {
		button.style.display = 'none';
	}
}

function toTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
