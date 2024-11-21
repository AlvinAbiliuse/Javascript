

var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint

elForm = document.getElementById("formSignup");
elSelectPackage = document.getElementById("package");
elPackageHint = document.getElementById("packageHint");
elTerms = document.getElementById("terms");
elTermsHint = document.getElementById("termsHint");

function checkSelect() {
	var elPackage = this.options[this.selectedIndex].value;
 	if (elPackage != "year") {
		elPackageHint.innerHTML = "save $xyz if you pay for 1 year!";
	} else {
		elPackageHint.innerHTML = "Wise Choice";
	}
}


elForm.addEventListener("change", checkSelect, false);
