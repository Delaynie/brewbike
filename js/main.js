/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// activate flip card (for mobile)
function activateFlip() {
  let inner = document.getElementsByClassName("flip-card-inner");
    inner.toggleClass('active');
}


/* register form js */
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}