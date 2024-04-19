var tablinks = document.getElementsByClassName("tab-links");
var tabcontainers = document.getElementsByClassName("tab-container");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontainer of tabcontainers){
        tabcontainer.classList.remove("active-tab")
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-50%";
}