// Read the value of the radio button selection to send by email.

const selected = document.querySelector('input[name="rsvp"]:checked').value;
const emailTextField = document.getElementById("inputMessage");

/*

TODO KP Add this to the contact pages and make it work
<input type="checkbox" name="rsvp" value="yes"> Możecie na mnie liczyć!<br>
<input type="checkbox" name="rsvp" value="no"> Niestety nie dam rady... :(<br>
*/
