/*$( "#buttton1" ).click(function() {
    if ( $( this ).hasClass( "btn" ) ) {
        $( this ).hide();
    }
});*/
$(function() {
$('#button1').click(function(){
  var target = $('#business').hasClass("business");
  if(target.css('display') == 'none'){
    target.show();
    // $(this).text('Hide!');
  }else{
    target.hide();
    //$(this).text('Show!');
  }
});
  });