// funktionen openNav og closeNav åbner og lukker sidebaren
function openNav() {
    // ændre bredden af sidebaren til 250px
    document.getElementById("mySidebar").style.width = "250px";
    // ændre marginen af main til 250px
    document.getElementById("main").style.marginLeft = "250px";
  }
  
// funktionen closeNav lukker sidebaren
  function closeNav() {
    // ændre bredden af sidebaren til 0
    document.getElementById("mySidebar").style.width = "0";
    // ændre marginen af main til 0
    document.getElementById("main").style.marginLeft= "0";
  }
