<<<<<<< HEAD
var modal=document.getElementById('myModal');var btn=document.querySelector('.scroll');var span=document.getElementsByClassName("close")[0];function openModal(){modal.style.display="block"}
function closeModal(){modal.style.display="none"}
window.onclick=function(event){if(event.target==modal){modal.style.display="none"}}
=======
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.querySelector('.scroll');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
>>>>>>> c8ee03c5ad308086bad8e12a3d86e7ceb7ab65d9
