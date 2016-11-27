$(".project-picture").on("click",function() {
  console.log("hovered!");
  $(this).hide();
  var vidElem = $(".project-video .embed-responsive-item", $(this).parent())[0];
  var playButton = $(".project-play", $(this).parent());
  playButton.hide();
  vidElem.currentTime = 0;
  vidElem.play();
  $(".project-video", $(this).parent()).show();
})

$(".project-video").on("click",function() {
  $(".embed-responsive-item", $(this))[0].pause();
  console.log("hovered!");
  $(this).hide();
  $(".project-picture", $(this).parent()).show();
  $(".project-play", $(this).parent()).show();
})
$(".project-video").hide();
