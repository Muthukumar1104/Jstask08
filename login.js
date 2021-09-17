function validation(){
	var user = document.getElementById('un').value;
	var pass = document.getElementById('pw').value;
	var text;
	if (user=="") {
		document.getElementById('user_error').innerHTML = "**Please enter the Name field"
		return false;
	}
	if (!isNaN(user)) {
		document.getElementById('user_error').innerHTML = "**Only letters are allowed"
		return false;
	}
	if (user.length<5) {
		document.getElementById('user_error').innerHTML = "**Name length must be above 5 letters"
		return false;
	}
	if (pass=="") {
		document.getElementById('pass_error').innerHTML = "**Please enter the Password field"
		return false;
	}
	if (pass.length<2 || pass.length<8) {
		document.getElementById('pass_error').innerHTML = "**password length must be 8 characters"
		return false;
	}
	if (pass.length == 8 || user.length == 5) {
		alert("form submitted successfully!");
		document.getElementById('un').value = "";
		document.getElementById('pw').value = "";
		document.getElementById('user_error') = "";
		document.getElementById('pass_error') = "";
		return true;
	}
	
	
	
}