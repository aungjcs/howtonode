/*global jQuery: true*/

(function( $, undefined ) {

    // マークダウンのセパレーターと文字コードをセット
    $( 'section[data-markdown]' ).each(function() {

        $( this ).attr({
            'data-charset': 'utf-8',
            'data-separator': '^  $',
            'data-separator-vertical': '^    $'
        });
    });
})( jQuery );
