+++
widget = "blank"
headless = true
active = true
weight = 10
title = "We're getting married!"
subtitle = "We hope you can join us on our special day"

[design]
  columns = "2"

[design.background]
  image = "palac-warlity.jpg"
  image_darken = 0.5
  image_parallax = false
  text_color_light = true

[design.spacing]
  padding = ["150px", "0", "150px", "0"]
+++
Welcome to our wedding website – so glad you could make it!

Here you’ll find everything you need to know about our upcoming celebration.
Please don’t forget to RSVP and let us know about any dietary preferences.

We can’t wait to see you there!

<div id="countdown-placeholder" />

<script>
function calculateRemaining() {
  var countdownDate = new Date("Jun 6, 2020 17:30:00").getTime();
  var now = new Date().getTime();
  var distance = countdownDate - now
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var distanceFormatted = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  document.getElementById("countdown-placeholder").innerHTML = "It's happening in <strong>" + distanceFormatted + "</strong>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-placeholder").innerHTML = "The event has already taken place!";
  }
};
calculateRemaining();
setInterval(calculateRemaining, 1000);
</script>
