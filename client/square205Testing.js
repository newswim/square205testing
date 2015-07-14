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

// $(document).ready(function() {
//     $(document).on("click","#all-portfolio",function() {
//       var $target = $('figure');
//       $target.show("slow");
//       console.log("test click");
//     });
//     $(document).on("click","#branding",function() {
//     var $target = $('.grid').children().not('.branding');
//     $target.hide("slow");
// });

Template.mixitup.rendered=function() {
  $('#Container').mixItUp();
}
Template.mixitup.destroyed=function() {
  $('#Container').mixItUp('destroy',true);
}

Template.someTemplate.events({
//  var figures = document.getElementsByTagName("figure");


  'click [data-tog="all-portfolio"]' : function(e){
    var $target = $('figure');
    $target.show("slow");

  },
  'click [data-tog="branding"]' : function(e){
    var $target = $('figure').filter('.branding');
    var $others = $('figure').not('.branding');
    $target.show("slow");
    $others.hide("slow");
  },
  'click [data-tog="interactive"]' : function(e){
    var $target = $('.grid').children().filter('.interactive');
    $target.show("slow");
  },
  'click [data-tog="photography"]' : function(e){
    // $('figure').filter('.photo') || $('figure').not('.video')
    var $target = $('.grid').children().filter('.photo');
    var $others = $('.grid').children().not('.photo');
    $target.show("slow");
    $others.hide("slow");
  },
  'click [data-tog="video"]' : function(e){
    // $('figure').filter('.photo') || $('figure').not('.video')
    var $target = $('.grid').children().filter('.video');
    var $others = $('.grid').children().not('.video');
    $others.hide("slow");
    $target.show("slow");

  }
})



  // 'click [data-tog="branding"]' : function(e){
  //   var $target = $('.grid').children().filter('.branding');
  //   if($target.css('display') == 'none'){
  //     $target.show("slow");
  //   } else {
  //     $target.hide("slow");
  //   }
  // }