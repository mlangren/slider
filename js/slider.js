
$("#window").css("overflow","hidden"); // gömmer allt utanför boxen
var nummer = 0; //variabel som används för att veta vart i slider man är

document.addEventListener('keypress', logKey); // Lyssnare på knapptryck

//Funktion som körs vid knapptryck
function logKey(e) {
//if satser för att avgöra vilket håll slidern ska åt
  if(nummer==0){

    $("#imgs").animate({right:"+204"},500,'linear');
    $("#window").css("background-color", "red" );
    nummer=nummer+1;
  }
  else if(nummer==1){

    $("#imgs").animate({bottom:"+204"},500,'linear');
    $("#window").css("background-color", "green" );
    nummer=nummer+1;
  }
  else if(nummer==2){

    $("#imgs").animate({right:"0"},500,'linear');
    $("#window").css("background-color", "pink" );
    nummer=nummer+1;
  }
  else {

    $("#imgs").animate({bottom:"0"},500,'linear');
    $("#window").css("background-color", "yellow" );
    nummer = 0;
    console.log(nummer+"hej");

  }

}
//funktion vid click inom window  
$("#window").click(function(){ 

//if satser för att avgöra vilket håll slidern ska åt
  if(nummer==0){

    $("#imgs").animate({right:"+204"},500,'linear');
    $("#window").css("background-color", "red" );
    nummer=nummer+1;

  }
  else if(nummer==1){

    $("#imgs").animate({bottom:"+204"},500,'linear');
    $("#window").css("background-color", "green" );
    nummer=nummer+1;
  }
  else if(nummer==2){

    $("#imgs").animate({right:"0"},500,'linear');
    $("#window").css("background-color", "pink" );
    nummer=nummer+1;
  }
  else {

    $("#imgs").animate({bottom:"0"},500,'linear');
    $("#window").css("background-color", "yellow" );
    nummer = 0;
    console.log(nummer+"hej");

  }


});
