$ (document).ready (
    function() {
        $ ('.header').height($ (window).height ())
    }
)

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    gutter: 20
});