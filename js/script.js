
//we start a function
$(function(){
  var $instapics = '';
//call our button and let it know on 'click' we'll start an event, use event prevent default. then create a var...
//... called $input, we then call class .hash to get the value.
  $('.button').on('click', function(event){
    $('.photos').empty();
    event.preventDefault();
    var $input = $('.hash').val();
//we start an ajax. we get our jsonp dataType with a 'GET' method.
    $.ajax({
      dataType: 'jsonp',
      method: 'GET',
    /* we obtain the api URL from instagram in developer tools, used the client ID Mandi gave us, and added the correct values
      the +$input.hash+ is the var w/ val we called, we add that to where instagram told us too in their dev tools page
      we added count=12 for the amount of data we want to call from the website
      we seperated our values with & */
      url: 'https://api.instagram.com/v1/tags/'+$input+'/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682'

    }).done(function(photoData){
      console.log(photoData);
        $.each(photoData.data, function(i, el){
              $instapics +='<li>';
              $instapics +='<div class="insta-photo">';
              $instapics +='<a href=" '+el.link+'"><img src="'+el.images.standard_resolution.url+'" /></a>';
              $instapics +='</div>';
              $instapics +='</li>';
        });

          $(".photos").append($instapics);
  });
});
});
