// $(function(){

// osx detection for homepage type leading fixes
//if(navigator.platform.match('Mac') !== null) {
    //document.documentElement.setAttribute('class', 'OSX');
//}

 //$(window).bind('orientationchange', function(event) {
    //if (window.orientation === 90 || window.orientation === -90 || window.orientation === 270) {
//$('meta[name="viewport"]').attr('content', 'height=device-width,width=device-height,initial-scale=1.0,maximum-scale=1.0');
//$(window).resize();
    //} else {
//$('meta[name="viewport"]').attr('content', 'height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0');
//$(window).resize();
    //}
    //}).trigger('orientationchange');

//if($('#connect-form').length){
//	$.validator.addMethod("connectname", function(value){
 //        return value !== 'Name';
  //  });

//$("#connect-form").validate({
 //    rules: {
  //       connectname: 'connectname'
//	},
//	messages: {
//		connectname: 'This field is required.'
//	}
//});


//$('#connect_submit').click(function(e) {
//	e.preventDefault();
 //  if($('#connect-form').valid()) {

//	var formdata = $('#connect-form').serialize() + '&submitflag=true';

//	$.ajax({
//		type: "POST",
//		url: "connect-form/",
//		data: formdata,
//		success: function(data){
//			var formHeight = $("#connect-form").height();
//			$('.connect-form-container').height(formHeight);
//			$('#connect-form').fadeOut(1000);
//			var $thanks = $('<div></div>');
//			$thanks.hide();
//			$thanks.html(data);
//			$('.connect-form-container').append($thanks);
//
//			$('#connect-form').fadeOut(1000, function(){
//				$thanks.fadeIn(500);
//			});
//		}
//	});
//
//	}
//});
//}


//$('#connect_name, #connect_email, #connect_message').focus(function() {
	//if(this.value === this.defaultValue) {
		//this.value = '';
//	}
//	if(this.value !== this.defaultValue) {
//		this.select();
//	}
 //});

//$('#connect_name, #connect_email, #connect_message').blur(function() {
//	if(this.value === '') {
//		this.value = this.defaultValue;
//	}
//});

//$('#connect_name, #connect_email, #connect_message').mouseup(function(e){
//	e.preventDefault();
//});

// });


jQuery(document).ready(function($)	{

	$('.pagination-list').pajinate({
		items_per_page : 3,
		item_container_id : '.pagination-content',
		nav_panel_id : '.pag-list',
		show_first_last : false,
		nav_label_prev : '<',
		nav_label_next : '>'
	});

	$('.three-column-table').pajinate({
		items_per_page : 3,
		item_container_id : '.table-content',
		nav_panel_id : '.table_navigation',
		show_first_last : false,
		nav_label_prev : '<',
		nav_label_next : '>'
	});

	// $('.press-item-toggle').click(function(e)	{
	// 	var $this = $(this);
	// 	var rmt = $this.siblings('.read-more-text');

	// 	rmt.toggleClass('open');
	// 	e.preventDefault();
	// });

});