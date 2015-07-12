/*$( "#buttton1" ).click(function() {
    if ( $( this ).hasClass( "btn" ) ) {
        $( this ).hide();
    }
});*/
// Template.someTemplate.events = function(e){
//   preventDefault(e);
//   $('#button1').event.click(function(){
//     console.log("hello from anon function");
//     var target = $('.business');
//     if(target.css('display') == 'none'){
//       target.show("slow");
//       // $(this).text('Hide!');
//     } else {
//       target.hide("slow");
//       //$(this).text('Show!');
//     }
//   });
// }

Template.someTemplate.events({
  'click [toggle-category="business"]' : function(e){
    console.log("clicked");
    var target = $('.business');
    if(target.css('display') == 'none'){
      target.show("slow");
      // $(this).text('Hide!');
    } else {
      target.hide("slow");
      //$(this).text('Show!');
    }
  }
})