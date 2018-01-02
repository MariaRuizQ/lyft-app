$(document).ready(function(){
  var clickImg = $('li a img');
  clickImg.on('click',function(){
    $('#option-img').attr('src',$(this).attr('src'));
  });

  var number = $('#number');
  number.on('keyup',function(){
    if(number.val().length>8){
      $('#button-code').removeAttr('disabled');
    }
    else{
    };
  });
  number.val('');
});
