//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.


var button = document.getElementById('button-html');

button.addEventListener("click",
  function () {

    //chiedo il nome
    var name = prompt("Inserisci il tuo nome");
    if (!((name == "") || (name == " "))){
      document.getElementById("name-html").innerHTML = name;

      //chiedo il sesso
      var sex = prompt("Inserisci il tuo sesso, puoi scegliere tra 'uomo'/'maschio' oppure 'donna'/'femmina'. Tutte le altre scelte non saranno valide.  ");
      if ((sex == "") || (sex == " ")){
        sex = alert("Ops, hai sbagliato qualcosa! Riprova");
      } else if (sex == 'uomo' || sex == 'maschio'){
          document.getElementById("sex-html").innerHTML = sex;
          sex = document.getElementById("sex-html");
          sex.style.color = 'blue';
      } else if ( sex == 'donna' || sex == 'femmina'){
          document.getElementById("sex-html").innerHTML = sex;
          sex = document.getElementById("sex-html");
          sex.style.color = 'pink';
      } else {
          var error = "Ops, hai sbagliato qualcosa!";
          document.getElementById("sex-html").innerHTML = error;
          error = document.getElementById('sex-html');
          error.style.color = 'red';
      }

    } else {
      name = alert("Ops, hai sbagliato qualcosa! Riprovas");
    }

  }

)
