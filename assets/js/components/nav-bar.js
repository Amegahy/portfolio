/**
 * Navigation bar functionality for hamburger menu
 */
$(document).ready(function(){

    /**
     * Hide the navigation bar only on load
     */
    $(".nav-bar").addClass("hidden");

    /**
     * Open hamburger menu
     */
    $(".hamburger-menu").click(function(){
        $(".hamburger-menu").addClass("hidden");
        $(".nav-bar").removeClass("hidden");
    });

    /**
     * Close hamburger menu
     */
    $(".close-btn").click(function(){
        $(".hamburger-menu").removeClass("hidden");
        $(".nav-bar").addClass("hidden");
    });
});