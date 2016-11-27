$(document).ready(function() {
	$.get('whosAttending', function (guests) {
		for (count = 0; count < guests.length; count++) {
			$('#guestList').append(
				'<tr>' +
					'<td class="countWidth">' + (count + 1) + '</td>' +
					'<td class="nameWidth">' + guests[count].firstName + ' ' + guests[count].lastName + '</td>' +
				'</tr>'
			);
		}
	});
});