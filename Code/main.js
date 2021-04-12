
//start of sort
function sort(n) {
 
  var t1, rows; 
  var change, onchange, tts, onchangeCount = 0;
  var pos, pos1, pos2, 
 
  change = true;
  t1 = document.getElementById("sort");
  tts = "asc";
  
  while (change) { rows = t1.rows;
  change = false;
  for (pos = 1; pos < (rows.length - 1); pos++) { onchange = false;
    pos1 = rows[pos].getElementsByTagName("TD")[n];
    pos2 = rows[pos + 1].getElementsByTagName("TD")[n];
    if (tts == "asc") {
        if (pos1.innerHTML.toLowerCase() > pos2.innerHTML.toLowerCase()) {
          onchange = true;
          break;
        }
      } else if (tts == "desc") {
        if (pos1.innerHTML.toLowerCase() < pos2.innerHTML.toLowerCase()) {
          onchange = true;
          break;
        }
      }
    }
    if (onchange) {
      change = true;
      onchangeCount ++;
      rows[pos].parentNode.insertBefore(rows[pos + 1], rows[pos]);
    } else {
      if (tts == "asc" && onchangeCount == 0) {
        change = true;
        tts = "desc";
      }
    }
  }
}








