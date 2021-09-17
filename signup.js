function validation(){
	var user = document.getElementById('un').value;
	var email = document.getElementById('email').value;
	var newpass = document.getElementById('np').value;
	var confpass = document.getElementById('cp').value;
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
	if (email=="") {
		document.getElementById('email_error').innerHTML = "**Please enter the Email field"
		return false;
	}
	if (newpass=="") {
		document.getElementById('np_error').innerHTML = "**Please enter the New Password field"
		return false;
	}
	if (newpass.length<2 || newpass.length<8) {
		document.getElementById('np_error').innerHTML = "**password length must be 8 characters"
		return false;
	}
	if (confpass=="") {
		document.getElementById('cp_error').innerHTML = "**Please enter the Confirm Password field"
		return false;
	}
	
	if (newpass.length!=confpass.length) {
		document.getElementById('cp_error').innerHTML = "**password are not same"
		return false;
	}
	if ((newpass.length==confpass.length)||(user.length==5)) {
	alert("form submitted successfully!");
	document.getElementById('un').value = "";
	document.getElementById('email').value = "";
	document.getElementById('np').value = "";
	document.getElementById('cp').value = "";
	document.getElementById('user_error').innerHTML = ""
	document.getElementById('email_error').innerHTML = ""
	document.getElementById('np_error').innerHTML = ""
	document.getElementById('cp_error').innerHTML = ""
	return true;
    }
}