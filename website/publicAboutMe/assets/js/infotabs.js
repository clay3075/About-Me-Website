$(document).ready(function () {
	//create infotabs.
	$('#infotabs').jqxTabs({ width: $(document).width() * .50, height: $(document).width() * .3 });
	$('#infotabs').bind('selected', function (event) {
		var item = event.args.item;
		var title = $('#infotabs').jqxTabs('getTitleAt', item);
		$('#infotitle').text(title);
		//make resume printable
		if (title == 'Resume') {
			//$('#p1').width($('.jqx-tabs-content-element').width()).height($('.jqx-tabs-content-element').height());
			$('#print-button') 
			  .show(); // Create the element  
		} else {
			$('#print-button').hide();
		}
	});

	//load resume into div
	$('.printable').load('../resume.html');
});

function print() {
	var temp = window.open('resume.html');
	temp.print();
	setTimeout(function() {temp.close();},100);
}
