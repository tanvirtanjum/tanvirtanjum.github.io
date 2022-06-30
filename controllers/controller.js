$(document).ready(function(){

    //Start
    $("#topNav").attr("hidden", "hidden");
    $("#Portfolio").attr("hidden", "hidden");
    $("#popNav").attr("hidden", "hidden");
    $("#footer").attr("hidden", "hidden");

    
    $("#animation_logo").attr("src", "./assets/images/TanvirTanjum.gif");

    $("#load").removeAttr("hidden", "hidden");

    $(function() {
        setTimeout(function() {
            $("#load").attr("hidden", "hidden");
    
            $("#topNav").removeAttr("hidden", "hidden");
            $("#Portfolio").removeAttr("hidden", "hidden");
            $("#popNav").removeAttr("hidden", "hidden");
            $("#footer").removeAttr("hidden", "hidden");
        }, 2050);
    });

    //ROUTES
    $("#overview").attr("hidden", "hidden");
    $("#academic").attr("hidden", "hidden");
    $("#skill").attr("hidden", "hidden");
    $("#project").attr("hidden", "hidden");
    $("#experience").attr("hidden", "hidden");

    $("#overview").removeAttr("hidden", "hidden");

    $("#overviewBtn").on("click",function(){
        // $("#navbarNavDropdown").collapse('hide');
        
        $("#overview").removeAttr("hidden", "hidden");

        $("#academic").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        // $('html, body').animate({
        //     scrollTop: $("#overview").offset().top
        // }, 500);

        $("#navbarNavDropdown").collapse('hide');
    });

    $("#academicBtn").on("click",function(){
        // $("#navbarNavDropdown").collapse('hide');

        $("#academic").removeAttr("hidden", "hidden");

        $("#overview").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        // $('html, body').animate({
        //     scrollTop: $("#academic").offset().top
        // }, 500);

        $("#navbarNavDropdown").collapse('hide');
    });

    $("#skillBtn").on("click",function(){
        // $("#navbarNavDropdown").collapse('hide');

        $("#skill").removeAttr("hidden", "hidden");

        $("#overview").attr("hidden", "hidden");
        $("#academic").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        // $('html, body').animate({
        //     scrollTop: $("#skill").offset().top
        // }, 500);

        $("#navbarNavDropdown").collapse('hide');
    });

    $("#projectsBtn").on("click",function(){
        // $("#navbarNavDropdown").collapse('hide');

        $("#project").removeAttr("hidden", "hidden");

        $("#academic").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#overview").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        // $('html, body').animate({
        //     scrollTop: $("#project").offset().top
        // }, 500);

        $("#navbarNavDropdown").collapse('hide');
    });

    $("#experiencesBtn").on("click",function(){
        // $("#navbarNavDropdown").collapse('hide');

        $("#experience").removeAttr("hidden", "hidden");

        $("#academic").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#overview").attr("hidden", "hidden");

        // $('html, body').animate({
        //     scrollTop: $("#experience").offset().top
        // }, 500);

        $("#navbarNavDropdown").collapse('hide');
    });

    //Floating ROUTE
    $("#overviewBtn2").on("click",function(){
        $("#overviewBtn").click();
    });

    // $("#downloadBtn").on("click",function(){      
    //     $("#navbarToggleBTN").click();
    //     $("#downloadPopBtn").click();
    // });

    $("#academicBtn2").on("click",function(){
        $("#academicBtn").click();
    });

    $("#skillBtn2").on("click",function(){
        $("#skillBtn").click();
    });

    $("#projectsBtn2").on("click",function(){
        $("#projectsBtn").click();
    });

    $("#experiencesBtn2").on("click",function(){
        $("#experiencesBtn").click();
    });

    //DOWNLOAD
    $("#downloadCVDocxBtn").on("click",function(){
        // window.location.href = './assets/downloads/CV_TANVIR TANJUM SHOURAV.docx';
        window.open(
            './assets/downloads/CV_TANVIR TANJUM SHOURAV.docx',
            '_blank'
          );
    });

    $("#downloadCVPdfBtn").on("click",function(){
        // window.location.href = './assets/downloads/CV_TANVIR TANJUM SHOURAV.pdf';
        window.open(
            './assets/downloads/CV_TANVIR TANJUM SHOURAV.pdf',
            '_blank'
          );
    });

    // $("#closeDownloadBTN").on("click",function(){      
    //     $("#navbarToggleBTN").click();
    // });

    // $("#closeDownload2BTN").on("click",function(){      
    //     $("#navbarToggleBTN").click();
    // });
    

    //ACADEMIC ROUTE
    $("#ssc").attr("hidden", "hidden");
    $("#hsc").attr("hidden", "hidden");
    $("#bsc").attr("hidden", "hidden");

    $("#jscBtn").on("click",function(){
        $("#jsc").removeAttr("hidden", "hidden");

        $("#ssc").attr("hidden", "hidden");
        $("#hsc").attr("hidden", "hidden");
        $("#bsc").attr("hidden", "hidden");
    });

    $("#sscBtn").on("click",function(){
        $("#ssc").removeAttr("hidden", "hidden");

        $("#jsc").attr("hidden", "hidden");
        $("#hsc").attr("hidden", "hidden");
        $("#bsc").attr("hidden", "hidden");
    });

    $("#hscBtn").on("click",function(){
        $("#hsc").removeAttr("hidden", "hidden");

        $("#jsc").attr("hidden", "hidden");
        $("#ssc").attr("hidden", "hidden");
        $("#bsc").attr("hidden", "hidden");
    });

    $("#bscBtn").on("click",function(){
        $("#bsc").removeAttr("hidden", "hidden");

        $("#jsc").attr("hidden", "hidden");
        $("#ssc").attr("hidden", "hidden");
        $("#hsc").attr("hidden", "hidden");
    });
   
});
