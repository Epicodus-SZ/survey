// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var formName = $("#name").val();
    var formBeverage = $("#beverage").val();
    var formIceCream = $("input:radio[name=flavor]:checked").val();
    var formBirthday = $("#born").val();
    var formColor = $("#color").val();
    console.log ( formBirthday, formColor, formName, formIceCream, formBeverage);
    //var number2 = parseInt($("#add2").val());
    //$("div#output").text(add(number1, number2));
  });

});
