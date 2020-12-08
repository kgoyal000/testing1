  function checkRad(){
  if(document.getElementById('subs').checked){
  	$('.bold-ro__fixed-frequency-text').css('display','block');
    $('.bold-ro__radio-div.bold-ro__recurring-div').addClass('bold-ro__bold-active')
    $('.bold-ro__radio-div.bold-ro__one-time-div').removeClass('bold-ro__bold-active')
  }else{
  	$('.bold-ro__fixed-frequency-text').css('display','none')
    $('.bold-ro__radio-div.bold-ro__one-time-div').addClass('bold-ro__bold-active')
    $('.bold-ro__radio-div.bold-ro__recurring-div').removeClass('bold-ro__bold-active')
  }
  }
  function checkVar(){
  	if(document.getElementById('subs').checked){
      $('button.ro-subscribe-btn').click()
    }else{
      $('.smart-lawn-plan_center__1Rc2D input[type="submit"]').click()
    }
  }
  $('input[name="add"]').css('display','none')
