$(document).ready(function () {
  $(".js--section-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addclass("sticky");
      } else {
        $("nav").removeclass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  // var waypoint = new Waypoint({
  //     element: document.getElementById('px-offset-waypoint'),
  //     handler: function(direction) {
  //     },
  //     offset: 20
  //   })
});
