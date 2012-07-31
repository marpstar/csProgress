#csProgress


A simple jQuery progress bar with animation. 

###Introduction

csProgress is a jQuery UI widget providing basic functionality for a progress bar or similar control. Use your own CSS classes to style it the way you want.

###Options

	options: {
            bar: '',                           /* CSS Class to apply to the indicator bar */
            width: 'auto',                     /* Width for the entire progress bar */
            height: 15,                        /* Height of the progress bar */
            containerStyle: {                  /* Style for the containing element */
                borderRadius: 90,                
                border: '1px solid black',
                background: 'rgba(0,0,0,.3)'
            },
            barStyle: {                        /* Base styles for the indicator bar */
                border: 'none',
                borderRadius: 90,
                width: 0,
                maxWidth: '100%',
                borderRight: '1px solid black'
            },
            progress: 0.0,                     /* Initial Progress, float between 0 and 1 */
            animate: true,                     /* Enable animations */
            duration: 1300,                    /* Animation duration */
            easing: 'easeOutCirc'              /* jQuery UI Easing. See jQuery Easings */
        }

[JSFiddle Live Example](http://jsfiddle.net/marpstar/YfuWs/)

[jQuery Easings](http://jqueryui.com/demos/effect/easing.html) 


#Dependencies
###jQuery 1.5+
###jQuery UI 1.8+