/*
 Copyright (c) 2012 Cody Sand

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
 files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, 
 modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
 IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function ($) {
    $.widget("cs.progressbar", {
	
        options: {
            bar: '',							/* CSS Class to apply to the indicator bar */
            width: 'auto',						/* Width for the entire progress bar */
            height: 15,							/* Height of the progress bar */
            containerStyle: {					/* Style for the containing element */
                borderRadius: 90,			    
                border: '1px solid black',
                background: 'rgba(0,0,0,.3)'
            },
            barStyle: {							/* Base styles for the indicator bar */
                border: 'none',
                borderRadius: 90,
                width: 0,
                maxWidth: '100%',
                borderRight: '1px solid black'
            },
            progress: 0.0,						/* Initial Progress. Takes a float value (e.g. for 70% pass in .7 */
            animate: true						/* Enable animations */
			duration: 1300						/* Animation duration */
			easing: 'easeOutCirc' 				/* jQuery UI Easing. See http://jqueryui.com/demos/effect/easing.html */
        },
		
        progressBar: null,
		
        _create: function () {
            var widget = this,
                opts = widget.options,
                element = widget.element
                    .css(opts.containerStyle)
                    .css('height', opts.height)
                    .css('width', opts.width)

            widget.progressBar = widget._addProgressIndicator();
            
            widget.setProgress(opts.progress);

            $(window).bind('resize.ProgressBar', function () {
                widget.setProgress(opts.progress, false);
            });

            widget.element.parent().bind('progressResize', function () {
                widget.setProgress(opts.progress, false);
            });
        },

        setProgress: function (newProgress, animate) {
            var widget = this,
				opts = widget.options,
				progressBar = widget.progressBar;
            
            progressBar.parent().show();
            
            var newWidth = widget._getWidthForPercent(newProgress);

            opts.progress = newProgress;
            if (animate !== false && opts.animate === true) {
                progressBar.animate({ 'width': newWidth }, opts.duration, );
            }
            else {
                progressBar.css({ 'width': newWidth });
            }
        },
		
        _addProgressIndicator: function() {
            var opts = this.options,
                element = this.element;
            
             return $('<div class="csProgress"></div>')
                .css(opts.barStyle)
                .css('height', opts.height)
                .css('minWidth', opts.height)
                .addClass(opts.bar).appendTo(element);            
        },
		
        _getWidthForPercent: function (percent) {
            return this.element[0].clientWidth * percent;
        },

        destroy: function () {
            var widget = this;
            $(window).unbind('resize.ProgressBar');
            widget.element.attr('style', '');
            widget.progressBar.remove();
            $.Widget.prototype.destroy.call(this);
        }
    });
})(jQuery);