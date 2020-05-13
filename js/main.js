var canelés = 0;
var production = 1
var nbFour = 1
var nbEmpl = 0
var employé = setInterval(employe,1000);


function Cuisine(){
  canelés += production
  document.getElementById('nbCan').innerHTML = canelés
  if (canelés >= 25){
    document.getElementById('NouvFour').disabled = false
  }
  else {
    document.getElementById('NouvFour').disabled = true
  }
}

function NouveauFour (){
  canelés = canelés - 25
  document.getElementById('nbCan').innerHTML = canelés
  production += 1
  nbFour += 1
  if (nbFour == 2){
    alert("Tu peux maintenant embaucher ! Cela te couteras 100 canelés et un four ( donc -1 en production ) mais chaque employé produira 1 canelé par seconde !")
    document.getElementById('AutoCanelé').style = "display:inline"
    if (canelés >= 100){
      document.getElementById('AutoCanelé').disabled = false
    } else{
      document.getElementById('AutoCanelé').disabled = true
    }

  }
  if (canelés < 25){
    document.getElementById('NouvFour').disabled = true
  }
  if (canelés < 100){
    document.getElementById('AutoCanelé').disabled = true
  }
}

function employe(){
  console.log("test")
  canelés += nbEmpl
  document.getElementById('nbCan').innerHTML = canelés
}

function NouveauEmpl(){
  canelés = canelés - 100
  nbEmpl += 1
  document.getElementById('nbCan').innerHTML = canelés
  production = production - 1
  if (canelés < 25){
    document.getElementById('NouvFour').disabled = true
  }
  if (canelés < 100){
    document.getElementById('AutoCanelé').disabled = true
  }
}
