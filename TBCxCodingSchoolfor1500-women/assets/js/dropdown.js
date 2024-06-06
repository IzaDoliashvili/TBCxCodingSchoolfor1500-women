function drop() {
    var dropdowns = document.getElementsByClassName("dropdown-btn");
    var i;
  
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function() {
        var isActive = this.classList.contains("active");
  
        closeAllDropdowns();

        if (!isActive) {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          dropdownContent.style.display = "block";

          var height = dropdownContent.scrollHeight + "px";
          dropdownContent.style.maxHeight = height;

        }
      });
    }
  
    function closeAllDropdowns() {
      for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("active");
        var dropdownContent = dropdowns[i].nextElementSibling;
        dropdownContent.style.display = "none";
        dropdownContent.style.maxHeight = null;
      }
    }
  }
  
  drop();


  