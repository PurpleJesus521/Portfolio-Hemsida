function openTab(evt,tabName){
    //Variabler
    var i, tabcontent, tablinks;
    
    //Tar alla element som ingår i classen "tabcontent" och gömmer dom
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Tar alla element med classen "tabcontent" och tar bort classen "active"
    tablinks = document.getElementsByClassName("nav-bar__tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    //Visa nuvarande tab och ge classen "active" till den
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}