var entriesFull = false;

 $(document).ready(function () {
	$('#editor').jqxEditor({
		//height: "10%",
		width: '100%'
	});
 }); 

$(document).ready(function () {
	$('#contactform').jqxValidator({ rules: [
		{ input: '#first_name', message: 'The name should be more than 3 characters!', acthon: 'keyup', rule: 'minLength=3' },
		{ input: '#last_name', message: 'The name should be more than 3 characters!', acthon: 'keyup', rule: 'minLength=3' },
		{ input: '#email', message: 'Invalid e-mail!', action: 'keyup', rule: 'email'}], theme: 'summer'
	});

	$('#contactform').submit(function(event) {
		if (!entriesFull) {
			event.preventDefault();	
		} else {
			entriesFull = false;
		}
	});
});


