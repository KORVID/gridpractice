
// var scaleToggle = function(){
// var photos = document.querySelectorAll("id");

// photos.forEach(function(element) {
  // if(element == imageOne) {
	// console.log("you clicked imageOne!")
  // }
// });
// };

var scaleToggle = function(){
var images = document.querySelectorAll("div.photo");

for (var i=0; i < images.length; i++) {
	if (i == 0) {
		console.log("you clicked imageOne!")
	}
	else {
		console.log("you did not click imageOne!")
	}
}
};
















// function scaleToggle() {
    // var element = document.getElementById("photoOne");
	// element.classList.toggle("photo");
	// element.classList.toggle("imageOne");
    // element.classList.toggle("imageOneLarge");
	// Object.assign(photoOne.style,{visibility:"visible",opacity:"1.0"});
// }