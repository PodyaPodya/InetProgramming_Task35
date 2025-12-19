$(document).ready(function() {
    var $hamburger = $('#hamburgerBtn');
    var $nav = $('#mainNav');
    var $body = $('body');
    
    $hamburger.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        
        $hamburger.toggleClass('active');
        $nav.toggleClass('active');
        $body.toggleClass('menu-open');
    });
    
    $nav.on('click', '.nav-link', function(e) {
        e.stopPropagation();
        $hamburger.removeClass('active');
        $nav.removeClass('active');
        $body.removeClass('menu-open');
    });
    
    $(document).on('click', function(e) {
        if ($nav.hasClass('active') && 
            !$(e.target).closest('#mainNav').length && 
            !$(e.target).closest('#hamburgerBtn').length) {
            $hamburger.removeClass('active');
            $nav.removeClass('active');
            $body.removeClass('menu-open');
        }
    });

});