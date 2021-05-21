$(document).ready(function(){

    //ROUTES
    $("#academic").attr("hidden", "hidden");
    $("#skill").attr("hidden", "hidden");
    $("#project").attr("hidden", "hidden");
    $("#experience").attr("hidden", "hidden");

    $("#overviewBtn").on("click",function(){
        $("#overview").removeAttr("hidden", "hidden");

        $("#academic").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        $('html, body').animate({
            scrollTop: $("#overview").offset().top
        }, 1000);
    });

    $("#academicBtn").on("click",function(){
        $("#academic").removeAttr("hidden", "hidden");

        $("#overview").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        $('html, body').animate({
            scrollTop: $("#academic").offset().top
        }, 1000);
    });

    $("#skillBtn").on("click",function(){
        $("#skill").removeAttr("hidden", "hidden");

        $("#overview").attr("hidden", "hidden");
        $("#academic").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        $('html, body').animate({
            scrollTop: $("#skill").offset().top
        }, 1000);
    });

    $("#projectsBtn").on("click",function(){
        $("#project").removeAttr("hidden", "hidden");

        $("#academic").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#overview").attr("hidden", "hidden");
        $("#experience").attr("hidden", "hidden");

        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });

    $("#experiencesBtn").on("click",function(){
        $("#experience").removeAttr("hidden", "hidden");

        $("#academic").attr("hidden", "hidden");
        $("#skill").attr("hidden", "hidden");
        $("#project").attr("hidden", "hidden");
        $("#overview").attr("hidden", "hidden");

        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    });

    //Floating ROUTE
    $("#overviewBtn2").on("click",function(){
        $("#overviewBtn").click()
    });

    $("#academicBtn2").on("click",function(){
        $("#academicBtn").click()
    });

    $("#skillBtn2").on("click",function(){
        $("#skillBtn").click()
    });

    $("#projectsBtn2").on("click",function(){
        $("#projectsBtn").click()
    });

    $("#experiencesBtn2").on("click",function(){
        $("#experiencesBtn").click()
    });


    //DOANLOAD
    $("#downloadCVBtn").on("click",function(){
        window.location.href = './assets/downloads/CV_TANVIR TANJUM SHOURAV.docx';
    });
    

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
