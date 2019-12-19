var hide = 0;

window.addEventListener('loading', function() {
	alert(hide);
	if(!hide) {
		Loading.showLoading();
		hide = 1;	
	} 
	else {
		Loading.hideLoading();
		hide = 0;
	}
});
