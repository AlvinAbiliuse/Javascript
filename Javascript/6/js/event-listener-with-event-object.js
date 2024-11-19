function checkLength(e, minLength, input) {
	var el, elMsg;
	if (!e) {
		e = window.event;
	}
	el = e.target || e.srcElement;
	elMsg = el.nextSibling;

	if (el.value.length < minLength) {
		elMsg.innerHTML = input + ' must be ' + minLength + ' characters or more!';
	} else {
		elMsg.innerHTML = '';	
	}
}

var elUsername = document.getElementById('name');
if (elUsername.addEventListener) {
	elUsername.addEventListener('blur', function(e) {
			checkLength(e, 5, 'Username');
	})
} else {
	elUsername.attachEvent('onblur', function(e) {
			checkLength(e, 5, 'Username');
	})
}

var elPass = document.getElementById('pass');
if (elPass.addEventListener) {
	elPass.addEventListener('blur', function(e) {
			checkLength(e, 5, 'Password');
	})
} else {
	elPass.attachEvent('onblur', function(e) {
			checkLength(e, 5, 'Password');
	})
}

