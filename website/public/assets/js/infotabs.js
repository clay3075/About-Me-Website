$(document).ready(function () {
	//create infotabs.
	$('#infotabs').jqxTabs({ width: $(document).width() * .55, height: $(document).width() * .6 });
	$('#infotabs').bind('selected', function (event) {
		var item = event.args.item;
		var title = $('#infotabs').jqxTabs('getTitleAt', item);
		$('#infotitle').text(title);
	});
});
