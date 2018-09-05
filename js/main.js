$(document).ready(function () {
  $('.aboutusphoto').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   fade: true,
   infinite: true,
 });
});

$(document).ready(function(){
var userFeed = new Instafeed({
	get: 'user',
	userId: '1398104997',
	limit: 4,
	resolution: 'standard_resolution',
	accessToken: '1398104997.1677ed0.7787f1510c6449b1b4e1913cfbdb036a',
	sortBy: 'most-recent',
	template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
})
userFeed.run();
});

