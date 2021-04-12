function autocomplete(pro, proarr) {
var temp;
pro.addEventListener("input", function(e) {
  var listdir;
  closeAllLists();
  var listdir2, at1;
  var num = this.value;
  if (!num) { return false;}
  temp = -1;
  listdir = document.createElement("DIV");
  listdir.setAttribute
  ("id", this.id + "autocomplete-list");
  listdir.setAttribute
  ("class", "autocomplete-items");
  this.parentNode.appendChild(listdir);
    for (at1 = 0; at1 < proarr.length; at1++) {
     if (proarr[at1].substr(0, num.length).toUpperCase() == num.toUpperCase()) {
      
      listdir2 = document.createElement("DIV");
      listdir2.innerHTML = 
      "<strong>" + proarr[at1].substr(0, num.length) + "</strong>";
      listdir2.innerHTML += proarr[at1].substr(num.length);
      listdir2.innerHTML += 
      "<input type='hidden' value='" + proarr[at1] + "'>";
      listdir2.addEventListener("click", function(e) {
      pro.value = this.getElementsByTagName("input")[0].value;
      closeAllLists();
      });
      listdir.appendChild(listdir2);
      }}});
    pro.addEventListener("keydown", function(e) {
        var pos = document.getElementById(this.id + "autocomplete-list");
        if (pos) pos = pos.getElementsByTagName("div");
        if (e.keyCode == 40) {

          temp++;
          nextIn(pos);
        } else if (e.keyCode == 38) { 
          temp--;
          nextIn(pos);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (temp > -1) {
            if (pos) pos[temp].click();
          }
        }
    });
    function nextIn(pos) {
      if (!pos) return false;
      nonnextIn(pos);
      if (temp >= pos.length) temp = 0;
      if (temp < 0) temp = (pos.length - 1);
      pos[temp].classList.add("autocomplete-active");
    }
    function nonnextIn(pos) {
      for (var at1 = 0; at1 < pos.length; at1++) {
        pos[at1].classList.remove("autocomplete-active");
      }
    }
   function closeAllLists(elmnt) {
      var pos = document.getElementsByClassName("autocomplete-items");
      for (var at1 = 0; at1 < pos.length; at1++) {
        if (elmnt != pos[at1] && elmnt != pro) {
          pos[at1].parentNode.removeChild(pos[at1]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  var product = ["Apples....................... IN STOCK","Bread....................... IN STOCK","Brocoli....................... IN STOCK","Cheese....................... IN STOCK","Chicken Breast....................... IN STOCK","Chips....................... IN STOCK","Ground Beef....................... IN STOCK","Milk....................... IN STOCK","Chips....................... OUT of STOCK","Ground Beef....................... OUT of STOCK","Orange....................... OUT of STOCK","Potato....................... OUT of STOCK","Pasta....................... OUT of STOCK","Bacon....................... OUT of STOCK","Lemonade....................... OUT of STOCK","Pickles....................... OUT of STOCK"];
  autocomplete(document.getElementById("myInput"), product);
 