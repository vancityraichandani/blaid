$(".btnjq").click(function(){

  var currDate = new Date();
  // currDate = currDate.value;
  var aqdate = document.getElementById("ad").value;
  aqdate = new Date(aqdate);


  var units= parseInt(document.getElementById("an").value / 5);
  var Difference_In_Time = currDate.getTime() - aqdate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  if(Difference_In_Days < 35){
    alert("It's been " + parseInt(Difference_In_Days) + " days storing the blood in blood bank.");
  }else if(Difference_In_Days <= 42){
    alert(" It has been " + parseInt(Difference_In_Days) + " days of storage. Blood bank can unconditionally donate " + units + " units of blood");
  }else{
    alert("Shelf life expired!")
  }

});

$(".logo").hover(function(){
  $(this).css("color", "#8f4068");
  }, function(){
  $(this).css("color", "pink");
});
$(".blaidlogo").hover(function(){
  $(this).css("color", "#8f4068");
  }, function(){
  $(this).css("color", "pink");
});
