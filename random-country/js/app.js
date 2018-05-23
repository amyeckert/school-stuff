;(function($) {

    $(document).ready(function() {
    	console.log("page is ready");

        //----- update copyright site-wide -----------------------//
        var date = new Date();
        var year = date.getFullYear();

        var copyright = $('p.copyright').text();
        var copyrightNotice = '© ' + year + ' Amy Eckert';
        $('p.copyright').html(copyrightNotice);   

        //-------------------------------------------
        $(".choose").on("click", function(event) {
        	event.preventDefault();
        	console.log("button clicked");

        });






        console.log("page is ready");

    });//________THE END________________________________________________________________________________________

})(jQuery);