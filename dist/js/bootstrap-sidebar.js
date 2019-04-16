/*
* Simple responsive sidebar for Bootstrap 3
* Author: Gozoro <gozoro@yandex.ru>
* Version: 0.0.3
*
*/

(function()
{

	var scrollPos;

	function sidebar_show()
	{
		$('body').addClass('modal-open');
		$('body').append('<div class="modal-backdrop fade in"></div>');

		$('.sidebar')
			.addClass('open')
			.animate({'left':'0'}, 300);

		if(navigator.userAgent.match(/iPhone|iPad|iPod/i))
		{
			scrollPos = $('body').scrollTop();
			$('body').css({position: 'fixed',top: -scrollPos});
		}
	}


	function sidebar_hide()
	{
		$('.modal-backdrop').remove();
		$('.sidebar')
			.animate({'left':'-400px'}, 300, function()
			{

				$('body').removeClass('modal-open');
				$('.sidebar').removeClass('open');
				$('.sidebar').removeAttr('style');

				if(navigator.userAgent.match(/iPhone|iPad|iPod/i))
				{
					$('body').css('position', 'static').scrollTop(scrollPos);
				}
			});
	}

	$(document).ready(function()
	{

		$('.sidebar-open').click(function()
		{
			sidebar_show();
		});



		$('body').on('click', '.modal-backdrop', function()
		{
			if($('.sidebar').hasClass('open'))
			{
				sidebar_hide();
			}
		});



		$('.sidebar-close').click(function()
		{
			if($('.sidebar').hasClass('open'))
			{
				sidebar_hide();
			}
		});

	});

})();

