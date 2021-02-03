/**
 * Welcome banner functionality to re-write the index.html title
 */
$(document).ready(function(){

    /**
     * Re-write the h1 welcome tag for SEO.
     */
    $(".wb-heading h1").html("Hello World!");

    /* Show h2 welcome title */
    setTimeout(function(){
        $(".wb-heading:nth-of-type(2)").removeClass("hidden");
    }, 5000);
});