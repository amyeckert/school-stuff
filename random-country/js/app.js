;(function($) {

    $(document).ready(function() {

        //----- update copyright site-wide -----------------------//
        var date = new Date();
        var year = date.getFullYear();

        var copyright = $('p.copyright').text();
        var copyrightNotice = '© ' + year + ' Amy Eckert';
        $('p.copyright').html(copyrightNotice);   
        console.log(date);

        //------ choose random country ----------------------------//
        $(".choose").on("click", function(event) {
        	event.preventDefault();
        	console.log("button clicked!");

        });

    });//________THE END________________________________________________________________________________________

})(jQuery);