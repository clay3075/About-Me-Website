
 $(document).ready(function () {
	$('#editor').jqxEditor({
		//height: "10%",
		width: '100%'
	});
 }); 

$(document).ready(function () {
	//needed because initial value of editor was <div></div> for some reason
	$('#editor').val('');

	//set up validator from jqwidgets
	$('#contactform').jqxValidator({ rules: [
		{ input: '#first_name', message: 'The name should be more than 3 characters=', action: 'keyup', rule: 'minLength=3' },
		{ input: '#last_name', message: 'The name should be more than 3 characters=', action: 'keyup', rule: 'minLength=3' },
		{ input: '#email', message: 'Invalid e-mail=', action: 'keyup', rule: 'email'},
		{ input: '#telephone', message: '(xxx)xxx-xxxx', action: 'keyup', rule: 'phone'},
		{ input: '#editor', message: 'Tell me more please.', action: 'keyup', rule: 'minLength=10' }], theme: 'summer'
	});

	$('#contactform').jqxValidator({ onSuccess: function () { $(document).href += 'send_email'; console.log('hi');}});

	//ensure form doesnt get submitted empty
	$('#contactform').submit(function(event) {
		//if ($('#first_name').val() === '' && $('#last_name').val() === '' && $('#email').val() === '' && $('#editor').val() === '') {
			//event.preventDefault();
		//}
		event.preventDefault();
		$('#contactform').jqxValidator('validate');
	});
});


