/**
 * Navigation bar functionality for hamburger menu
 */
$(document).ready(function(){

    /* Navigation bar */
    var $navBar = $(".nav-bar");

    /**
     * Toggle hamburger menu
     */
    $navBar.click(function(){
        $(".menu").toggleClass();
    });

});