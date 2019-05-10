$(document).ready(function() {
    $("a.open").click(function(){
        $(".wrap-content").addClass("active-modal");
    });
    $("a.close").click(function() {
        $(".wrap-content").removeClass("active-modal");
    })
});