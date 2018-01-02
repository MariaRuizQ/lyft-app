console.log('hola');
$(document).ready(function(){
  $('#button-code').click(function(){
    function generated_code(character,length){
      code = '';
      for (i = 0; i < length; i++){
        generate = Math.floor(Math.random()*character.length);
        code += character.substr(generate, 1);
      };
      return code;
    };
    x = '0123456789';
    y = 3;

    var generated = $('#code').text('Tu código es: '+ 'LAB - ' + generated_code(x,y));;
    console.log(generated);
  });
});
