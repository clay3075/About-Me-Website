$(document).ready(function () {
	//create infotabs.
	$('#infotabs').jqxTabs({ width: $(document).width() * .55, height: $(document).width() * .4 });
	$('#infotabs').bind('selected', function (event) {
		var item = event.args.item;
		var title = $('#infotabs').jqxTabs('getTitleAt', item);
		$('#infotitle').text(title);
		//make resume printable
		if (title == 'Resume') {
			$('.printable') 
			  .append('<center><button id="print-button">Print</button></center>').click(print); // Create the element  
		}
	});

	//load resume into div
	$('.printable').load('../resume.html');
});

function print() {
	alert('printing');
}