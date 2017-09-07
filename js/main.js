/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showMenu() {
    document.getElementById("sub_menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropDown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

//FUNCTION SHOWHIDE IS FOR THE ARTICLE ID'S

function showHide(showID) {

    if (document.getElementById(showID)) {
        if (document.getElementById(showID+'-show').style.display !== 'none') {
            document.getElementById(showID+'-show').style.display = 'none';
            document.getElementById(showID).style.display = 'block';
        }
        else {
            document.getElementById(showID+'-show').style.display = 'inline';
            document.getElementById(showID).style.display = 'none';
        }
    }
}
