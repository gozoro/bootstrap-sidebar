/*
* Simple responsive sidebar for Bootstrap 3
* Author: Gozoro <gozoro@yandex.ru>
* Version: 1.0.1
*
*/

(function()
{
	var scrollPos = {};
	var ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
	var RIGHT = 'right';
	var LEFT  = 'left';

	function sidebar_show(type)
	{
		var $body = $('body');
		var selector = '.sidebar.'+type;
		var $sidebar = $(selector);

		if($sidebar.length>0 && !$sidebar.is(':visible'))
		{
			$body
				.addClass('modal-open')
				.append('<div class="modal-backdrop fade in"></div>');

			var width = $sidebar.outerWidth();
			var cssStart = {position:'fixed'};
			var cssEnd = {};
			cssStart[type] = '-'+width+'px';
			cssEnd[type]   = 0;

			$sidebar
				.css(cssStart)
				.show()
				.addClass('open')
				.animate(cssEnd, 300);

			if(ios)
			{
				scrollPos[selector] = $body.scrollTop();
				$body.css({position: 'fixed',top: -scrollPos[selector]});
			}
		}
	}


	function sidebar_hide(type)
	{
		var $body = $('body');
		var selector = '.sidebar.'+type;
		var $sidebar = $(selector);


		if($sidebar.length>0 && $sidebar.is(':visible'))
		{
			$('.modal-backdrop').remove();

			var width = $sidebar.outerWidth();
			var cssEnd = {};

			cssEnd[type] = '-'+width+'px';

			$sidebar
				.animate(cssEnd, 300, function()
				{

					$body.removeClass('modal-open');
					$sidebar
						.removeClass('open')
						.removeAttr('style');

					if(ios)
					{
						$body.css('position', 'static').scrollTop(scrollPos[selector]);
					}
				});
		}
	}


	$(document).ready(function()
	{
		var $body = $('body');

		$('.sidebar').each(function()
		{
			var $sidebar = $(this);

			if(!$sidebar.hasClass(LEFT) && !$sidebar.hasClass(RIGHT))
				$sidebar.addClass(LEFT);
		});


		var LEFT_WIDTH  = $('.sidebar.left').outerWidth();
		var RIGHT_WIDTH = $('.sidebar.right').outerWidth();





		var mediaTypes = {
			lg: "(min-width:1200px)",
			md: "(min-width: 992px)",
			sm: "(min-width: 768px)",
			xs: "(max-width: 767px)",
			xsl:"(min-width:481px) and (max-width: 767px)", // xs landscape
			xsp:"(max-width: 480px)" // xs portrait
		};

		var style = "<style>";
		for(var screenType in mediaTypes)
		{
			style += "@media screen and " + mediaTypes[screenType] + "{"
			+(LEFT_WIDTH  ? ".sidebar-"+screenType+".left ~ .content{margin-left:"  +LEFT_WIDTH +"px}":"")
			+(RIGHT_WIDTH ? ".sidebar-"+screenType+".right ~ .content{margin-right:"+RIGHT_WIDTH+"px}":"")
			+"}";
		}
		style += "</style>";

		$body.append(style);


		$body.on('click', '.modal-backdrop', function()
		{
			if($('.sidebar.left').hasClass('open'))
			{
				sidebar_hide(LEFT);
			}

			if($('.sidebar.right').hasClass('open'))
			{
				sidebar_hide(RIGHT);
			}

		});



		$('.sidebar-close').click(function()
		{
			$('.sidebar.open').each(function()
			{
				sidebar_hide(LEFT);
				sidebar_hide(RIGHT);
			});
		});

		$('.sidebar-open.left').click(function()
		{
			sidebar_show(LEFT);
		});

		$('.sidebar-open.right').click(function()
		{
			sidebar_show(RIGHT);
		});


	});


})();
