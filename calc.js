function callMe() {
    var option1 = document.getElementById('grade1').value;
    switch (option1) {
    case "A1":
    var option1 = 10;
      break;
      case "B2":
      var option1=9;
      break;
      case "B3":
      var option1 = 8;
      break;
      case "C4":
      var option1 = 7;
      break;
      case "C5":
      var option1= 6;
      break;
      case "C6":
      var option1= 5;
      break;
      default :
      document.getElementById('goahead').innerHTML ="";
      document.getElementById('aggregate').innerHTML = "";
      document.getElementById("info").innerHTML='HAVING A D7 AND BELOW IN ANY OF YOUR MAIN WAEC SUBJECTS DISQUALIFIES YOU FROM BEING ABLE TO PARTICIPATE IN THE LASU ADMISSION SCREENING!... KINDLY DO A CHANGE OF SCHOOL...THANKS';
      document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
      document.getElementById('aggregate').innerHTML = "";
      return false;
      break;
  }
  var option2 = document.getElementById('grade2').value;
    switch (option2) {
    case "A1":
    var option2 = 10;
      break;
      case "B2":
      var option2=9;
      break;
      case "B3":
      var option2 = 8;
      break;
      case "C4":
      var option2 = 7;
      break;
      case "C5":
      var option2= 6;
      break;
       case "C6":
      var option2= 5;
      break;
      default :
      document.getElementById('goahead').innerHTML ="";
      document.getElementById('aggregate').innerHTML = "";
      document.getElementById("info").innerHTML='HAVING A D7 AND BELOW IN ANY OF YOUR MAIN WAEC SUBJECTS DISQUALIFIES YOU FROM BEING ABLE TO PARTICIPATE IN THE LASU ADMISSION SCREENING!... KINDLY DO A CHANGE OF SCHOOL...THANKS';
      document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
       document.getElementById('aggregate').innerHTML = "";
      return false;
      break;
  }
  var option3 = document.getElementById('grade3').value;
    switch (option3) {
    case "A1":
    var option3 = 10;
      break;
      case "B2":
      var option3=9;
      break;
      case "B3":
      var option3 = 8;
      break;
      case "C4":
      var option3 = 7;
      break;
      case "C5":
      var option3= 6;
      break;
       case "C6":
      var option3= 5;
      break;
      default :
      document.getElementById('goahead').innerHTML ="";
      document.getElementById('aggregate').innerHTML = "";
      document.getElementById("info").innerHTML='HAVING A D7 AND BELOW IN ANY OF YOUR MAIN WAEC SUBJECTS DISQUALIFIES YOU FROM BEING ABLE TO PARTICIPATE IN THE LASU ADMISSION SCREENING!... KINDLY DO A CHANGE OF SCHOOL...THANKS';
      document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
      document.getElementById('aggregate').innerHTML = "";
      return false;
      break;
  }
  var option4 = document.getElementById('grade4').value;
    switch (option4) {
    case "A1":
    var option4 = 10;
      break;
      case "B2":
      var option4 = 9;
      break;
      case "B3":
      var option4 = 8;
      break;
      case "C4":
      var option4 = 7;
      break;
      case "C5":
      var option4= 6;
      break;
       case "C6":
      var option4= 5;
      break;
      default :
      document.getElementById('goahead').innerHTML ="";
      document.getElementById('aggregate').innerHTML = "";
      document.getElementById("info").innerHTML='HAVING A D7 AND BELOW IN ANY OF YOUR MAIN WAEC SUBJECTS DISQUALIFIES YOU FROM BEING ABLE TO PARTICIPATE IN THE LASU ADMISSION SCREENING!... KINDLY DO A CHANGE OF SCHOOL...THANKS';
      document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
      document.getElementById('aggregate').innerHTML = "";
      return false;
      break;
  }
  var option5 = document.getElementById('grade5').value;
    switch (option5) {
    case "A1":
    var option5 = 10;
      break;
      case "B2":
      var option5=9;
      break;
      case "B3":
      var option5 = 8;
      break;
      case "C4":
      var option5 = 7;
      break;
      case "C5":
      var option5= 6;
      break;
       case "C6":
      var option5= 5;
      break;
      default :
      document.getElementById('goahead').innerHTML ="";
       document.getElementById('aggregate').innerHTML = "";
      document.getElementById("info").innerHTML='HAVING A D7 AND BELOW IN ANY OF YOUR MAIN WAEC SUBJECTS DISQUALIFIES YOU FROM BEING ABLE TO PARTICIPATE IN THE LASU ADMISSION SCREENING!... KINDLY DO A CHANGE OF SCHOOL...THANKS';
      document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
      document.getElementById('aggregate').innerHTML = "";
      return false;
      break;
  }
  var jamb = document.getElementById('utm').value;
      if (jamb =="") {
        document.getElementById('goahead').innerHTML ="";
        document.getElementById('aggregate').innerHTML = "";
        document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
        document.getElementById("info").innerHTML= 'HELLO HANG ON!!!, YOU DID NOT INPUT YOUR JAMB SCORE!!';
        return false;
      }
      if (jamb>400) {
        document.getElementById('goahead').innerHTML ="";
        document.getElementById('aggregate').innerHTML = "";
        document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
        document.getElementById("info").innerHTML='HELLO DEAR, YOU ENTERED AN INVALID JAMB SCORE, KINDLY INPUT A VALID SCORE TO GET YOUR ACCURATE AGGREGATE SCORE';
              return false;
      }
      if (jamb<190) {
        document.getElementById('goahead').innerHTML ="";
        document.getElementById('aggregate').innerHTML = "";
        document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
        document.getElementById("info").innerHTML='DEAR FRIEND, LASU ONLY ADMITS CANDIDATES WHO SCORED A MINIMUM OF 190 IN THE LAST CONDUCTED UTME..YOU ARE ADVICED TO DO A CHANGE OF SCHOOL! THANKS.';
              return false;
          }
          for (var i = 0; i<jamb.length; i++) {
          if (jamb[i] == ".") {
            document.getElementById('goahead').innerHTML ="";
            document.getElementById('aggregate').innerHTML = "";
            document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = 'WARNING';
            document.getElementById("info").innerHTML="HELLO USER, PLEASE NOTE THAT YOU CAN'T HAVE A DECIMAL POINT IN YOUR JAMB SCORE";
         return false;
          }
          }
  var jamb = document.getElementById('utm').value;
  var jambs = Number(jamb)/8;
  var waec = option1+option2+option3+option4+option5;
  var final = jambs + waec;
  if (final >= 77)  {
    document.getElementById('aggregate').style.color = 'green';
    document.getElementById('goahead').innerHTML = 'Congratulations, your aggregate is pretty high! you stand a chance of getting admitted into a competitive course'
    document.getElementById('goahead').style.color = 'green'
  }
  if (final < 77 && final >=65)  {
    document.getElementById('aggregate').style.color = 'blue';
    document.getElementById('goahead').innerHTML = 'Congrats, your aggregate is pretty okay! You stand a chance of getting admitted into courses that are not too competitive'
    document.getElementById('goahead').style.color = 'blue'
  }
  if (final < 65)  {
    document.getElementById('aggregate').style.color = 'red';
    document.getElementById('goahead').innerHTML = 'You Tried, But your aggregate is a bit low! Why not try out educational Courses or courses that are less competitive'
    document.getElementById('goahead').style.color = 'red'
  }
  document.getElementById('info').innerHTML = "";
  document.getElementById('exampleModalCenteredScrollableTitle').innerHTML = "Your Total Aggregate Score is"
  document.getElementById('aggregate').innerHTML = final;
  }
  document.getElementById('dat').innerHTML = Date();
  
 