+++
# A Demo section created with the Blank widget.
# Any elements can be added in the body: https://sourcethemes.com/academic/docs/writing-markdown-latex/
# Add more sections by duplicating this file and customizing to your requirements.

widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 10  # Order that this section will appear.

title = "Bierzemy Ślub!"
subtitle = "Mamy nadzieję, że będziecie tego dnia z nami"

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "2"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"

  # Background gradient.
  # gradient_start = "DarkGreen"
  # gradient_end = "ForestGreen"

  # Background image.
  # Name of image in `static/img/`.
  image = "palac-warlity.jpg"
  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  image_darken = 0.5
  #  Options are `cover` (default), `contain`, or `actual` size.
  # image_size = "cover"
  # image_position = "center"  # Options include `left`, `center` (default), or `right`.
  # Use a fun parallax-like fixed background effect? true/false
  image_parallax = false

  # Text color (true=light or false=dark).
  text_color_light = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["150px", "0", "150px", "0"]

[advanced]
 # Custom CSS.
 css_style = ""

 # CSS class.
 css_class = ""
+++

Witamy na naszej stronie ślubnej - super, że jesteście!

Poniżej znajdziecie garść niezbędnych informacji dotyczących naszego ślubu i wesela.
Koniecznie dajcie nam znać, czy możemy liczyć na Waszą obecność i czy macie jakieś specjalne preferencje żywieniowe.

Czekamy na Was!

<div id="countdown-placeholder" />

<script>
function calculateRemaining() {
  var countdownDate = new Date("Jun 19, 2021 16:00:00").getTime();
  var now = new Date().getTime();
  var distance = countdownDate - now
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var distanceFormatted = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  document.getElementById("countdown-placeholder").innerHTML = "To już za <strong>" + distanceFormatted + "</strong>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-placeholder").innerHTML = "Impreza już się odbyła!";
  }
};
calculateRemaining();
setInterval(calculateRemaining, 1000);
</script>
