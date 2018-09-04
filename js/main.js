$(document).ready(function () {
  $('.aboutusphoto').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   fade: true,
   infinite: true,
 });
});

var feed = new Instafeed({
	get: "tagged",
	tagName: "chicago",
	clientId: "67011a8a795d429d9bad9262b997692e"	
})
feed.run();