$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(document).on('click', '#menu-toggle', function(e){
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

console.log($("#menu-toggle"));
