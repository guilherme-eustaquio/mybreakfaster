class Vibration {

	static stopAllVibration() {
		navigator.vibrate(0);
	}
	
	static whenError() {
		window.navigator.vibrate([200]);
	}

	static whenNotificate() {
		window.navigator.vibrate([200, 100, 200]);
	}
}