

var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint

elForm = document.getElementById("formSignup");
elSelectPackage = document.getElementById("package");
elPackageHint = document.getElementById("packageHint");
elTerms = document.getElementById("terms");
elTermsHint = document.getElementById("termsHint");

function checkSelect() {
	var elPackage = this.options[this.selectedIndex].id;
 	if (elPackage === "year") {
		
		elPackageHint.innerHTML = "Wise Choice";
	} else {
		
		elPackageHint.innerHTML = "save some money if you pay for 1 year!";
	}
}

function checkTerms(e) {
	if (!elTerms.checked) {
		elTermsHint.className = "warning";
		elTermsHint.innerHTML = "You must agree to the terms to continue!";
		event.preventDefault();	
	} else {
		elTerms.className = "";
		elTerms.innerHTML = "";
	}
}

elForm.addEventListener("submit", checkTerms, false);
elSelectPackage.addEventListener("change", checkSelect, false);
