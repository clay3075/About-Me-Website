var galleryOption = $(document).find('title').text();
var folder = "./publicWedding/images/" + galleryOption + "/";
$.get('getGallery', {path: folder}, function(data) {
	console.log(data)
	for (i = 0; i < data.length; i++) {
		$(".hoverbox").append( "<li><a href='#'><img src='" + data[i] + "'><img src='" + data[i] + "' class='preview'></a></li>" );
	}
});


