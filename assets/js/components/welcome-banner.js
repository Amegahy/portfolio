/**
 * This is the description of this file.
 */
$(document).ready(function(){

    /**
     * Re-write the h1 welcome tag for SEO.
     */
    $(".wb-heading h1").html("Hello World!");

    /* Show h2 welome title */
    setTimeout(function(){
        $(".wb-heading:nth-of-type(2)").removeClass("hidden");
    }, 5000);
});