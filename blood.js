
        $(document).ready(function(){
            $('.tabs li').click(function(){
            $('.tabs li').removeClass('active');
            $('.content').removeClass('active');
var tid=$(this).attr('tab');
$(this).addClass('active');
$("#"+tid).addClass('active');
        });
    });
/* upload*/
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#blah')
              .attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}