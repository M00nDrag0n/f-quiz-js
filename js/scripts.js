$(document).ready(function() {
  $("#events").submit(function(event) {

    event.preventDefault();
    $("#unlucky-responses").show();
    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      var unluckyGuy = $(this).val();
      $("#unlucky-responses").append(unluckyGuy + "<br>");
    });
    $("#lucky-responses").show();
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      var luckyGuy = $(this).val();
      $("#lucky-responses").append(luckyGuy + "<br>");

    });
    $('#events').hide();
  //   var answers = $(this).serializeArray();
  //
  //   var scores = {
  //     "unlucky": 0,
  //     "lucky": 0,
  //     "neutral": 0,
  //   };
  //
  //   for (var answer of answers) {
  //     scores[answer.value] +=1;
  //   }
  //
  //   for(var fortune in scores){
  //     if(scores[fortune] > [maxFortune]) {
  //       maxFortune= fortune;
  //     }
  //     $("#fortuneQuiz").css('display', 'none');
  //     $(".result#" + maxFortune).css('display', 'block');
  // }

});

})
