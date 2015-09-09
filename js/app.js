/*global Reveal: true*/

(function( Reveal, undefined ) {

    console.log( 'app start' );

    // console.log( 'l', $( 'section[data-markdown]' )[0] );

    Reveal.addEventListener( 'ready', function( event ) {

        console.log('reveal ready', event);
    });

    Reveal.addEventListener( 'slidechanged', function( event ) {

        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        console.log('event', event);
    });
})( Reveal );
