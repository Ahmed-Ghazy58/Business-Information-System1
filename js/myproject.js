//show date and change it's styling 
document.getElementById('date').innerHTML += Date();
document.getElementById('date').style.color = "pirple";
document.getElementById('date').style.fontWeight = "bolder";


//print current page
function printwindows() {
    window.print();
}



//scrol to top button//

mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}