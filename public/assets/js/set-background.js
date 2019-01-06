var idx = Math.floor((new Date().getHours()));
var body = document.getElementsByTagName("body")[0];
body.className = "heaven-" + idx;

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function ()
{
    try
    {
        modal.style.display = "block";
    }
    catch (e)
    {

    }

}

// When the user clicks on <span> (x), close the modal
span.onclick = function ()
{
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
