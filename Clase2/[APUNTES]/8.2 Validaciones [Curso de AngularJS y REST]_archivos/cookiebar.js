function controlcookies() {

    localStorage.controlcookie = (localStorage.controlcookie || 0);
 
    localStorage.controlcookie++; 
    document.getElementById('cookie1').style.display='none'; 
	console.log("localStorage.controlcookie="+localStorage.controlcookie);
}

